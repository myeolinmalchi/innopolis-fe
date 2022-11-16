customElements.define(
    'tab-default',
    class extends HTMLElement {
        connectedCallback() {
            const style = this.getAttribute('style_') ?? 'primary';
            const state = this.getAttribute('state') ?? 'default';

            this.classList += 'title-01';
            this.style.cursor = 'pointer';
            if (style === 'primary') {
                if (state === 'default') {
                    this.style.color = 'var(--color-blue-disabled)';
                } else if (state === 'active') {
                    this.style.color = 'var(--color-blue-filled)';
                }
            } else if (style === 'secondary') {
                if (state === 'default') {
                    this.style.color = 'var(--color-gray-disabled)';
                } else if (state === 'active') {
                    this.style.color = 'var(--color-gray-filled)';
                }
            }

            this.onmouseover = () => {
                if (style === 'primary') {
                    this.style.color = 'var(--color-blue-hover)';
                } else if (style === 'secondary') {
                    this.style.color = 'var(--color-gray-hover)';
                }
            };

            this.onmouseout = () => {
                if (style === 'primary') {
                    if (state === 'default') {
                        this.style.color = 'var(--color-blue-disabled)';
                    } else if (state === 'active') {
                        this.style.color = 'var(--color-blue-filled)';
                    }
                } else if (style === 'secondary') {
                    if (state === 'default') {
                        this.style.color = 'var(--color-gray-disabled)';
                    } else if (state === 'active') {
                        this.style.color = 'var(--color-gray-filled)';
                    }
                }
            };
        }
    },
);
