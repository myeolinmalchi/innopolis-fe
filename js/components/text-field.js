customElements.define(
    'textfield-default',
    class extends HTMLElement {
        input;
        constructor() {
            super();
            this.input = document.createElement('input');
            this.input.setAttribute('type', 'text');
            this.input.setAttribute('class', 'input');
        }
        connectedCallback() {
            const shadow = this.attachShadow({ mode: 'open' });
            const state = this.getAttribute('state') ?? 'default';
            const size = this.getAttribute('size') ?? 'l';
            const placeholder = this.getAttribute('placeholder') ?? '';

            const [padding, font_class, height] = (function () {
                switch (size) {
                    case 's':
                        return ['8px 16px', 'body-02-me', 38];
                    case 'l':
                        return ['14px 16px', 'body-03-me', 54];
                    default:
                        return ['8px 16px', 'body-02-me', 38];
                }
            })();

            this.input.classList += ' ' + font_class;
            this.input.setAttribute('placeholder', placeholder);
            if (state === 'disabled') {
                this.input.disabled = true;
            }

            const stylesheet = document.createElement('style');
            stylesheet.innerText = `
                .input {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    background: var(--background-white-01);
                    padding: ${padding};
                    height: ${height}px;
                    color: var(--text-primary);
                    border: 1px solid var(--stroke-gray-01);
                    border-radius: 2px;
                    width: 100%;
                }

                .input::placeholer {
                    color: var(--text-third)
                }

                .input:focus {
                    color: var(--text-secondary);
                    outline-width:0;
                }

                .input:disabled {
                    background: var(--color-gray-disabled);
                    color: var(--text-disabled);
                    border: 1px solid var(--color-gray-disabled);
                }
                .input:disabled::-webkit-input-placeholder { /* WebKit browsers */
                    color: var(--text-disabled);
                }
                .input:disabled:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    color: var(--text-disabled);
                }
                .input:disabled::-moz-placeholder { /* Mozilla Firefox 19+ */
                    color: var(--text-disabled);
                }
                .input:disabled:-ms-input-placeholder { /* Internet Explorer 10+ */
                    color: var(--text-disabled);
                }
            `;
            const link1 = document.createElement('link');
            link1.setAttribute('href', '../../css/common.css');
            link1.setAttribute('rel', 'stylesheet');

            const link2 = document.createElement('link');
            link2.setAttribute('href', '../../css/reset.css');
            link2.setAttribute('rel', 'stylesheet');

            shadow.append(link1, link2, stylesheet, this.input);
        }
    },
);

