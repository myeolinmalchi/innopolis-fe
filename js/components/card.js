class card_container extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {}
}

class card_content extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const img_src =
            this.getAttribute('img_src') ?? '/image/empty-thumbnail.png';
        const category_value = this.getAttribute('category') ?? '카테고리';
        const companyName_value =
            this.getAttribute('name') ?? '회사이름을 입력하시오';
        const link =
            this.getAttribute('link') ??
            "location.href='/html/pages/promotion-center-detail.html'";
        this.attachShadow({ mode: 'open' });

        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('onClick', link);

        const imgwrapper = document.createElement('div');
        imgwrapper.setAttribute('class', 'round-04');

        const card_img = document.createElement('img');
        card_img.setAttribute('src', img_src);

        const text_content = document.createElement('div');
        text_content.setAttribute('class', 'text-content');

        const category = document.createElement('span');
        category.setAttribute('class', 'category');
        category.innerText = category_value;

        const companyName = document.createElement('div');
        companyName.setAttribute('class', 'name');
        companyName.innerText = companyName_value;
        const style = document.createElement('style');
        style.textContent = `
        .card{
            float: left;
            width: 100%;
            height: 300px;
            margin-right: 16px;
            margin-bottom: 24px;
        }
        .card img{
            float: left;
            width: 100%;
            height: 180px;
            background: #F4F6F8;
        
        }
        .text-content{
            width: 100%;
            height: 120px;
            padding: 16px;
            float: left;
            text-overflow: ellipsis;
            word-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical; 
            overflow: hidden;
            box-sizing: border-box;
        }
        .category{
            font-size: var(--body-02);
            line-height: 22.4px;
            letter-spacing: -0.01em;
            font-weight: 500;
            color: var(--text-third);
            margin-bottom: 8px;
            float: left;
            width: 100%;
            height:22px;
        }
        .name{
            display:block;
            float: left;
            width: 100%;
            font-weight: 700;
            font-size: var(--body-04);
            color : var(--text-primary);
            line-height: 28.8px;
            height: 58px;
            letter-spacing: -0.01em;
            overflow: hidden;
            text-overflow:ellipsis;
            word-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical; 
        }
        
        @media(max-width: 640px){
            .card{
                height: 192px;
                float: left;
                margin: 0;
                margin-bottom:16px;
            }
            .card img{
                height: 104px;
            }
            .text-content{
                padding: 8px;
            }
            .category{
                font-size: var(--body-01);
                line-height:19.2px;
                letter-spacing: -0.01em;
            }
            .name{
                font-size: var(--body-02);
                line-height: 22.4px;
                height: 44px;
                letter-spacing: -0.01em;
            }
        }
        `;
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(card);

        card.appendChild(imgwrapper);
        imgwrapper.appendChild(card_img);

        card.appendChild(text_content);
        text_content.appendChild(category);
        text_content.appendChild(companyName);
    }
}

class promotion_content extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const img_src = this.getAttribute('img_src') ?? '#';
        const name_value =
            this.getAttribute('name') ??
            '법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권...';
        const date = this.getAttribute('date') ?? 'YY.MM.DD';
        const link =
            this.getAttribute('link') ??
            "location.href='/html/pages/promotion-data-detail.html'";

        this.attachShadow({ mode: 'open' });

        const promotion_item = document.createElement('div');
        promotion_item.setAttribute('class', 'promotion_item');
        promotion_item.setAttribute('onClick', link);

        const promotionImg = document.createElement('div');
        promotionImg.setAttribute('class', 'promotionImg round-04');

        const Img = document.createElement('img');
        Img.setAttribute('src', img_src);

        const promotionTextContent = document.createElement('div');
        promotionTextContent.setAttribute('class', 'promotionTextContent');

        const promotionName = document.createElement('div');
        promotionName.setAttribute('class', 'promotionName');
        promotionName.innerText = name_value;

        const promotionDate = document.createElement('div');
        promotionDate.setAttribute('class', 'promotionDate');
        promotionDate.innerText = date;

        const style = document.createElement('style');
        style.textContent = `
        .promotion_item{
            display: block;
            width: 100%;
            height: 300px;
            float: left;
            margin-right: 24px;
            margin-bottom: 24px;
        }
        
        
        .promotionImg{
            width: 100%;
            height: 180px;
        }

        img {
            object-fit: contain;
            max-width: 100%;
        }
        
        .promotionTextContent{
            height: 120px;
            padding: 16px;
            box-sizing: border-box;
        }
        .summary{
            width: 100%;
            line-height: 22.4px;
            letter-spacing: -0.01em;
            font-size: var(--body-02);
            color: var(--text-third);
        }
        .promotionName{
            font-size: var(--body-04);
            font-weight: 700;
            line-height: 28.8px;
            height: 58px;
            letter-spacing: -0.01em;
            overflow: hidden;
            text-overflow:ellipsis;
            margin-bottom: 8px;
            word-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical; 
        }
        .maker{
            width: 100%;
            margin-top: 8px;
            font-size: var(--body-02);
            color: var(--text-third);
        }
        .news{
            float: left;
            text-align: left;
        }
        .promotionDate{
            float: right;
            text-align: right;
            color: var(--text-third);
            line-height: 22.4px;
            letter-spacing: -0.01em;
            font-size : var(--body-02);
            
        }
        
        @media (max-width: 640px) {
            .promotion_wrapper{
                margin-top: 32px;
                margin-bottom: 32px;
            }
            .promotion_item{
                width: 100%;
                height: 213px;
                margin-bottom: 8px;
            }
            

            .promotionImg{
                height: 104px;
            }
            .promotionTextContent{
                height: 109px;
                padding: 8px;
            }
            .promotionName{
                height: 66px;
                font-size: var(--body-02);
                line-height: 22.4px;
                letter-spacing: -0.01em;
                -webkit-line-clamp: 3;
            }
            .promotionDate{
                font-size: var(--body-01);
                line-height: 19.2px;
                letter-spacing: -0.01em;
            }
            
            
        }
        `;
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(promotion_item);

        promotion_item.appendChild(promotionImg);
        promotion_item.appendChild(promotionTextContent);

        promotionImg.appendChild(Img);

        promotionTextContent.appendChild(promotionName);
        promotionTextContent.appendChild(promotionDate);
    }
}

