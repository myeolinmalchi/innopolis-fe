chcustomElements.define(
    'radio-default',
    class extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const wrapper = document.createElement('div');
            const label = document.createElement('label');
            const radio = document.createElement('input');
            const textbox = document.createElement('span');
            radio.setAttribute('type', 'radio');

            const check = this.getAttribute('check') ?? 'false';
            const text = this.getAttribute('text') ?? '';
            const state = this.getAttribute('state') ?? 'default';
            const size = this.getAttribute('size') ?? 'M';

            const [height, width, font_size] = (function () {
                switch (size) {
                    case 'M':
                        return [13, 13, 12];
                    case 'L':
                        return [16.67, 16.67, 16];
                }
            })();
            if (check === 'true') {
                radio.checked = true;
            }
            if (state === 'disabled') {
                radio.disabled = true;
            }

            label.style.fontSize = `${font_size}px`;
            label.style.alignItems = 'center';
            label.style.display = 'flex';
            label.style.gap = '8px';
            radio.style.height = `${height}px`;
            radio.style.width = `${width}px`;
            radio.style.boxSizing = 'border-box';
            radio.style.margin = '0';
            textbox.style.margin = 'auto';

            this.append(wrapper);
            wrapper.appendChild(label);
            textbox.innerHTML = text;
            textbox.style.color = 'var(--text-secondary)';
            textbox.classList.add('body-me');
            label.appendChild(radio);
            label.appendChild(textbox);
        }
    },
);