customElements.define(
    'textfield-count',
    class extends HTMLElement {
        container;
        input;
        max;
        count;
        prevValue;

        constructor() {
            super();
            this.container = document.createElement('div');
            this.container.setAttribute('class', 'container');

            this.input = document.createElement('input');
            this.input.setAttribute('type', 'text');
            this.input.setAttribute('class', 'input');
            this.input.marginRight = '10px';
            this.prevValue = '';
            this.count = document.createElement('span');
            this.count.setAttribute('class', 'body-03-me');
            this.count.style.color = 'var(--text-third)';
        }
        connectedCallback() {
            const shadow = this.attachShadow({ mode: 'open' });
            const state = this.getAttribute('state') ?? 'default';
            const max = Number(this.getAttribute('max')) ?? 50;
            const placeholder = this.getAttribute('placeholder') ?? '';
            this.input.classList += ' ' + 'body-03-me';
            this.input.placeholder = placeholder;
            if (state === 'disabled') {
                this.input.disabled = true;
            }

            const stylesheet = document.createElement('style');
            stylesheet.innerText = `
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                .container {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    border-radius: 2px;
                    padding: 14px 16px;
                    height: 54px;
                    background: ${
                        state === 'disabled'
                            ? 'var(--color-gray-disabled)'
                            : 'var(--background-white-01)'
                    };
                    border: ${
                        state === 'disabled'
                            ? '1px solid var(--color-gray-disabled)'
                            : '1px solid var(--stroke-gray-01)'
                    };
                }

                .input {
                    box-sizing: border-box;
                    color: var(--text-primary);
                    border: none;
                }

                .button {
                    width: 36px;
                    height: 36px;
                    background: var(--background-gray-02);
                    border-radius: 2px;
                }

                .input::placeholer {
                    color: var(--text-third);
                }

                .input:focus {
                    color: var(--text-secondary);
                    outline-width:0;
                }

                .input:disabled {
                    background: var(--color-gray-disabled);
                    color: var(--text-disabled);
                }
                .input:disabled::-webkit-input-placeholder { /* WebKit browsers */
                    color: var(--text-disabled);
                }
                .input:disabled:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    color: var(--text-disabled);
                }
                .input:disabled::-moz-placeholder { /* Mozilla Firefox 19+ */
                    color: var(--text-disabled);
                }
                .input:disabled:-ms-input-placeholder { /* Internet Explorer 10+ */
                    color: var(--text-disabled);
                }
            `;
            const link1 = document.createElement('link');
            link1.setAttribute('href', '../css/common.css');
            link1.setAttribute('rel', 'stylesheet');

            const link2 = document.createElement('link');
            link2.setAttribute('href', '../css/reset.css');
            link2.setAttribute('rel', 'stylesheet');

            this.count.innerText = `0/${max}`;

            const textHandler = (e) => {
                this.prevValue = e.target.value;
                const count = e.target.value.length;
                if (count > max) {
                    this.input.value = this.prevValue;
                } else {
                    this.prevValue = e.target.value;
                    this.count.innerText = `${count}/${max}`;
                }
            };

            this.input.onfocus = () => {
                this.count.style.color = 'var(--text-secondary)';
            };
            if (state !== 'disabled') {
                this.input.addEventListener('focusout', () => {
                    if (this.input.value === '') {
                        this.count.style.color = 'var(--text-third)';
                    } else {
                        this.count.style.color = 'var(--text-primary)';
                    }
                });
            } else {
                this.count.style.color = 'var(--text-disabled)';
            }

            this.input.onkeyup = textHandler;
            this.input.onchange = textHandler;

            this.container.append(this.input, this.count);
            shadow.append(link1, link2, stylesheet, this.container);
        }
    },
);

