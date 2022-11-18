customElements.define(
    'pagination-container',
    class extends HTMLElement {
        connectedCallback() {
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.flexDirection = 'row';
        }
    },
);

customElements.define(
    'pagination-unit',
    class extends HTMLElement {
        connectedCallback() {
            const state = this.getAttribute('state') ?? 'default';
            const link = this.getAttribute('link') ?? '#';

            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';

            this.style.boxSizing = 'border-box';

            this.style.width = '38px';
            this.style.height = '38px';
            this.style.borderRadius = '38px';
            this.style.background = 'var(--color-white-01)';
            this.style.margin = '0px 4px';
            this.style.cursor = 'pointer';

            this.classList += 'body-02-me';

            switch (state) {
                case 'default':
                    this.style.color = 'var(--text-secondary)';
                    this.style.background = 'var(--color-white-01)';
                    this.onmouseover = () => {
                        this.style.background = 'var(--background-gray-02)';
                    };
                    this.onmouseout = () => {
                        this.style.background = 'var(--color-white-01)';
                    };
                    this.onclick = () => {
                        window.location.href = link;
                    };
                    break;
                case 'disabled':
                    this.style.color = 'var(--text-disabled)';
                    this.style.background = 'var(--color-white-01)';
                    break;
                case 'focus':
                    this.style.color = 'var(--text-white)';
                    this.style.background = 'var(--background-blue-01)';
                    break;
            }
        }
    },
);

customElements.define(
    'pagination-arrow',
    class extends HTMLElement {
        connectedCallback() {
            const direction = this.getAttribute('direction') ?? 'left';
            const state = this.getAttribute('state') ?? 'default';
            const link = this.getAttribute('link') ?? '#';

            if (direction === 'left') {
                this.style.marginRight = '12px';
            } else if (direction === 'right') {
                this.style.marginLeft = '12px';
            }

            const arrow = (function () {
                switch (direction) {
                    case 'left':
                        return state === 'default'
                            ? `<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.25 14L1.25 8L7.25 2" stroke="#4B5563" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
                            : `<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.25 14L1.25 8L7.25 2" stroke="#111827" stroke-opacity="0.2" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
                    case 'right':
                        return state === 'default'
                            ? `<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75 14L7.75 8L1.75 2" stroke="#4B5563" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
                            : `<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75 14L7.75 8L1.75 2" stroke="#111827" stroke-opacity="0.2" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
                }
            })();

            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';

            this.style.boxSizing = 'border-box';

            this.style.cursor = 'pointer';
            this.style.width = '38px';
            this.style.height = '38px';
            this.style.borderRadius = '38px';
            this.style.background = 'var(--color-white-01)';

            if (state === 'default') {
                this.onmouseover = () => {
                    this.style.background = 'var(--background-gray-02)';
                };
                this.onmouseout = () => {
                    this.style.background = 'var(--color-white-01)';
                };
                this.onclick = () => {
                    window.location.href = link;
                };
            }

            this.innerHTML = arrow;
        }
    },
);
