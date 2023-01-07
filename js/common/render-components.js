// @ts-check

/**
 * @typedef {Object} RenderParameter
 * @property {string} name
 * @property {(post: any) => boolean} [filter]
 * @property {HTMLDivElement} postContainer
 * @property {HTMLElement} paginationContainer
 * @property {(post: any, idx: number) => string} convertToPost
 * @property {string} path
 * @property {number} [postsPerPage = 12]
 */

/**
 * @param {RenderParameter} params
 * @return {Promise<(page: number, keyword?: string) => void>}
 */
const getRenderer = async ({
  name,
  filter,
  postContainer,
  paginationContainer,
  convertToPost,
  path,
  postsPerPage,
}) => {
  const res = await fetch(path);
  /** @type {any[]} */
  const posts = await res.json().then((json) => {
    return filter ? json.filter(filter) : json;
  });

  return (page, keyword) => {
    const currentPosts = keyword
      ? posts.filter(({ title }) => title.includes(keyword))
      : posts;

    paginationContainer.style.display = "flex";
    paginationContainer.innerHTML =
      new Array(Math.ceil(currentPosts.length / postsPerPage))
        .fill(0)
        .reduce((acc, _, idx) => {
          return (
            acc +
            `<pagination-unit link="javascript:${name}(${idx + 1}${
              keyword ? `, '${keyword}'` : ""
            })" state="${idx + 1 === page ? "focus" : "default"}">${
              idx + 1
            }</pagination-unit>`
          );
        }, `<pagination-arrow direction="left"></pagination-arrow>`) +
      `<pagination-arrow direction="right"></pagination-arrow>`;

    if (!currentPosts || currentPosts.length === 0) {
      paginationContainer.style.display = "none";
      postContainer.innerHTML = `
                <span class="empty-posts">
                    <span class="body-me">등록된 자료가 없습니다.</span>
                </span>
            `;
      return;
    }

    postContainer.innerHTML = currentPosts
      .slice(postsPerPage * (page - 1), postsPerPage * page)
      .reduce((acc, post, idx) => {
        return acc + convertToPost(post, idx + postsPerPage * (page - 1));
      }, "");
  };
};
