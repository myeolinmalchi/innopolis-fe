class TRL extends HTMLElement {
    circles;
    lines;
    texts;
    container;
    text_container;
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const stylesheet = document.createElement('style');
        stylesheet.innerText = `
            .circle {
                width: 16px;
                height: 16px;
                border-radius: 16px;
                box-sizing: border-box;
            }

            .done {
                background: var(--text-blue);
                border: 1px solid var(--text-blue);
            }

            .done-text {
                color: var(--text-primary);
            }

            .none {
                background: none;
                border: 1px solid var(--text-disabled);
            }

            .none-text {
                color: var(--text-disabled);
            }

            .line {
                width: 63px;
                margin: 0;
            }

            .circle-container {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }

            .text-container {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: top;
                gap: 25px;
                margin-top: 12px;
            }

            span {
                width: 56px;
                text-align: center;
                font-size: var(--body-01);
            }

            .container {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        `;
        const link1 = document.createElement('link');
        link1.setAttribute('rel', 'stylesheet');
        link1.setAttribute('href', '../../css/common.css');
        this.shadowRoot.append(link1, stylesheet);

        this.container = document.createElement('div');
        this.container.classList.add('container');

        this.circle_container = document.createElement('div');
        this.circle_container.classList.add('circle-container');
        this.text_container = document.createElement('div');
        this.text_container.classList.add('text-container');

        this.circles = Array(9);
        this.lines = Array(9);
        this.texts = Array(9);

        for (let i = 0; i < 9; i++) {
            this.circles[i] = document.createElement('div');
            this.circles[i].classList.add('circle');
            this.lines[i] = document.createElement('hr');
            this.lines[i].classList.add('line');
            this.texts[i] = document.createElement('span');
        }

        this.texts[0].innerHTML = '기본원리<br>파악';
        this.texts[1].innerHTML = '기본개념';
        this.texts[2].innerHTML = '기능 및<br> 개념 검증';
        this.texts[3].innerHTML = '연구실 환경 테스트';
        this.texts[4].innerHTML = '유사환경<br>테스트';
        this.texts[5].innerHTML = '파일럿 현장 테스트';
        this.texts[6].innerHTML = '상용모델<br>개발';
        this.texts[7].innerHTML = '실제 환경 테스트';
        this.texts[8].innerHTML = '사업화<br>상용 운영';
    }
    connectedCallback() {
        const achievement = Number(this.getAttribute('achievement')) ?? 1;

        for (let i = 0; i < 9; i++) {
            if (i < achievement) {
                this.circles[i].classList.add('done');
                this.lines[i].classList.add('done');
                this.texts[i].classList.add('done-text');
                this.texts[i].classList.add('body-bd');
            } else {
                this.circles[i].classList.add('none');
                this.lines[i].classList.add('none');
                this.texts[i].classList.add('none-text');
                this.texts[i].classList.add('body-me');
            }
        }

        this.circle_container.append(this.circles[0]);
        for (let i = 1; i < 9; i++) {
            this.circle_container.append(this.lines[i]);
            this.circle_container.append(this.circles[i]);
        }

        this.texts.forEach((t) => {
            this.text_container.append(t);
        });

        this.container.append(this.circle_container, this.text_container);
        this.shadowRoot.append(this.container);
    }
}

customElements.define('trl-container', TRL);
