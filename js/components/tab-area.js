customElements.define(
    'tab-area',
    class extends HTMLElement {
        content_area;
        tab_container;
        introduction_area;
        constructor() {
            super();
            window.onload = () => {
                const urlParams = new URLSearchParams(window.location.search);
                const tabNum = urlParams.get('tab');
                if (tabNum) {
                    this.setAttribute('tab-number', tabNum);
                }
            };
        }

        connectedCallback() {
            this.classList.add('tab-area');
            setTimeout(() => {
                this.content_area = this.nextElementSibling;
                this.tab_container =
                    this.getElementsByTagName('tab-container')[0];
                this.introduction_area = this.getElementsByTagName(
                    'tab-introduction-container',
                )[0];
            });
        }

        static get observedAttributes() {
            return ['tab-number'];
        }

        attributeChangedCallback(attrName, _, newVal) {
            switch (attrName) {
                case 'tab-number':
                    const tab = Number(newVal);
                    this.content_area?.setAttribute('tab-number', tab);
                    const state = { sitename: history.state };
                    history.pushState(
                        state,
                        '',
                        window.location.pathname + '?tab=' + tab,
                    );
                    this['tab-number'] = tab;

                    break;
                default:
                    break;
            }
        }
    },
);

customElements.define(
    'subcontent-tab-area',
    class extends HTMLElement {
        content_area;
        tab_container;
        introduction_area;
        constructor() {
            super();
        }

        connectedCallback() {
            this.classList.add('tab-area');
            setTimeout(() => {
                this.content_area = this.nextElementSibling;
                this.tab_container =
                    this.getElementsByTagName('tab-container')[0];
                this.introduction_area = this.getElementsByTagName(
                    'tab-introduction-container',
                )[0];
            });
        }

        static get observedAttributes() {
            return ['tab-number'];
        }

        attributeChangedCallback(attrName, _, newVal) {
            switch (attrName) {
                case 'tab-number':
                    const tab = Number(newVal);
                    this.content_area?.setAttribute('tab-number', tab);
                    const state = { sitename: history.state };
                    history.pushState(state, '');
                    this['tab-number'] = tab;

                    break;
                default:
                    break;
            }
        }
    },
);

customElements.define(
    'tab-container',
    class extends HTMLElement {
        tabs;
        connectedCallback() {
            this.classList.add('inner-content', 'tab-container');
            setTimeout(() => {
                this.tabs = [...this.getElementsByTagName('tab-default')];
                this.tabs.forEach((t, idx) => {
                    t.onclick = () => {
                        this.parentNode.setAttribute('tab-number', Number(idx));
                    };
                });
            });
        }
    },
);

customElements.define(
    'tab-introduction-container',
    class extends HTMLElement {
        contents;
        tab_area;
        connectedCallback() {
            this.classList.add('inner-content', 'introduce');
            setTimeout(() => {
                this.contents = [...this.children];
                this.tab_area = this.parentNode;
                const observer = new MutationObserver(() => {
                    this.contents = [...this.children];
                    this.tab_area.content_area.switchTab(0);
                });

                observer.observe(this, {
                    childList: true,
                });
            });
        }
    },
);

customElements.define(
    'tab-introduction-content',
    class extends HTMLElement {
        connectedCallback() {
            this.classList.add('title');
            this.style.color = 'var(--text-primary)';
        }
    },
);

customElements.define('tab-content', class extends HTMLElement {});

customElements.define(
    'tab-content-area',
    class extends HTMLElement {
        tab_area;
        contents;
        connectedCallback() {
            setTimeout(() => {
                this.contents = [...this.children];
                this.tab_area = this.previousElementSibling;
                this.tab_area.tab_container =
                    this.tab_area.getElementsByTagName('tab-container')[0];
                this.switchTab(0);
                const observer = new MutationObserver(() => {
                    this.contents = [...this.children];
                    this.switchTab(0);
                });

                observer.observe(this, {
                    childList: true,
                });
            });
        }

        static get observedAttributes() {
            return ['tab-number'];
        }

        attributeChangedCallback(attrName, _, newVal) {
            switch (attrName) {
                case 'tab-number':
                    this.switchTab(Number(newVal));
                    break;
            }
        }

        switchTab(tabNum) {
            this.contents?.forEach((c, idx) => {
                if (idx === Number(tabNum)) {
                    c.style.display = 'block';
                    this.tab_area.tab_container.tabs[idx].setAttribute(
                        'state',
                        'active',
                    );
                    this.tab_area.introduction_area.contents[
                        idx
                    ].style.display = 'block';
                } else {
                    c.style.display = 'none';
                    this.tab_area.tab_container.tabs[idx].setAttribute(
                        'state',
                        'default',
                    );
                    this.tab_area.introduction_area.contents[
                        idx
                    ].style.display = 'none';
                }
            });
        }
    },
);
