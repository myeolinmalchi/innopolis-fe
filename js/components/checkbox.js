customElements.define(
    'checkbox-default',
    class extends HTMLElement {
        checkbox;
        label;
        constructor() {
            super();

            this.checkbox = document.createElement('input');
            this.checkbox.setAttribute('type', 'checkbox');
            this.checkbox.setAttribute('id', 'checkbox');

            this.label = document.createElement('label');
            this.label.setAttribute('id', 'label');
            this.label.setAttribute('for', 'checkbox');
        }
        connectedCallback() {
            const shadow = this.attachShadow({ mode: 'open' });
            const size = this.getAttribute('size') ?? 's';
            const state = this.getAttribute('state') ?? 'default';

            const stylesheet = document.createElement('style');
            stylesheet.innerText = `
                [type=checkbox] {
                    display: none;
                }

                [type=checkbox] + label {
                    box-sizing: border-box;
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 1px solid var(--color-gray-filled);
                    border-radius: 1px;
                }

                [type=checkbox]:checked + label {
                    border: none;
                    background: var(--color-blue-filled);
                }

                [type=checkbox]:checked + label:hover {
                    border: none;
                    background: var(--color-blue-hover);
                }

                [type=checkbox] + label:hover {
                    border: 1px solid var(--color-gray-hover);
                }
            `;

            this.label.onclick = () => {
                this.checkbox.setAttribute('checked', !this.checkbox.checked);
            };

            const link1 = document.createElement('link');
            link1.setAttribute('href', '../css/common.css');
            link1.setAttribute('rel', 'stylesheet');

            const link2 = document.createElement('link');
            link2.setAttribute('href', '../css/reset.css');
            link2.setAttribute('rel', 'stylesheet');

            shadow.append(link1, link2, stylesheet, this.checkbox, this.label);
        }
    },
);
