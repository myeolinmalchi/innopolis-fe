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

            this.resetColor(this['type'], this['state']);

            this.classList.add('title-01');
            this.style.cursor = 'pointer';

            this.onmouseover = () => {
                if (this['type'] === 'primary') {
                    this.style.color = 'var(--color-blue-hover)';
                } else if (this['type'] === 'secondary') {
                    this.style.color = 'var(--color-gray-hover)';
                }
            };

            this.onmouseout = () => {
                this.resetColor(this['type'], this['state']);
            };
        }

        static get observedAttributes() {
            return ['state'];
        }

        attributeChangedCallback(attrName, _, newVal) {
            switch (attrName) {
                case 'state':
                    this.resetColor(this['type'], newVal);
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
