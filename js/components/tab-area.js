customElements.define(
    'tab-area',
    class extends HTMLElement {
        content_area;
        tab_container;

        connectedCallback() {
            this.style = `
                display: flex;
                flex-direction: column;
                justifyContent: center;
                padding: 64px 170px;
            `;
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
            this.style.display = 'flex';
            this.style.flexDirection = 'row';
            this.style.boxSizing = 'border-box';
            this.style.marginTop = '48px';
            this.style.gap = '32px';
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
            this.classList.add('title-03');
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
                this.contents = [...this.getElementsByTagName('tab-content')];
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