customElements.define(
    'textfield-number',
    class extends HTMLElement {
        container;
        input;
        increase;
        decrease;

        constructor() {
            super();
            this.container = document.createElement('div');
            this.container.setAttribute('class', 'container');

            this.input = document.createElement('input');
            this.input.setAttribute('type', 'number');
            this.input.setAttribute('class', 'input');

            this.increase = document.createElement('button');
            this.increase.setAttribute('id', 'increase');
            this.increase.setAttribute('class', 'button');
            this.increase.innerHTML = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6.5L6 1.5L1 6.5" stroke="#384251" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
            this.decrease = document.createElement('button');
            this.decrease.setAttribute('id', 'decrease');
            this.decrease.setAttribute('class', 'button');
            this.decrease.innerHTML = `<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5L6 6.5L11 1.5" stroke="#384251" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
        }
        connectedCallback() {
            const shadow = this.attachShadow({ mode: 'open' });
            const state = this.getAttribute('state') ?? 'default';
            const size = this.getAttribute('size') ?? 'l';
            const min = Number(this.getAttribute('min')) ?? 0;
            const max = Number(this.getAttribute('max')) ?? 0;
            const default_value =
                Number(this.getAttribute('default-value')) ?? 0;
            this.input.value = default_value;
            this.input.classList += ' ' + 'body-03-me';
            if (state === 'disabled') {
                this.input.disabled = true;
            }

            const stylesheet = document.createElement('style');
            stylesheet.innerText = `
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                .container {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    border-radius: 2px;
                    padding: ${size === 's' ? '10px 8px' : '10px 16px'};
                    height: 54px;
                    background: ${
                        state === 'disabled'
                            ? 'var(--color-gray-disabled)'
                            : 'var(--background-white-01)'
                    };
                    border: ${
                        state === 'disabled'
                            ? '1px solid var(--color-gray-disabled)'
                            : '1px solid var(--stroke-gray-01)'
                    };
                }

                .input {
                    box-sizing: border-box;
                    color: var(--text-primary);
                    border: none;
                    ${size === 's' ? 'width: 30px;' : ''}
                    ${size === 's' ? 'text-align: center;' : ''}
                    ${
                        size === 's'
                            ? `
                            margin-right: 10px;
                            margin-left: 10px;
                        `
                            : `
                            margin-right: 10px;
                        `
                    }
                }

                .button {
                    width: 36px;
                    height: 36px;
                    background: var(--background-gray-02);
                    border-radius: 2px;
                }

                .input::placeholer {
                    color: var(--text-third)
                }

                .input:focus {
                    color: var(--text-secondary);
                    outline-width:0;
                }

                .input:disabled {
                    background: var(--color-gray-disabled);
                    color: var(--text-disabled);
                    border: 1px solid var(--color-gray-disabled);
                }
                .input:disabled::-webkit-input-placeholder { /* WebKit browsers */
                    color: var(--text-disabled);
                }
                .input:disabled:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    color: var(--text-disabled);
                }
                .input:disabled::-moz-placeholder { /* Mozilla Firefox 19+ */
                    color: var(--text-disabled);
                }
                .input:disabled:-ms-input-placeholder { /* Internet Explorer 10+ */
                    color: var(--text-disabled);
                }

                #decrease {
                    ${
                        size === 's'
                            ? `
                            
                        `
                            : `margin-right: 4px;`
                    }
                }
            `;
            const link1 = document.createElement('link');
            link1.setAttribute('href', '../css/common.css');
            link1.setAttribute('rel', 'stylesheet');

            const link2 = document.createElement('link');
            link2.setAttribute('href', '../css/reset.css');
            link2.setAttribute('rel', 'stylesheet');

            this.increase.onclick = () => {
                if (max === 0) return;
                const value = Number(this.input.value);
                if (value >= max) return;
                this.input.value = value + 1;
            };

            this.decrease.onclick = () => {
                const value = Number(this.input.value);
                if (value <= min) return;
                this.input.value = value - 1;
            };

            if (size === 's') {
                this.container.append(this.decrease, this.input, this.increase);
                shadow.append(link1, link2, stylesheet, this.container);
            } else if (size === 'l') {
                this.container.append(this.input, this.decrease, this.increase);
                shadow.append(link1, link2, stylesheet, this.container);
            }
        }
    },
);

customElements.define(
    'textfield-search',
    class extends HTMLElement {
        container;
        input;
        arrow;

        constructor() {
            super();
            this.container = document.createElement('div');
            this.container.setAttribute('class', 'container');

            this.input = document.createElement('input');
            this.input.setAttribute('type', 'text');
            this.input.setAttribute('class', 'input');

            this.arrow = document.createElement('div');
            this.arrow.style.marginRight = '10px';
            this.arrow.style.width = '24px';
            this.arrow.style.height = '24px';
            this.arrow.style.display = 'flex';
            this.arrow.style.alignItems = 'center';
            this.arrow.style.justifyContent = 'center';
            this.arrow.innerHTML = `<svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.25 14L1.25 8L7.25 2" stroke="#384251" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
        }
        connectedCallback() {
            const shadow = this.attachShadow({ mode: 'open' });
            const state = this.getAttribute('state') ?? 'default';
            const placeholder = this.getAttribute('placeholder') ?? '';
            this.input.classList += ' ' + 'body-03-me';
            if (state === 'disabled') {
                this.input.disabled = true;
            }

            this.input.placeholder = placeholder;

            const stylesheet = document.createElement('style');
            stylesheet.innerText = `
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                .container {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    border-radius: 2px;
                    padding: 16px 16px;
                    height: 58px;
                    background: ${
                        state === 'disabled'
                            ? 'var(--color-gray-disabled)'
                            : 'var(--background-white-01)'
                    };
                    border: ${
                        state === 'disabled'
                            ? '1px solid var(--color-gray-disabled)'
                            : '1px solid var(--stroke-gray-01)'
                    };
                }

                .input {
                    box-sizing: border-box;
                    color: var(--text-primary);
                    border: none;
                }

                .input::placeholer {
                    color: var(--text-third);
                }

                .input:focus {
                    color: var(--text-secondary);
                    outline-width:0;
                }

                .input:disabled {
                    background: var(--color-gray-disabled);
                    color: var(--text-disabled);
                    border: 1px solid var(--color-gray-disabled);
                }
                .input:disabled::-webkit-input-placeholder { /* WebKit browsers */
                    color: var(--text-disabled);
                }
                .input:disabled:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    color: var(--text-disabled);
                }
                .input:disabled::-moz-placeholder { /* Mozilla Firefox 19+ */
                    color: var(--text-disabled);
                }
                .input:disabled:-ms-input-placeholder { /* Internet Explorer 10+ */
                    color: var(--text-disabled);
                }
            `;
            const link1 = document.createElement('link');
            link1.setAttribute('href', '../../css/common.css');
            link1.setAttribute('rel', 'stylesheet');

            const link2 = document.createElement('link');
            link2.setAttribute('href', '../../css/reset.css');
            link2.setAttribute('rel', 'stylesheet');

            this.container.append(this.arrow, this.input);
            shadow.append(link1, link2, stylesheet, this.container);
        }
    },
);

