let render1_1, render1_2, render1_3, render1_4;
let render2, render3, render4;

const renderParams = {
    convertToPost: (post, idx) => `
        <div class="post-wrapper" onclick="location.href='/html/pages/company-promotion-detail.html?idx=${idx}'">
            <img class="post-img" src="${post.img}" alt="">
            <div class="post-detail-wrapper">
                <span class="post-detail-subti body-me">${post.type}</span>
                <span class="post-detail-ti body-bd">${post.title}</span>
            </div>
        </div>
    `,
    path: '/resources/pages/promotion-center/company-promotion.json',
    postsPerPage: 12,
};

getRenderer({
    ...renderParams,
    postContainer: document.querySelector('#content1-1 div.post-container'),
    paginationContainer: document.querySelector(
        '#content1-1 pagination-container',
    ),
}).then((renderer) => {
    render1_1 = renderer;
    render1_1(1);
});

getRenderer({
    ...renderParams,
    name: 'render1_2',
    postContainer: document.querySelector('#content1-2 div.post-container'),
    paginationContainer: document.querySelector(
        '#content1-2 pagination-container',
    ),
    filter: ({ type }) => type === '연구소기업',
}).then((renderer) => {
    render1_2 = renderer;
    render1_2(1);
});

getRenderer({
    ...renderParams,
    name: 'render1_3',
    postContainer: document.querySelector('#content1-3 div.post-container'),
    paginationContainer: document.querySelector(
        '#content1-3 pagination-container',
    ),
    filter: ({ type }) => type === '첨단기술 기업',
}).then((renderer) => {
    render1_3 = renderer;
    render1_3(1);
});

getRenderer({
    ...renderParams,
    name: 'render1_4',
    postContainer: document.querySelector('#content1-4 div.post-container'),
    paginationContainer: document.querySelector(
        '#content1-4 pagination-container',
    ),
    filter: ({ type }) => type === '특구내기업',
}).then((renderer) => {
    render1_4 = renderer;
    render1_4(1);
});

getRenderer({
    name: 'render2',
    postContainer: document.querySelector('#content2 div.post-container'),
    paginationContainer: document.querySelector(
        '#content2 pagination-container',
    ),
    convertToPost: (post, idx) => `
        <div class="post-wrapper" onclick="location.href='/html/pages/promotion-data-detail.html?idx=${idx}'">
            <img class="post-img" src="${post.thumbnail}" alt="">
            <div class="post-detail-wrapper">
                <span class="post-detail-ti body-bd">${post.title}</span>
                <span class="post-detail-date body-me">${
                    post.datetime.split(' ')[0]
                }</span>
            </div>
        </div>
    `,
    path: 'v1/board.php?bo_table=promotion2',
    postsPerPage: 12,
}).then((renderer) => {
    render2 = renderer;
    render2(1);
});

getRenderer({
    name: 'render3',
    postContainer: document.querySelector('#content3 div.promotion_wrapper'),
    paginationContainer: document.querySelector(
        '#content3 pagination-container',
    ),
    convertToPost: (post, idx) => `
        <report-item
            name="${post.title}"
            summary="${post.summary}"
            date="${post.datetime.split(' ')[0]}"
            link="${post.link}"
            maker="${post.wr_2}"
        ></report-item>
    `,
    path: 'v1/board.php?bo_table=bodo',
    postsPerPage: 12,
}).then((renderer) => {
    render3 = renderer;
    render3(1);
});

getRenderer({
    name: 'render4',
    postContainer: document.querySelector('#content4 div.post-container'),
    paginationContainer: document.querySelector(
        '#content4 pagination-container',
    ),
    convertToPost: (post, idx) => `
        <div class="post-wrapper" onclick="location.href='/html/pages/event-photo-detail.html?idx=${idx}'">
            <img class="post-img" src="${post.thumbnail}" alt="">
            <div class="post-detail-wrapper">
                <span class="post-detail-ti body-bd">${post.title}</span>
                <span class="post-detail-date body-me">${
                    post.datetime.split(' ')[0]
                }</span>
            </div>
        </div>
    `,
    path: 'v1/board.php?bo_table=gallery',
    postsPerPage: 12,
}).then((renderer) => {
    render4 = renderer;
    render4(1);
});
