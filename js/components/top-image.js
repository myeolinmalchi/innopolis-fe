class top_image extends HTMLElement{
    constructor() {
        super();
    }
    connectedCallback(){
        const img_src = this.getAttribute('img_src');
        const title = this.getAttribute('title');
        const summary = this.getAttribute('summary');
        this.attachShadow({mode: 'open'});

        const content_top_img = document.createElement('div');
        content_top_img.setAttribute('class','content-top-img');

        const content_wrapper = document.createElement('div');
        content_wrapper.setAttribute('class','content-wrapper');

        const content_container = document.createElement('div');
        content_container.setAttribute('class','content-container');

        const content_title = document.createElement('div');
        content_title.setAttribute('class','content-title');

        const title_span = document.createElement('span');
        title_span.innerText = title;

        const content_summary = document.createElement('div');
        content_summary.setAttribute('class','content-summary');

        const image = document.createElement('div');
        image.setAttribute('class','image');

        const img = document.createElement('img');
        img.setAttribute('src','../../image/top-img.png');


        const summary_span = document.createElement('span');
        summary_span.innerText = summary;
        const style = document.createElement('style');
        style.textContent = `
        
        .content-top-img {
            height: 400px;
            background-image: url(${img_src});
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
        }
        
        .content-top-img .content-wrapper {
            height: 100%;
            margin: 0 auto;
            max-width: 1100px;
            padding: 0px 80px;
        }
        
        .content-top-img .content-container {
            position: absolute;
            top: 50%;
            max-width: 1100px;
            width: calc(100% - 160px);
            transform: translate(0%, -50%);
        }
        
        .content-top-img .content-title {
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 700;
            font-size: var(--page-title-01);
            line-height: 130%;
            /* or 47px */
        
            letter-spacing: -0.01em;
        
            /* Txt/White */
        
            color: var(--text-white);
            margin-bottom: 21px;
        }
        
        .content-top-img .content-summary {
            font-family: 'Pretendard';
            font-style: normal;
            font-weight: 500;
            font-size: var(--body-03);
            line-height: 160%;
            /* identical to box height, or 26px */
        
            letter-spacing: -0.01em;
            
        
            color: var(--text-white);
        }
        .content-top-img .content-summary .image{
            width: 25.67px;
            display: inline-block;
            margin-right: 9.17px;
        }
        .content-top-img .content-summary span{
            line-height: 26px;
        }

        @media (max-width: 640px) {
            .content-top-img{
                height: 330px;
            }
            .content-top-img .content-container {
                position: absolute;
                top: 50%;
                width: calc(100% - 32px);
                transform: translate(0%, -50%);
            }
            .content-top-img .content-wrapper{
                padding: 0px 16px;
            }
            
            .content-top-img .content-title {
                font-size: var(--subtitle-03);
                margin-bottom: 12px;
            }
            
            .content-top-img .content-summary {
                font-size: var(--body-02);
                color: var(--text-white);
            }
            .content-top-img .content-summary .image{
                margin-right: 8.75px;
                width: 16.5px;
            }
            .content-top-img .content-summary span{
                line-height: 26px;
                margin-left: 8px;
            }
        }
        `
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(content_top_img);

        content_top_img.appendChild(content_wrapper);
        
        content_wrapper.appendChild(content_container);
        content_container.appendChild(content_title);
        content_container.appendChild(content_summary);

        content_title.appendChild(title_span);

        content_summary.appendChild(image);
        image.appendChild(img);

        content_summary.appendChild(summary_span);

    }
}

customElements.define('top-image', top_image);