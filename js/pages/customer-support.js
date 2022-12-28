let render1, render2;

getRenderer({
    name: 'render1',
    postContainer: document.querySelector('#content1 div.post-container'),
    paginationContainer: document.querySelector(
        '#content1 pagination-container',
    ),
    path: '/resources/pages/customer-support/notice.json',
    convertToPost: (post, idx) => `
        <div
            onclick="location.href='/html/pages/notice-detail.html?idx=${idx}'"
        >
            <span class="title-bd">
                ${
                    post.공지
                        ? '<span class="notice-primary body-bd">공지</span>'
                        : ''
                }
                ${post.title}
            </span
            >
            <span class="body-me">${post.date}</span>
        </div>
    `,
    postsPerPage: 10,
}).then((renderer) => {
    render1 = renderer;
    render1(1);
});

getRenderer({
    name: 'render2',
    postContainer: document.querySelector('#content2 div.post-container'),
    paginationContainer: document.querySelector(
        '#content2 pagination-container',
    ),
    path: '/resources/pages/customer-support/business-announcement.json',
    convertToPost: (post, idx) => `
        <div
            onclick="location.href='/html/pages/business-announcement.html?idx=${idx}'"
        >
            <span class="title-bd">
                <span class="body-bd ${
                    post.접수중 === '접수중'
                        ? 'notice-primary'
                        : 'notice-secondary'
                }"
                    >${post.접수중 ?? '접수 마감'}</span>
                ${post.title}
            </span
            >
            <span class="body-me">${post.date}</span>
        </div>
    `,
    postsPerPage: 10,
}).then((renderer) => {
    render2 = renderer;
    render2(1);
});