customElements.define(
    'textfield-area',
    class extends HTMLElement {
        container;
        input;
        max;
        count;
        prevValue;

        constructor() {
            super();
            this.container = document.createElement('div');
            this.container.setAttribute('class', 'container');

            this.input = document.createElement('textarea');
            this.input.setAttribute('class', 'input');
            this.input.marginRight = '10px';
            this.prevValue = '';
            this.count = document.createElement('span');
            this.count.setAttribute('class', 'body-03-me');
            this.count.style.color = 'var(--text-third)';
        }
        connectedCallback() {
            const shadow = this.attachShadow({ mode: 'open' });
            const state = this.getAttribute('state') ?? 'default';
            const max = Number(this.getAttribute('max')) ?? 50;
            const placeholder = this.getAttribute('placeholder') ?? '';
            const type = this.getAttribute('type') ?? 'default';
            this.input.classList += ' ' + 'body-03-me';
            this.input.placeholder = placeholder;
            if (state === 'disabled') {
                this.input.disabled = true;
            }

            const stylesheet = document.createElement('style');
            stylesheet.innerText = `
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                .container {
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-radius: 2px;
                    border: 1px solid var(--stroke-gray-01);
                    padding: 16px 16px;
                    background: ${
                        state === 'disabled'
                            ? 'var(--color-gray-disabled)'
                            : 'var(--background-white-01)'
                    };
                    border: ${
                        state === 'disabled'
                            ? '1px solid var(--color-gray-disabled)'
                            : '1px solid var(--stroke-gray-01)'
                    };
                }

                .input {
                    box-sizing: border-box;
                    color: var(--text-primary);
                    border: none;
                    resize: none;
                    width: 100%;
                }

                .button {
                    width: 36px;
                    height: 36px;
                    background: var(--background-gray-02);
                    border-radius: 2px;
                }

                .input::placeholer {
                    color: var(--text-third);
                }

                .input:focus {
                    color: var(--text-secondary);
                    outline-width:0;
                }

                .input:disabled {
                    color: var(--text-disabled);
                    background: var(--color-gray-disabled);
                    border: 1px solid var(--color-gray-disabled);
                }

                .input:disabled::-webkit-input-placeholder { /* WebKit browsers */
                    color: var(--text-disabled);
                }
                .input:disabled:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                    color: var(--text-disabled);
                }
                .input:disabled::-moz-placeholder { /* Mozilla Firefox 19+ */
                    color: var(--text-disabled);
                }
                .input:disabled:-ms-input-placeholder { /* Internet Explorer 10+ */
                    color: var(--text-disabled);
                }

                span {
                    width: 100%;
                    text-align: right;
                    margin-top: 10px;
                    height: 22px;
                }
            `;
            const link1 = document.createElement('link');
            link1.setAttribute('href', '../../css/common.css');
            link1.setAttribute('rel', 'stylesheet');

            const link2 = document.createElement('link');
            link2.setAttribute('href', '../../css/reset.css');
            link2.setAttribute('rel', 'stylesheet');

            this.count.innerText = `0/${max}`;

            const textHandler = (e) => {
                this.prevValue = e.target.value;
                const count = e.target.value.length;
                if (count > max) {
                    this.input.value = this.prevValue;
                } else {
                    this.prevValue = e.target.value;
                    this.count.innerText = `${count}/${max}`;
                }
            };

            this.input.onkeyup = textHandler;
            this.input.onchange = textHandler;

            this.input.onfocus = () => {
                this.count.style.color = 'var(--text-secondary)';
            };
            if (state !== 'disabled') {
                this.input.addEventListener('focusout', () => {
                    if (this.input.value === '') {
                        this.count.style.color = 'var(--text-third)';
                    } else {
                        this.count.style.color = 'var(--text-primary)';
                    }
                });
            } else {
                this.count.style.color = 'var(--text-disabled)';
            }

            if (type === 'default') {
                this.container.append(this.input);
            } else {
                this.container.append(this.input, this.count);
            }

            shadow.append(link1, link2, stylesheet, this.container);
        }
    },
);

