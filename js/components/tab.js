customElements.define(
    'tab-default',
    class extends HTMLElement {
        connectedCallback() {
            if (!this.hasAttribute('type')) {
                this['type'] = 'primary';
            }

            if (!this.hasAttribute('state')) {
                this['state'] = 'default';
            }

            this.resetColor(this.getAttribute('type'), this['state']);

            this.classList.add('tab', 'title');
            this.style.cursor = 'pointer';

            this.onmouseover = () => {
                const type = this.getAttribute('type');
                if (type === 'primary') {
                    this.style.color = 'var(--color-blue-hover)';
                } else if (type === 'secondary') {
                    this.style.color = 'var(--color-gray-hover)';
                }
            };

            this.onmouseout = () => {
                this.resetColor(this.getAttribute('type'), this['state']);
            };
        }

        static get observedAttributes() {
            return ['state'];
        }

        attributeChangedCallback(attrName, _, newVal) {
            switch (attrName) {
                case 'state':
                    this.resetColor(this.getAttribute('type'), newVal);
                    this['state'] = newVal;
            }
        }

        resetColor(type, state) {
            if (type === 'primary') {
                if (state === 'default') {
                    this.style.color = 'var(--color-blue-disabled)';
                } else if (state === 'active') {
                    this.style.color = 'var(--color-blue-filled)';
                }
            } else if (type === 'secondary') {
                if (state === 'default') {
                    this.style.color = 'var(--color-gray-disabled)';
                } else if (state === 'active') {
                    this.style.color = 'var(--color-gray-filled)';
                }
            }
        }
    },
);
