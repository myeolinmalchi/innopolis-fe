class Footer extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('footer');

        const content = document.createElement('div');
        content.setAttribute('class', 'center');
        const top = document.createElement('div');
        top.setAttribute('class', 'center');
        top.setAttribute('class', 'size');
        const line = document.createElement('div');
        line.setAttribute('class', 'line');
        line.setAttribute('class', 'size');
        const middle = document.createElement('div');
        middle.setAttribute('class', 'middle');
        middle.setAttribute('class', 'size');
        const bottom = document.createElement('div');
        bottom.setAttribute('class', 'bottom');
        bottom.setAttribute('class', 'size');
        const logo = document.createElement('img');
        logo.setAttribute('src', '../image/logo.png');
        logo.setAttribute('class', 'logo');
        const list = document.createElement('ul');
        list.setAttribute('class', 'list');
        const li1 = document.createElement('li');
        li1.innerText = '개인정보처리방침';
        const li2 = document.createElement('li');
        li1.innerText = '이메일무단수집거부';
        const li3 = document.createElement('li');
        li1.innerText = '이용약관';
        const li4 = document.createElement('li');
        li1.innerText = '오시는길';

        const hr = document.createElement('hr');
        const left = document.createElement('div');
        left.setAttribute('class', 'left');

        const address = document.createElement('p');
        address.innerText =
            '(31214) 충청남도 천안시 동남구 풍세면 풍세로 303 한국자동차연구원 강소특구캠퍼스';
        const contact = document.createElement('p');
        contact.innerText =
            '상호명 : 한국자동차 연구원 대표 전화번호 : 041-424-7017 사업자번호 : 312-82-04676 대표자명 : 나승식';
        const right = document.createElement('div');
        right.setAttribute('class', 'right');
        const facebook = document.createElement('img');
        facebook.setAttribute('src', '../image/facebook.png');
        facebook.setAttribute('class', 'social');
        const instagram = document.createElement('img');
        instagram.setAttribute('src', '../image/instagram.png');
        instagram.setAttribute('class', 'social');
        const copyright = document.createElement('p');
        copyright.innerText =
            'Copyright(c) 2021 천안아산강소특구. All right reser';

        const style = document.createElement('style');
        style.textContent = `
            footer {
                height: 342;
                width: 100%;
                background-color:#1A2433;
                display: block;
                color: #9CA3AF;
                padding: 60 170 119 170;
                margin: 0;
            }
            .center{
                height: 100%;
                width: 1024;
                background-color:#1A2433;
                display: block;
                color: #9CA3AF;
                margin: 0 auto;
            }
            .size{
                width : 100%;
                float: left;
            }
            .logo{
                weight:105px;
                height:32px;
                float: left;
                
            }
            
            .list{
                weight: 512px;
                margin-left: 24;
                float: right;
            }
            
            .list li{
                float: left;
                font-size: 16px;
                margin-left: 12;
                margin-right: 12;
            }
            
            .middle{
               margin-top: 28;
            }
            .left{
                float: left;
                width: auto;
            }
            
            .right{
                float: right;
            }
            .social{
                margin-left: 22;
            }
            .bottom{
                margin-top: 20;
            }
            .line{
                margin-top: 23;
            } `;
        shadow.appendChild(wrapper);
        wrapper.appendChild(content);
        content.appendChild(top);
        top.appendChild(logo);
        top.appendChild(list);
        list.appendChild(li1);
        list.appendChild(li2);
        list.appendChild(li3);
        list.appendChild(li4);
        content.appendChild(line);
        line.appendChild(hr);
        content.appendChild(middle);
        middle.appendChild(left);
        left.appendChild(address);
        left.appendChild(contact);
        middle.appendChild(right);
        right.appendChild(facebook);
        right.appendChild(instagram);
        content.appendChild(bottom);
        bottom.appendChild(copyright);
    }
}
customElements.define('footer-info', Footer);