customElements.define(
    'textfield-time',
    class extends HTMLElement {
        start_time;
        end_time;

        start;
        end;
        hyphen;
        constructor() {
            super();
            this.start_time = document.createElement('input');
            this.end_time = document.createElement('input');

            this.start_time.setAttribute('placeholder', '00:00:00');
            this.end_time.setAttribute('placeholder', '00:00:00');

            this.start_time.classList.add('body-02-me', 'input');
            this.end_time.classList.add('body-02-me', 'input');

            this.start_time.style = `
                text-align: center;
                width: 59px;
            `;

            this.end_time.style = `
                text-align: center;
                width: 59px;
            `;

            this.start_time.onchange = (e) => {
                const value = e.target.value;
                let [hour, minute, second] = value.split(':');

                if (hour != undefined) {
                    if (hour < 0) {
                        hour = 0;
                    } else if (hour > 23) {
                        hour = hour % 24;
                    }
                    if (minute != undefined) {
                        if (minute < 0) {
                            minute = 0;
                        } else if (minute > 59) {
                            minute = 59;
                        }
                        if (second != undefined) {
                            if (second < 0) {
                                second = 0;
                            } else if (second > 59) {
                                second = 59;
                            }
                        } else {
                            second = 0;
                        }
                    } else {
                        minute = 0;
                        second = 0;
                    }
                }
                this.start = new Date(0, 0, 0, hour, minute, second, 0);
                const [_hour, _minute, _second] = [
                    hour.toString().padStart(2, '0'),
                    minute.toString().padStart(2, '0'),
                    second.toString().padStart(2, '0'),
                ];
                e.target.value = `${_hour}:${_minute}:${_second}`;
            };

            this.end_time.onchange = (e) => {
                const value = e.target.value;
                let [hour, minute, second] = value.split(':');

                if (hour != undefined) {
                    if (hour < 0) {
                        hour = 0;
                    } else if (hour > 23) {
                        hour = hour % 24;
                    }
                    if (minute != undefined) {
                        if (minute < 0) {
                            minute = 0;
                        } else if (minute > 59) {
                            minute = 59;
                        }
                        if (second != undefined) {
                            if (second < 0) {
                                second = 0;
                            } else if (second > 59) {
                                second = 59;
                            }
                        } else {
                            second = 0;
                        }
                    } else {
                        minute = 0;
                        second = 0;
                    }
                }
                this.end = new Date(0, 0, 0, hour, minute, second, 0);
                const [_hour, _minute, _second] = [
                    hour.toString().padStart(2, '0'),
                    minute.toString().padStart(2, '0'),
                    second.toString().padStart(2, '0'),
                ];
                e.target.value = `${_hour}:${_minute}:${_second}`;
            };

            this.start_time.setAttribute('type', 'text');
            this.end_time.setAttribute('type', 'text');

            this.hyphen = document.createElement('span');
            this.hyphen.innerText = '-';
            this.hyphen.classList.add('body-02-me');
        }
        connectedCallback() {
            const [
                type, //default, period
                state, //default, disabled
                size, // s, l
            ] = [
                this.getAttribute('type') ?? 'default',
                this.getAttribute('state') ?? 'default',
                this.getAttribute('size') ?? 's',
            ];

            if (state === 'disabled') {
                this.start_time.setAttribute('disabled', true);
                this.end_time.setAttribute('disabled', true);
                this.classList.add('container-disabled');
            } else {
                this.classList.add('container');
            }

            this.style.height = size === 's' ? '38px' : '54px';
            this.style.padding = '8px 16px';

            switch (type) {
                case 'default':
                    this.append(this.start_time);
                    break;
                case 'period':
                    this.start_time.style.marginRight = '8px';
                    this.end_time.style.marginLeft = '8px';
                    this.append(this.start_time, this.hyphen, this.end_time);
                    break;
            }
        }
    },
);

