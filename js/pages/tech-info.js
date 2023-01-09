let render1, render2, render3;
document
    .querySelector(`#content1 textfield-search`)
    .addEventListener('keydown', (e) => {
        if (e.keyCode == 13) {
            const keyword = e.target.getValue();
            render1(1, keyword);
        }
    });

document
    .querySelector(`#content2 textfield-search`)
    .addEventListener('keydown', (e) => {
        if (e.keyCode == 13) {
            const keyword = e.target.getValue();
            render2(1, keyword);
        }
    });

getRenderer({
    name: 'render1',
    postContainer: document.querySelector('#content1 div.post-container'),
    paginationContainer: document.querySelector(
        '#content1 pagination-container',
    ),
    convertToPost: (post, idx) =>
        `
            <div
                class="post-wrapper"
                onclick="location.href='/html/pages/search-tech-detail.html?idx=${idx}'"
            >
                <img class="post-img" src="/image/empty-thumbnail.png" alt="" />
                <div class="post-detail-wrapper">
                        <span class="post-detail-subti body-me">
                            ${post.Author}
                        </span>
                    <span class="post-detail-ti body-bd"
                        >${post.title}</span
                    >
                    <div class="post-detail-hashtag-wrapper body-me">
                        <span class="post-detail-hashtag">출원번호 ${post.no}</span>
                    </div>
                </div>
            </div>
        `,
    path: 'v1/tech_search.php?',
    postsPerPage: 12,
}).then((renderer) => {
    render1 = renderer;
    render1(1, '');
});

getRenderer({
    name: 'render2',
    postContainer: document.querySelector('#content2 div.post-container'),
    paginationContainer: document.querySelector(
        '#content2 pagination-container',
    ),
    convertToPost: (post, idx) =>
        `
            <div
                class="post-wrapper"
                onclick="location.href='/html/pages/great-tech-detail.html?idx=${idx}'"
            >
                <img class="post-img" src="https://innopolis-katech.re.kr/${
                    post.img ?? '/image/empty-thumbnail.png'
                }" alt="" />
               <div class="post-detail-wrapper">
                    <span class="post-detail-subti body-me">TRL${
                        post.TRL ? ` ${post.TRL}` : ''
                    }</span>
                    <span class="post-detail-ti body-bd"
                        >${post.title}</span
                    >
                    <div class="post-detail-hashtag-wrapper body-me">
                        ${new Array(7).fill(0).reduce((acc, _, idx) => {
                            const tag = post['category' + (idx + 1).toString()];
                            return (
                                acc +
                                (tag
                                    ? `<span class="post-detail-hashtag">#${tag}</span>`
                                    : '')
                            );
                        }, '')}
                    </div>
                </div>
            </div>
        `,
    path: 'v1/excellent_tech.php?',
    postsPerPage: 12,
}).then((renderer) => {
    render2 = renderer;
    render2(1, '');
});

getRenderer({
    name: 'render3',
    postContainer: document.querySelector('#content3 div.post-container'),
    paginationContainer: document.querySelector(
        '#content3 pagination-container',
    ),
    convertToPost: (post, idx) => {
        const id = post.link.split('/')[3];
        const img_src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
        return `
        <div class="post-wrapper" onclick="location.href='${post.link}'">
                <img
                    class="post-img"
                    src="${img_src}"
                    alt=""
                />
                <div class="post-detail-wrapper">
                    <span class="post-detail-ti body-bd"
                          >${post.title}</span
                    >
                    <span class="post-detail-date body-me">
                        ${post.datetime.split(' ')[0]}
                    </span>
                </div>
            </div>
                `;
    },
    path: 'v1/board.php?bo_table=video',
    postsPerPage: 12,
}).then((renderer) => {
    render3 = renderer;
    render3(1, '');
});
