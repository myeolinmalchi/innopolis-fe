customElements.define(
    'tab-area',
    class extends HTMLElement {
        content_area;
        tab_container;

        connectedCallback() {
            this.classList.add('tab-area');
            setTimeout(() => {
                this.content_area = this.nextElementSibling;
                this.tab_container =
                    this.getElementsByTagName('tab-container')[0];
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
    'tab-introduce-text',
    class extends HTMLElement {
        connectedCallback() {
            this.classList.add('title', 'inner-content', 'introduce');
            this.style.color = 'var(--text-primary)';
        }
    },
);

customElements.define(
    'tab-content',
    class extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            setTimeout(() => {
                if (this.shadowRoot === null) return;
                const common = document.createElement('link');
                common.setAttribute('rel', 'stylesheet');
                common.setAttribute('href', '../../css/common.css');
                const reset = document.createElement('link');
                reset.setAttribute('rel', 'stylesheet');
                reset.setAttribute('href', '../../css/reset.css');
                this.shadowRoot.append(reset, common);
            });
        }
    },
);

customElements.define(
    'tab-content-area',
    class extends HTMLElement {
        tab_area;
        contents;
        connectedCallback() {
            setTimeout(() => {
                this.contents = [...this.children];
                this.tab_area = this.previousElementSibling;
                this.switchTab(0);
            });
        }

        static get observedAttributes() {
            return ['tab-number'];
        }

        attributeChangedCallback(attrName, _, newVal) {
            switch (attrName) {
                case 'tab-number':
                    this.switchTab(newVal);
                    break;
            }
        }

        switchTab(tabNum) {
            this.contents.forEach((c, idx) => {
                if (idx === Number(tabNum)) {
                    c.style.display = 'block';
                    this.tab_area.tab_container.tabs[idx].setAttribute(
                        'state',
                        'active',
                    );
                } else {
                    c.style.display = 'none';
                    this.tab_area.tab_container.tabs[idx].setAttribute(
                        'state',
                        'default',
                    );
                }
            });
        }
    },
);
