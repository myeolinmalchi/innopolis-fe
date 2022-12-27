class top_image extends HTMLElement {
    connectedCallback() {
        const img_src = this.getAttribute('img_src') ?? '';
        const title = this.getAttribute('title');
        const summary = this.getAttribute('summary');

        const content_top_img = document.createElement('div');
        content_top_img.setAttribute('class', 'content-top-img');

        content_top_img.style.backgroundImage = `url(${img_src})`;

        const content_wrapper = document.createElement('div');
        content_wrapper.setAttribute('class', 'content-wrapper');

        const content_container = document.createElement('div');
        content_container.setAttribute('class', 'content-container');

        const content_title = document.createElement('div');
        content_title.setAttribute('class', 'content-title');

        const title_span = document.createElement('span');
        title_span.innerText = title;

        const content_summary = document.createElement('div');
        content_summary.setAttribute('class', 'content-summary');

        const image = document.createElement('div');
        image.setAttribute('class', 'image');

        const img = document.createElement('img');
        img.setAttribute('src', '/image/top-img.svg');

        const summary_span = document.createElement('span');
        summary_span.innerText = summary;

        this.appendChild(content_top_img);

        content_top_img.appendChild(content_wrapper);

        content_wrapper.appendChild(content_container);
        content_container.appendChild(content_title);
        content_container.appendChild(content_summary);

        content_title.appendChild(title_span);

        content_summary.appendChild(image);
        image.appendChild(img);

        content_summary.appendChild(summary_span);

        content_summary.onclick = () => {
            window.scrollTo({
                top:
                    content_top_img.scrollHeight + content_top_img.clientHeight,
                left: 0,
                behavior: 'smooth',
            });
        };
    }
}

customElements.define('top-image', top_image);
