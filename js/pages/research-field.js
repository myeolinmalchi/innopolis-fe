let render1, render2, render3;

getRenderer({
    name: 'render2',
    postContainer: document.querySelector('#content2 div.post-container'),
    paginationContainer: document.querySelector(
        '#content2 pagination-container',
    ),
    convertToPost: (post, idx) => `
        <div
            onclick="location.href='/html/pages/equipment-detail.html?idx=${idx}'"
        >
            <img src="${post.img}" alt="" />
            <div>
                <span class="body-me">${post.장비명}</span>
                <span class="title-bd">${post.모델명}</span>
            </div>
        </div>
    `,
    path: '/resources/pages/research-field/equipment.json',
    postsPerPage: 12,
}).then((renderer) => {
    render2 = renderer;
    render2(1);
});

getRenderer({
    name: 'render1',
    postContainer: document.querySelector('#content1 div.post-container'),
    paginationContainer: document.querySelector(
        '#content1 pagination-container',
    ),
    convertToPost: (post, idx) => `
            <div
                onclick="location.href='/html/pages/research-field-detail.html?idx=${idx}'"
            >
                    <span class="title-bd"
                        >${post.title}</span
                    >
                    <span class="body-me">${post.date}</span>
                </div>
            </div>
    `,
    path: '/resources/pages/research-field/research-field.json',
    postsPerPage: 12,
}).then((renderer) => {
    render1 = renderer;
    render1(1);
});

getRenderer({
    name: 'render3',
    postContainer: document.querySelector('#content3 div.post-container'),
    paginationContainer: document.querySelector(
        '#content3 pagination-container',
    ),
    convertToPost: (post, idx) => `
            <div
                onclick="location.href='/html/pages/research-field-detail.html?idx=${idx}'"
            >
                    <span class="title-bd"
                        >${post.title}</span
                    >
                    <span class="body-me">${post.date}</span>
                </div>
            </div>
    `,
    path: '/resources/pages/research-field/tech-data.json',
    postsPerPage: 12,
}).then((renderer) => {
    render3 = renderer;
    render3(1);
});