customElements.define(
    'textfield-date',
    class extends HTMLElement {
        start_time;
        end_time;

        start;
        end;
        hyphen;
        constructor() {
            super();
            this.start_time = document.createElement('input');
            this.end_time = document.createElement('input');

            this.start_time.setAttribute('placeholder', 'YY.MM.DD');
            this.end_time.setAttribute('placeholder', 'YY.MM.DD');

            this.start_time.classList.add('body-02-me', 'input');
            this.end_time.classList.add('body-02-me', 'input');

            this.start_time.style = `
                text-align: center;
                width: 68px;
            `;

            this.end_time.style = `
                text-align: center;
                width: 68px;
            `;

            this.start_time.onchange = (e) => {
                const value = e.target.value;
                let [year, month, day] = value.split('.');

                if (year != undefined) {
                    if (year < 0) {
                        year = 0;
                    } else if (year > 99) {
                        year = 99;
                    }
                    if (month != undefined) {
                        if (month < 1) {
                            month = 1;
                        } else if (month > 12) {
                            month = 12;
                        }
                        const lastday = new Date(
                            2000 + Number(year),
                            month,
                            0,
                        ).getDate();
                        if (day != undefined) {
                            if (day < 1) {
                                day = 1;
                            } else if (day > lastday) {
                                day = lastday;
                            }
                        } else {
                            day = 1;
                        }
                    } else {
                        month = 1;
                        day = 1;
                    }
                }
                const temp = new Date(2000 + Number(year), month - 1, day);
                if (this.end && temp > this.end) {
                    alert('종료일은 시작일보다 빠를 수 없습니다.');
                    return;
                }
                this.start = temp;
                const [_year, _month, _day] = [
                    year.toString().padStart(2, '0'),
                    month.toString().padStart(2, '0'),
                    day.toString().padStart(2, '0'),
                ];
                e.target.value = `${_year}.${_month}.${_day}`;
            };

            this.end_time.onchange = (e) => {
                const value = e.target.value;
                let [year, month, day] = value.split('.');

                if (year != undefined) {
                    if (year < 0) {
                        year = 0;
                    } else if (year > 99) {
                        year = 99;
                    }
                    if (month != undefined) {
                        if (month < 1) {
                            month = 1;
                        } else if (month > 12) {
                            month = 12;
                        }
                        const lastday = new Date(
                            2000 + Number(year),
                            month,
                            0,
                        ).getDate();
                        if (day != undefined) {
                            if (day < 1) {
                                day = 1;
                            } else if (day > lastday) {
                                day = lastday;
                            }
                        } else {
                            day = 1;
                        }
                    } else {
                        month = 1;
                        day = 1;
                    }
                }
                const temp = new Date(2000 + Number(year), month - 1, day);
                if (this.start && temp < this.start) {
                    alert('종료일은 시작일보다 빠를 수 없습니다.');
                    return;
                }
                this.end = temp;
                const [_year, _month, _day] = [
                    year.toString().padStart(2, '0'),
                    month.toString().padStart(2, '0'),
                    day.toString().padStart(2, '0'),
                ];
                e.target.value = `${_year}.${_month}.${_day}`;
            };

            this.start_time.setAttribute('type', 'text');
            this.end_time.setAttribute('type', 'text');

            this.hyphen = document.createElement('span');
            this.hyphen.innerText = '-';
            this.hyphen.classList.add('body-02-me');
        }
        connectedCallback() {
            const [
                type, //default, period
                state, //default, disabled
                size, // s, l
            ] = [
                this.getAttribute('type') ?? 'default',
                this.getAttribute('state') ?? 'default',
                this.getAttribute('size') ?? 's',
            ];

            if (state === 'disabled') {
                this.start_time.setAttribute('disabled', true);
                this.end_time.setAttribute('disabled', true);
                this.classList.add('container-disabled');
            } else {
                this.classList.add('container');
            }

            this.style.height = size === 's' ? '38px' : '54px';
            this.style.padding = '8px 16px';

            switch (type) {
                case 'default':
                    this.append(this.start_time);
                    break;
                case 'period':
                    this.start_time.style.marginRight = '8px';
                    this.end_time.style.marginLeft = '8px';
                    this.append(this.start_time, this.hyphen, this.end_time);
                    break;
            }
        }

        setStartday(date) {
            this.start = date;
            if (!date) {
                this.start_time.value = '';
                return;
            }
            const [year, month, day] = [
                date?.getFullYear(),
                date?.getMonth() + 1,
                date?.getDate(),
            ];
            this.start_time.value = `${year}.${month
                .toString()
                .padStart(2, '0')}.${day.toString().padStart(2, '0')}`;
        }
    },
);

