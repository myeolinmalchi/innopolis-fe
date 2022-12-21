
class companycard_content extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const imgSrc = this.getAttribute('imgSrc') ?? '#';
        const name = this.getAttribute('name') ?? '회사이름';
        const division = this.getAttribute('division') ?? '제 1캠퍼스';
        const type = this.getAttribute('type') ?? '개방형';
        const summary = this.getAttribute('summary') ?? '회사소개의 내용이 들어와야합니다.';

        this.attachShadow({ mode: 'open' });

        const companyCard = document.createElement('div');
        companyCard.setAttribute('class', 'companyCard');

        const companyInfo = document.createElement('div');
        companyInfo.setAttribute('class', 'companyInfo');

        const companyImg = document.createElement('div');
        companyImg.setAttribute('class', 'companyImg');

        const img = document.createElement('img');
        img.setAttribute('src', imgSrc);

        const companyText = document.createElement('companyText');
        companyText.setAttribute('class', 'companyText');

        const companyName = document.createElement('companyName');
        companyName.setAttribute('class', 'companyName');

        const namespan = document.createElement('span');
        namespan.innerText = name;

        const companyType = document.createElement('companyType');
        companyType.setAttribute('class', 'companyType');

        const divisionspan = document.createElement('span');
        divisionspan.innerText = division;

        const divide = document.createElement('span');
        divide.setAttribute('class', 'divide');
        divide.innerText = "|";

        const open = document.createElement('open');
        open.setAttribute('class', 'open');
        open.innerText = type;

        const comapnySummary = document.createElement('div');
        comapnySummary.setAttribute('class', 'companySummary');
        comapnySummary.innerText = summary;

        const companyHomepage = document.createElement('div');
        companyHomepage.setAttribute('class', 'companyHompage');

        const homepagebtn = document.createElement('input');
        homepagebtn.setAttribute('type', 'button');
        homepagebtn.setAttribute('value', '홈페이지');
        homepagebtn.setAttribute('class', 'round-04');

        companyCard.appendChild(companyInfo);
        companyCard.appendChild(comapnySummary);
        companyCard.appendChild(companyHomepage);

        companyInfo.appendChild(companyImg);
        companyInfo.appendChild(companyText);

        companyImg.appendChild(img);

        companyText.appendChild(companyName);
        companyText.appendChild(companyType);
        companyName.appendChild(namespan);

        companyType.appendChild(divisionspan);
        companyType.appendChild(divide);
        companyType.appendChild(open);

        companyHomepage.appendChild(homepagebtn);


        const style = document.createElement('style');
        style.textContent = `
        body{
            font-family: 'Pretendatd';
        }
        .cardContainer{
            max-width: 1100px;
            display: block;
            margin: 0 auto;
        }
        .companyCard{
            width: 100%;
        }
        
        .companyInfo{
            width: 100%;
            float: left;
        }
        
        .companyImg{
            width: 60px;
            height: 60px;
            background-color: #ddd;
            float: left;
            margin-right: 16px;
        }
        .companyText{
            height: 60px;
        }
        .companyName{
            width: 70%;
            font-size: var(--title-01);
            line-height: 31.2px;
            letter-spacing: -0.01em;
            font-weight: 700;
            float: left;
            color: var(--text-primary);
        }
        .divide{
            margin: 0px 5px;   
        }
        .companyType{
            float: left;
            color: var(--text-third);
            font-size:var(--body-03);
            line-height: 25.6px;
            letter-spacing: -0.01em;
        }
        
        .companySummary{
            float: left;
            margin-top: 24px;
            margin-bottom: 30px;
            line-height: 22.4px;
            width: 100%;
            height: 88px;
            color: var(--test-second);
            letter-spacing: -0.01em;
            font-size: var(--body-02);
            overflow: hidden;
        }
        
        .companyHompage input{
            background-color: var(--background-white-01);
            border: solid 1px var(--stroke-gray-01);
            padding: 6px 12px;
            font-size: var(--body-03);
            line-height: 25.6px;
            letter-spacing: -0.01em;
        }
        
        
        pagination-container{
            margin-top: 72px;
            margin-bottom: 120px;
        }
        
        @media (max-width: 640px) {
            .cardContainer{
                width: 100%;
            }
            
            .companySummary{
                width: 100%;
                height: 57px;
                margin-top : 16px;
                margin-bottom : 16px;
                font-size: var(--body-01);
            }
            .companyName{
                font-size: var(--subtitle-02);
            }
            .companyType{
                font-size: var(--body-02);
            }

        }
        
        `

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(companyCard);

    }
}

customElements.define('company-card', companycard_content);