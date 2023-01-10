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
    postContainer,
    paginationContainer,
    convertToPost,
    path,
    postsPerPage,
}) => {
    return async (page, keyword) => {
        const res = await fetch(
            `https://innopolis-katech.re.kr/${path}&page=${page}${
                keyword ? `&search=${keyword}` : ``
            }&perPage=${postsPerPage}`,
        ).then((res) => {
            if (res.status === 200) {
                /** @type {Promise<{status: string; text: string; list: Array<any>;count: number;}>}*/
                const body = res.json();
                return body;
            } else {
                alert('불러오지 못했습니다.');
                location.href = '/';
                return { list: [], count: 0 };
            }
        });

        console.log(res?.list);
        console.log(res?.count);

        const pagePerSection = window.innerWidth < 1024 ? 5 : 10;
        const lastPage = Math.ceil(res?.count / postsPerPage);
        const pageSection = Math.floor((page - 1) / pagePerSection);
        const currentCount =
            pageSection === Math.floor(lastPage / pagePerSection)
                ? lastPage % pagePerSection
                : pagePerSection;

        paginationContainer.style.display = 'flex';
        paginationContainer.innerHTML =
            new Array(currentCount).fill(0).reduce((acc, _, idx) => {
                const _page = pageSection * pagePerSection + idx + 1;
                return (
                    acc +
                    `<pagination-unit link="javascript:${name}(${_page}${
                        keyword ? `, '${keyword}'` : ''
                    })" state="${
                        _page === page ? 'focus' : 'default'
                    }">${_page}</pagination-unit>`
                );
            }, `<pagination-arrow direction="left" ${pageSection === 0 ? '' : `onclick='${name}(${page - pagePerSection})'`}></pagination-arrow>`) +
            `<pagination-arrow direction="right" ${
                pageSection === Math.floor(lastPage / pagePerSection)
                    ? ''
                    : `onclick='${name}(${page + pagePerSection})'`
            }></pagination-arrow>`;

        if (!res?.list || res?.list.length === 0) {
            paginationContainer.style.display = 'none';
            postContainer.innerHTML = `
                <span class="empty-posts">
                    <span class="body-me">등록된 자료가 없습니다.</span>
                </span>
            `;
            return;
        }

        postContainer.innerHTML = res.list.reduce((acc, post, idx) => {
            return acc + convertToPost(post, idx + postsPerPage * (page - 1));
        }, '');
    };
};