customElements.define(
    'textfield-fulldate',
    class extends HTMLElement {
        start_time;
        end_time;

        start;
        end;
        hyphen;
        constructor() {
            super();
            this.start_time = document.createElement('input');
            this.end_time = document.createElement('input');

            this.start_time.setAttribute('placeholder', 'YY.MM.DD 00:00:00');
            this.end_time.setAttribute('placeholder', 'YY.MM.DD 00:00:00');

            this.start_time.classList.add('body-02-me', 'input');
            this.end_time.classList.add('body-02-me', 'input');

            this.start_time.style = `
                text-align: center;
                width: 131px;
            `;

            this.end_time.style = `
                text-align: center;
                width: 131px;
            `;

            this.start_time.onchange = (e) => {
                const value = e.target.value;
                let [date, time] = value.split(' ');
                let [year, month, day] = date.split('.');
                let [hour, minute, second] = time?.split(':') ?? [];

                if (year != undefined) {
                    if (year < 0) {
                        year = 0;
                    } else if (year > 99) {
                        year = 99;
                    }
                    if (month != undefined) {
                        if (month < 1) {
                            month = 1;
                        } else if (month > 12) {
                            month = 12;
                        }
                        const lastday = new Date(
                            2000 + Number(year),
                            month,
                            0,
                        ).getDate();
                        if (day != undefined) {
                            if (day < 1) {
                                day = 1;
                            } else if (day > lastday) {
                                day = lastday;
                            }
                        } else {
                            day = 1;
                        }
                    } else {
                        month = 1;
                        day = 1;
                    }
                }

                if (hour != undefined) {
                    if (hour < 0) {
                        hour = 0;
                    } else if (hour > 23) {
                        hour = hour % 24;
                    }
                    if (minute != undefined) {
                        if (minute < 0) {
                            minute = 0;
                        } else if (minute > 59) {
                            minute = 59;
                        }
                        if (second != undefined) {
                            if (second < 0) {
                                second = 0;
                            } else if (second > 59) {
                                second = 59;
                            }
                        } else {
                            second = 0;
                        }
                    } else {
                        minute = 0;
                        second = 0;
                    }
                } else {
                    hour = 0;
                    minute = 0;
                    second = 0;
                }
                const temp = new Date(
                    2000 + Number(year),
                    month - 1,
                    day,
                    hour,
                    minute,
                    second,
                );
                if (this.end && temp > this.end) {
                    alert('종료일은 시작일보다 빠를 수 없습니다.');
                    return;
                }
                this.start = temp;
                const [_year, _month, _day, _hour, _minute, _second] = [
                    year.toString().padStart(2, '0'),
                    month.toString().padStart(2, '0'),
                    day.toString().padStart(2, '0'),
                    hour.toString().padStart(2, '0'),
                    minute.toString().padStart(2, '0'),
                    second.toString().padStart(2, '0'),
                ];
                e.target.value = `${_year}.${_month}.${_day} ${_hour}:${_minute}:${_second}`;
            };

            this.end_time.onchange = (e) => {
                const value = e.target.value;
                let [date, time] = value.split(' ');
                let [year, month, day] = date.split('.');
                let [hour, minute, second] = time?.split(':') ?? [];

                if (year != undefined) {
                    if (year < 0) {
                        year = 0;
                    } else if (year > 99) {
                        year = 99;
                    }
                    if (month != undefined) {
                        if (month < 1) {
                            month = 1;
                        } else if (month > 12) {
                            month = 12;
                        }
                        const lastday = new Date(
                            2000 + Number(year),
                            month,
                            0,
                        ).getDate();
                        if (day != undefined) {
                            if (day < 1) {
                                day = 1;
                            } else if (day > lastday) {
                                day = lastday;
                            }
                        } else {
                            day = 1;
                        }
                    } else {
                        month = 1;
                        day = 1;
                    }
                }

                if (hour != undefined) {
                    if (hour < 0) {
                        hour = 0;
                    } else if (hour > 23) {
                        hour = hour % 24;
                    }
                    if (minute != undefined) {
                        if (minute < 0) {
                            minute = 0;
                        } else if (minute > 59) {
                            minute = 59;
                        }
                        if (second != undefined) {
                            if (second < 0) {
                                second = 0;
                            } else if (second > 59) {
                                second = 59;
                            }
                        } else {
                            second = 0;
                        }
                    } else {
                        minute = 0;
                        second = 0;
                    }
                } else {
                    hour = 0;
                    minute = 0;
                    second = 0;
                }
                const temp = new Date(
                    2000 + Number(year),
                    month - 1,
                    day,
                    hour,
                    minute,
                    second,
                );
                if (this.start && this.start > temp) {
                    alert('종료일은 시작일보다 빠를 수 없습니다.');
                    return;
                }
                this.end = temp;
                const [_year, _month, _day, _hour, _minute, _second] = [
                    year.toString().padStart(2, '0'),
                    month.toString().padStart(2, '0'),
                    day.toString().padStart(2, '0'),
                    hour.toString().padStart(2, '0'),
                    minute.toString().padStart(2, '0'),
                    second.toString().padStart(2, '0'),
                ];
                e.target.value = `${_year}.${_month}.${_day} ${_hour}:${_minute}:${_second}`;
            };

            this.start_time.setAttribute('type', 'text');
            this.end_time.setAttribute('type', 'text');

            this.hyphen = document.createElement('span');
            this.hyphen.innerText = '-';
            this.hyphen.classList.add('body-02-me');
        }
        connectedCallback() {
            const [
                type, //default, period
                state, //default, disabled
                size, // s, l
            ] = [
                this.getAttribute('type') ?? 'default',
                this.getAttribute('state') ?? 'default',
                this.getAttribute('size') ?? 's',
            ];

            if (state === 'disabled') {
                this.start_time.setAttribute('disabled', true);
                this.end_time.setAttribute('disabled', true);
                this.classList.add('container-disabled');
            } else {
                this.classList.add('container');
            }

            this.style.height = size === 's' ? '38px' : '54px';
            this.style.padding = '8px 16px';

            switch (type) {
                case 'default':
                    this.append(this.start_time);
                    break;
                case 'period':
                    this.start_time.style.marginRight = '8px';
                    this.end_time.style.marginLeft = '8px';
                    this.append(this.start_time, this.hyphen, this.end_time);
                    break;
            }
        }
    },
);
