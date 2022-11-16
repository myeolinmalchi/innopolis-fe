customElements.define(
    'checkbox-default',
    class extends HTMLElement {
        wrapper;
        checkbox;
        constructor() {
            super();
            this.wrapper = document.createElement('label');

            this.checkbox = document.createElement('input');
            this.checkbox.setAttribute('type', 'checkbox');
        }
        connectedCallback() {
            const shadow = this.attachShadow({ mode: 'open' });
            const size = this.getAttribute('size') ?? 's';
            const state = this.getAttribute('state') ?? 'default';

            const stylesheet = document.createElement('style');
            stylesheet.innerText = `
                input {
                    width: ${size === 's' ? '13px' : '18px'};
                    height: ${size === 's' ? '13px' : '18px'};
                    border: 1px solid var(--stroke-gray-03);
                    border-radius: 1px;
                }

                input:checked:hover {
                }

                input:hover {

                }

                input:checked {

                }
            `;
        }
    },
);