class report_content extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const img_src =
            this.getAttribute('img_src') ?? '/image/empty-thumbnail.png';
        const name_value =
            this.getAttribute('name') ??
            '법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권...';
        const summary_value =
            this.getAttribute('summary') ??
            '법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권...';
        const date = this.getAttribute('date') ?? 'YY.MM.DD';
        const maker_value = this.getAttribute('maker') ?? '현찬일보';
        const link = this.getAttribute('link') ?? '';
        this.attachShadow({ mode: 'open' });

        const report_item = document.createElement('div');
        report_item.setAttribute('class', 'report_item');
        report_item.setAttribute('onClick', `location.href='${link}'`);

        const reportImg = document.createElement('div');
        reportImg.setAttribute('class', 'reportImg round-04');

        const Img = document.createElement('img');
        Img.setAttribute('src', img_src);

        const reportTextContent = document.createElement('div');
        reportTextContent.setAttribute('class', 'reportTextContent');

        const reportName = document.createElement('div');
        reportName.setAttribute('class', 'reportName');
        reportName.innerText = name_value;

        const summary = document.createElement('div');
        summary.setAttribute('class', 'summary');
        summary.innerText = summary_value;

        const maker = document.createElement('div');
        maker.setAttribute('class', 'maker');

        const reportDate = document.createElement('div');
        reportDate.setAttribute('class', 'reportDate');
        reportDate.innerText = date;

        const news = document.createElement('div');
        news.setAttribute('class', 'news');
        news.innerText = maker_value;

        const style = document.createElement('style');
        style.textContent = `
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .report_item{
            display: block;
            width: 100%;
            height: 352px;
            float: left;
            margin-right: 24px;
            margin-bottom: 24px;
        }
        
        
        .reportImg{
            width: 100%;
            height: 180px;
        }
        
        .reportTextContent{
            height: 172px;
            padding: 16px;
            box-sizing: border-box;
        }
        .summary{
            width: 100%;
            line-height: 22.4px;
            letter-spacing: -0.01em;
            height: 44px;
            overflow: hidden;
            text-overflow:ellipsis;
            word-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical; 
            font-size: var(--body-02);
            color: var(--text-third);
        }
        .reportName{
            font-size: var(--body-04);
            font-weight: 700;
            line-height: 28.8px;
            letter-spacing: -0.01em;
            height: 58px;
            overflow: hidden;
            text-overflow:ellipsis;
            word-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical; 
            margin-bottom: 8px;
        }
        .maker{
            width: 100%;
            margin-top: 8px;
            font-size: var(--body-02);
            color: var(--text-third);
        }
        .news{
            float: left;
            text-align: left;
        }
        .reportDate{
            float: right;
            text-align: right;
            
        }
        
        @media (max-width: 640px) {
            .report_item{
                width: 100%;
                height: 257px;
                margin-bottom: 16px;
                margin-right: 0px;
            }
            .reportImg{
                height: 104px;
            }
            .reportTextContent{
                height: 109px;
                padding: 8px;
            }
            .reportName{
                height: 44px;
                font-size: var(--body-02);
                line-height: 22.4px;
                letter-spacing: -0.01em;
            }
            .summary{
                height: 44px;
                line-height: 22.4px;
                letter-spacing: -0.01em;
            }
            .reportDate{
                font-size: var(--body-01);
            }    
        }
        `;
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(report_item);

        report_item.appendChild(reportImg);
        report_item.appendChild(reportTextContent);

        reportImg.appendChild(Img);

        reportTextContent.appendChild(reportName);
        reportTextContent.appendChild(summary);
        reportTextContent.appendChild(maker);

        maker.appendChild(reportDate);
        maker.appendChild(news);
    }
}

customElements.define('card-container', card_container);
customElements.define('card-content', card_content);
customElements.define('promotion-item', promotion_content);
customElements.define('report-item', report_content);
