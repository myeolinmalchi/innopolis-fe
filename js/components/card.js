class card_container extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        
    }
}


class card_content extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        const img_src = this.getAttribute('img_src') ?? '#';
        const category_value = this.getAttribute('category') ?? '카테고리';
        const companyName_value = this.getAttribute('name') ?? '회사이름을 입력하시오';
        this.attachShadow({mode: 'open'});

        
        const card = document.createElement('div');
        card.setAttribute('class','card');

        const card_img = document.createElement('img');
        card_img.setAttribute('src',img_src);
        
        const text_content = document.createElement('div');
        text_content.setAttribute('class','text-content');

        const category = document.createElement('span');
        category.setAttribute('class','category');
        category.innerText = category_value;

        const companyName = document.createElement('span');
        companyName.setAttribute('class','name');
        companyName.innerText = companyName_value;

        const style = document.createElement('style');
        style.textContent = `
        .card-container{
            width: 1100px;
            display: block;
            margin-left: 170px;
            float: left;
            max-height: 950px;
            overflow: hidden;
        }
        
        .card{
            float: left;
            width: 257px;
            height: 300px;
            margin-right: 16px;
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
            overflow: hidden;
        }
        .category{
            size: 14px;
            line-height: 14px;
            font-weight: 500;
            color: #9ca3af;
            margin-bottom: 8px;
            float: left;
            width: 100%;
        }
        .name{
            float: left;
            width: 100%;
            font-weight: 700;
            size: 18px;
            line-height: 18px;
            height: 44px;
            overflow: hidden;
        }
        
        @media(max-width: 639px){
            .card-container{
                width: 328px;
                max-height: 1250px;
                margin: 0;
            }
            .card{
                width: 156px;
                height: 192px;
                float: left;
                margin: 0;
            }
            .card img{
                height: 104px;
            }
            .text-content{
                padding: 8px;
            }
        }
        `
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(card);

        card.appendChild(card_img);
        card.appendChild(text_content);
        text_content.appendChild(category);
        text_content.appendChild(companyName);

    }
}

customElements.define('card-container', card_container);
customElements.define('card-content', card_content);
