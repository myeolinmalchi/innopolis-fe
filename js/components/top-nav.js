function getAllSiblings(elem, filter) {
    let sibs = [];
    elem = elem.parentNode.firstChild;
    while ((elem = elem.nextSibling)) {
        if (elem.nodeType === 3) continue; // text node
        if (!filter || filter(elem)) sibs.push(elem);
    }
    return sibs;
}

customElements.define(
    'top-nav',
    class extends HTMLElement {
        sibs;
        connectedCallback() {
            const login = this.getAttribute('login') ?? 'false';
            this.innerHTML = `
                <nav>
                    <div class="container">
                        <img src="" alt="" />
                        <div>
                            <input type="checkbox" id="hamburger" />
                            <label for="hamburger"> </label>
                        </div>
                        <div class="title-02">
                            <a href="/html/pages/introduce.html">강소특구소개</a>
                            <a href="">지원사업소개</a>
                            <a href="/html/pages/tech-info.html">기술정보</a>
                            <a href="/html/pages/research-field.html">연구마당</a>
                            <a href="">메타타운</a>
                            <a href="">고객지원</a>
                            <a href="/html/pages/promotion-center.html">홍보센터</a>
                            <a href="/html/pages/lent-space.html">입주마당</a>
                        </div>
                        <div>
                            ${
                                login === 'true'
                                    ? `
                                <button-text underline="false" style_="secondary"
                                    >마이페이지</button-text
                                >
                                <button-text underline="true" style_="secondary"
                                    >로그아웃</button-text
                                >
                                `
                                    : `
                                <button-text underline="true" style_="secondary"
                                    >로그인</button-text
                                >
                                `
                            }
                        </div>
                    </div>
                </nav>
                <div id="hamburger-container">
                    <div class="login-container">
                        ${
                            login === 'true'
                                ? `
                                <button-default style_="default">마이페이지</button-default>
                                <button-default style_="outline">로그아웃</button-default>
                                `
                                : `
                                <span class="body-me"
                                    >로그인을 하면 더 많은<br />
                                    서비스를 이용할 수 있습니다.
                                </span>
                                <button-default style_="default">로그인</button-default>
                                <button-default style_="outline">회원가입</button-default>
                                `
                        }
                    </div>
                    <div class="menu-container">
                        <div>
                            <span>강소특구소개</span>
                            <div>
                                <a href="/html/pages/introduce.html?tab=0">인사말</a>
                                <a href="/html/pages/introduce.html?tab=1">강소특구개요</a>
                                <a href="/html/pages/introduce.html?tab=2">오시는길</a>
                            </div>
                        </div>
                        <div>
                            <span>지원사업소개</span>
                            <div>
                                <a href="">연구기관기술</a>
                                <a href="">지역기술</a>
                            </div>
                        </div>
                        <div>
                            <span>기술정보</span>
                            <div>
                                <a href="/html/pages/tech-info.html?tab=0">기술검색</a>
                                <a href="/html/pages/tech-info.html?tab=1">우수기술</a>
                                <a href="/html/pages/tech-info.html?tab=2">기술동향</a>
                            </div>
                        </div>
                        <div>
                            <span>연구마당</span>
                            <div>
                                <a href="/html/pages/research-field.html?tab=0">연구분야</a>
                                <a href="/html/pages/research-field.html?tab=1">보유장비</a>
                                <a href="/html/pages/research-field.html?tab=2">기술동향</a>
                            </div>
                        </div>
                        <div>
                            <span>메타타운</span>
                            <div>
                                <a href="">메타타운</a>
                            </div>
                        </div>
                        <div>
                            <span>고객지원</span>
                            <div>
                                <a href="">공지사항</a>
                                <a href="">사업공고</a>
                                <a href="">특구일정</a>
                            </div>
                        </div>
                        <div>
                            <span>홍보센터</span>
                            <div>
                                <a href="/html/pages/promotion-center.html?tab=0">기업홍보</a>
                                <a href="/html/pages/promotion-center.html?tab=1">홍보자료</a>
                                <a href="/html/pages/promotion-center.html?tab=2">보도자료</a>
                            </div>
                        </div>
                        <div>
                            <span>입주마당</span>
                            <div>
                                <a href="/html/pages/lent-space.html?tab=0">제1 캠퍼스</a>
                                <a href="/html/pages/lent-space.html?tab=1">제2 캠퍼스</a>
                                <a href="/html/pages/lent-space.html?tab=2">입주공간 신청</a>
                                <a href="/html/pages/lent-space.html?tab=3">입주기업</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            const hamburgerButton = document.getElementById('hamburger');
            const hamburgerContainer = document.getElementById(
                'hamburger-container',
            );
            const label = hamburgerButton.nextElementSibling;
            label.onclick = (e) => {
                const button = e.target.previousElementSibling;
                if (button.checked === true) {
                    button.setAttribute('checked', false);
                } else {
                    button.setAttribute('checked', true);
                }
            };

            setTimeout(() => {
                const observer = new MutationObserver(() => {
                    this.sibs = getAllSiblings(this, undefined);
                });
                observer.observe(this.parentNode, {
                    childList: true,
                });
                hamburgerButton.onchange = (e) => {
                    const checked = e.target.checked;
                    if (checked) {
                        hamburgerContainer.style.display = 'flex';
                        this.sibs.forEach((e) => {
                            if (e === this) return;
                            e.style.visibility = 'hidden';
                        });
                    } else {
                        hamburgerContainer.style.display = 'none';
                        this.sibs.forEach((e) => {
                            if (e === this) return;
                            e.style.visibility = 'visible';
                        });
                    }
                };
            });
        }

        static get observedAttributes() {
            return ['login'];
        }

        attributeChangedCallback(attrName, _, newVal) {
            switch (attrName) {
                case 'login':
                    break;
                default:
                    break;
            }
        }
    },
);
