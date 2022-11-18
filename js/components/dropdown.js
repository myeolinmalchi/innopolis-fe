customElements.define(
    'dropdown-content',
    class extends HTMLElement {
        connectedCallback() {
            setTimeout(() => {
                const units = [...this.children];
                const header = this.previousElementSibling;

                this.style.position = 'absolute';
                this.style.zIndex = '1';
                this.style.display = 'none';
                this.style.background = 'var(--background-white-01)';
                this.style.textAlign = 'center';
                this.style.padding = '4px 4px';
                this.classList += 'shadow-01';
                this.style.boxSizing = 'border-box';
                this.style.flexDirection = 'column';
                this.style.width = '100%';

                if (header.state === 'default') {
                    header.onclick = () => {
                        if (this.style.display === 'none') {
                            this.style.display = 'flex';
                        } else {
                            this.style.display = 'none';
                        }
                    };
                    units.forEach((u) => {
                        u.style.boxSizing = 'border-box';
                        u.className += 'body-01-me';
                        u.style.border = 'none';
                        u.style.padding = '4px 12px';
                        u.style.borderRadius = '4px';
                        u.style.background = 'none';
                        u.style.width = '100%';
                        u.style.clear = 'both';
                        u.style.cursor = 'pointer';
                        u.onmouseover = () => {
                            u.style.background = 'var(--background-gray-02)';
                        };
                        u.onmouseout = () => {
                            u.style.background = 'none';
                        };
                        u.onclick = () => {
                            const value = u.innerHTML;
                            header.setText(value);
                        };
                    });
                }
            });
        }
    },
);

customElements.define(
    'dropdown-container',
    class extends HTMLElement {
        connectedCallback() {
            this.style.display = 'inline-block';
            this.style.position = 'relative';
        }
    },
);

customElements.define(
    'dropdown-header',
    class extends HTMLElement {
        container;
        text;
        arrow;
        state;
        value;
        constructor() {
            super();
            this.container = document.createElement('div');
            this.container.style.display = 'flex';
            this.container.style.border = '1px solid var(--stroke-gray-01)';
            this.container.style.boxSizing = 'border-box';
            this.container.style.borderRadius = '2px';

            this.text = document.createElement('span');
            this.text.style.color = 'var(--text-third)';
            this.text.style.marginRight = '10px';

            this.arrow = document.createElement('span');
            this.arrow.style.display = 'flex';
            this.arrow.style.alignItems = 'center';
            this.arrow.style.justifyContent = 'center';
        }
        connectedCallback() {
            const size = this.getAttribute('size') ?? 'l';
            const type = this.getAttribute('type') ?? 'default';
            const state = this.getAttribute('state') ?? 'default';
            const value = this.getAttribute('value') ?? '';
            this.state = state;

            const [height, font_class, padding, arrow, arrowSize] =
                (function () {
                    switch (size) {
                        case 's':
                            return [
                                '38px',
                                'body-02-me',
                                '8px 16px',
                                `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.999999 1.5L6 6.5L11 1.5" stroke="#4B5563" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
                                '20px',
                            ];
                        case 'l':
                            return [
                                '54px',
                                'body-03-me',
                                '14px 16px',
                                `<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L8 8L14 2" stroke="#4B5563" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
                                '24px',
                            ];
                        default:
                            return [
                                '38px',
                                'body-02-me',
                                '8px 16px',
                                '',
                                '20px',
                            ];
                    }
                })();

            const [background, border] = (function () {
                switch (type) {
                    case 'default':
                        return [
                            state === 'default'
                                ? 'var(--background-white-01)'
                                : 'var(--color-gray-disabled)',
                            state === 'default'
                                ? '1px solid var(--stroke-gray-01)'
                                : '1px solid var(--color-gray-disabled)',
                        ];
                    case 'clear':
                        return ['none', 'none'];
                    default:
                        return [
                            state === 'default'
                                ? 'var(--background-white-01)'
                                : 'var(--color-gray-disabled)',
                            '1px solid var(--stroke-gray-01)',
                        ];
                }
            })();

            const font_color = (function () {
                switch (state) {
                    case 'default':
                        return 'var(--text-third)';
                    case 'disabled':
                        return 'var(--text-disabled)';
                    default:
                        return 'var(--text-third)';
                }
            })();

            if (state === 'default') {
                this.container.onmouseover = () => {
                    this.text.style.color = 'var(--text-secondary)';
                };

                this.container.onmouseout = () => {
                    if (!this.value) {
                        this.text.style.color = 'var(--text-third)';
                    } else {
                        this.text.style.color = 'var(--text-primary)';
                    }
                };
            }
            this.style.cursor = 'pointer';

            this.text.style.color = font_color;
            this.text.innerText = value;
            this.text.classList += font_class;
            this.container.style.background = background;
            this.container.style.border = border;
            this.container.style.height = height;
            this.container.style.padding = padding;
            this.arrow.innerHTML = arrow;
            this.arrow.style.width = arrowSize;
            this.arrow.style.height = arrowSize;

            this.container.append(this.text, this.arrow);
            this.append(this.container);
        }

        setText(text) {
            this.text.innerText = text;
            this.text.style.color = 'var(--text-primary)';
            this.value = text;
        }
    },
);
