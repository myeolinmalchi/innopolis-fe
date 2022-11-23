class header_default extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        const container = document.createElement('header');

        const logo = document.createElement('div');
        const logoImg = document.createElement('img');
        const nav = document.createElement('div');
        const ul = document.createElement('ul');

        const li1 = document.createElement('li');
        const a1 = document.createElement('a');
        a1.innerText = '강소특구소개';
        li1.appendChild(a1);

        const li2 = document.createElement('li');
        const a2 = document.createElement('a');
        a2.innerText = '지원사업소개';
        li2.appendChild(a2);

        const li3 = document.createElement('li');
        const a3 = document.createElement('a');
        a3.innerText = '기술/기업마당';
        li3.appendChild(a3);

        const li4 = document.createElement('li');
        const a4 = document.createElement('a');
        a4.innerText = '연구마당';
        li4.appendChild(a4);

        const li5 = document.createElement('li');
        const a5 = document.createElement('a');
        a5.innerText = '입주마당';
        li5.appendChild(a5);

        const li6 = document.createElement('li');
        const a6 = document.createElement('a');
        a6.innerText = '공지사항';
        li6.appendChild(a6);

        const li7 = document.createElement('li');
        const a7 = document.createElement('a');
        a7.innerText = '특구마당';
        li7.appendChild(a7);

        const status = document.createElement('div');

        const loginbtn = document.createElement('input');
        loginbtn.setAttribute('type', 'button');
        loginbtn.setAttribute('value', '로그인');

        const logoutbtn = document.createElement('input');
        logoutbtn.setAttribute('type', 'button');
        logoutbtn.setAttribute('value', '로그아웃');

        const mypagebtn = document.createElement('input');
        mypagebtn.setAttribute('type', 'button');
        mypagebtn.setAttribute('value', '마이페이지');

        const menuIcon = document.createElement('img');
        menuIcon.setAttribute('src', '../image/menuIcon.png');

        const theme = this.getAttribute('theme');
        const login = this.getAttribute('login');
        const size = this.getAttribute('size');

        const style = document.createElement('style');

        let status_font_color = '#374151';
        let font_color = '#9CA3AF';
        let background_color = '#FFFFFF';
        let width = 1440;
        logoImg.setAttribute('src', '../image/headerLogoDefault.png');

        container.setAttribute('class', 'deafult');
        logo.setAttribute('class', 'logo');
        nav.setAttribute('class', 'nav');
        status.setAttribute('class', 'login');

        if (theme === 'clear') {
            font_color = '#FFFFFF';
            status_font_color = '#FFFFFF';
            background_color = '';
            logoImg.setAttribute('src', '../image/headerLogoClear.png');
            container.setAttribute('class', 'clear');
        }
        logo.appendChild(logoImg);

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        ul.appendChild(li6);
        ul.appendChild(li7);
        if (login === 'True') {
            status.appendChild(mypagebtn);
            status.appendChild(logoutbtn);
        } else {
            status.appendChild(loginbtn);
        }

        if (size === 'M') {
            width = 1024;
            status.appendChild(menuIcon);
            ul.setAttribute('class', 'hide');
            loginbtn.setAttribute('class', 'hide');
            logoutbtn.setAttribute('class', 'hide');
            mypagebtn.setAttribute('class', 'hide');
        }

        style.textContent = `
        ul{
            list-style: none;
        }
        .hide{
            display:none;
        }
            header{
                background-color: ${background_color};
                display: block;
                width: ${width}px;
                height: 100px;
                margin: 0 auto;
                line-height: 100px;
                font-size: 18px;
                color: ${font_color};
            }
            
            .logo{
                float: left;
                margin-left: 80px;
                margin-top: 30;
                height: 70;
            }

            .nav{
                width: 65%;
                margin: 0 auto;
            }
            .nav li{
                float: left;
                margin: 0px 16px;
                
            }

            .login{
                float: right;
                margin-right: 80px;    
            }

            input{
                font-size: 18px;
                line-height: 100px;
                background: inherit ;
                border:none;
                box-shadow:none;
                border-radius:0;
                padding:0;
                overflow:visible;
                cursor:pointer;
                margin: 0 8;
            }

            input:hover{
                text-decoration: underline;
            }

            .login input{
                color: ${status_font_color};
            }
            .login img{
                margin-top: 45px;
            }
        `;

        this.shadowRoot.appendChild(container);
        this.shadowRoot.append(style);
        container.appendChild(logo);
        container.appendChild(nav);
        nav.appendChild(ul);
        container.appendChild(status);
    }
}

customElements.define('header-default', header_default);
