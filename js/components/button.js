customElements.define(
    'button-default',
    class extends HTMLElement {
        connectedCallback() {
            const style = this.getAttribute('style_') ?? 'primary';
            const state = this.getAttribute('state') ?? 'default';
            const size = this.getAttribute('size') ?? 'm';
            const icon = this.getAttribute('icon') ?? 'none';
            const [color_filled, color_hover, color_disabled, font_color] =
                (function () {
                    switch (style) {
                        case 'primary':
                            return [
                                'var(--color-blue-filled)',
                                'var(--color-blue-hover)',
                                'var(--color-blue-disabled)',
                                state !== 'disabled'
                                    ? 'var(--text-white)'
                                    : 'var(--text-disabled)',
                            ];
                        case 'secondary':
                            return [
                                'var(--color-gray-filled)',
                                'var(--color-gray-hover)',
                                'var(--color-gray-disabled)',
                                state !== 'disabled'
                                    ? 'var(--text-white)'
                                    : 'var(--text-disabled)',
                            ];
                        case 'outline':
                            return [
                                '',
                                'var(--background-gray-02)',
                                '',
                                state !== 'disabled'
                                    ? 'var(--text-secondary)'
                                    : 'var(--text-disabled)',
                            ];
                        default:
                            return [
                                'var(--color-blue-filled)',
                                'var(--color-blue-hover)',
                                'var(--color-blue-disabled)',
                                state !== 'disabled'
                                    ? 'var(--text-white)'
                                    : 'var(--text-disabled)',
                            ];
                    }
                })();

            const [height, padding, gap, arrow, font_class] = (function () {
                switch (size) {
                    case 's':
                        return [
                            34,
                            '6px 12px',
                            icon === 'none' ? 10 : 2,
                            `<svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.0625 5.5L3.5625 3L1.0625 0.5" stroke="${font_color}" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
                            'body-02-me',
                        ];
                    case 'm':
                        return [
                            38,
                            '6px 12px',
                            icon === 'none' ? 10 : 2,
                            `<svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.6875 8.5L4.1875 5L0.6875 1.5" stroke="${font_color}" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
                            'body-03-me',
                        ];
                    case 'l':
                        return [
                            43,
                            '7px 14px',
                            icon === 'none' ? 10 : 4,
                            `<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 9.5L5.5 5.5L1.5 1.5" stroke="${font_color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
                            'body-04-me',
                        ];
                    case 'xl':
                        return [
                            48,
                            '8px 16px',
                            icon === 'none' ? 10 : 4,
                            `<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 9.5L5.5 5.5L1.5 1.5" stroke="${font_color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
                            'body-05-me',
                        ];
                    case 'modal':
                        return [46, '10px 12px', 10, '', 'body-03-me'];
                    default:
                        return [
                            38,
                            '6px 12px',
                            icon === 'none' ? 10 : 2,
                            `<svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.6875 8.5L4.1875 5L0.6875 1.5" stroke="${font_color}" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
                            'body-03-me',
                        ];
                }
            })();

            this.classList += font_class;

            this.onmouseover = () => {
                if (state === 'default') {
                    this.style.background = color_hover;
                }
            };

            this.onmouseout = () => {
                if (state === 'default') {
                    this.style.background = color_filled;
                }
            };

            const width = this.style.width;

            this.style = `
                cursor: pointer;
                width: ${width};
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: ${padding};
                gap: ${gap}px;
                color: ${font_color};
                height: ${height}px;
                box-sizing: border-box;
                ${
                    state === 'default'
                        ? `
                        background: ${color_filled};
                    `
                        : state === 'disabled'
                        ? `background: ${color_disabled};`
                        : ''
                }
                border-radius: ${size === 'modal' ? '2' : '4'}px;
                ${
                    style === 'outline'
                        ? `
                        border: 1px solid var(${
                            state === 'default'
                                ? '--stroke-gray-01'
                                : '--color-gray-disabled'
                        });
                    `
                        : ''
                }
            `;

            setTimeout(() => {
                const innerHTML = this.innerHTML;
                this.innerHTML = `
                    ${icon === 'left' ? arrow : ''}
                    <div style="margin: 0 0.3em">${innerHTML}</div>
                    ${icon === 'right' ? arrow : ''}
                `;
            });
        }
    },
);

customElements.define(
    'button-text',
    class extends HTMLElement {
        content;
        button;

        constructor() {
            super();
            this.button = document.createElement('button');
            this.button.classList += 'btn ';
        }

        connectedCallback() {
            const style = this.getAttribute('style_') ?? 'primary';
            const state = this.getAttribute('state') ?? 'default';
            const size = this.getAttribute('size') ?? 'm';
            const icon = this.getAttribute('icon') ?? 'none';
            const underline = this.getAttribute('underline') ?? 'false';

            const [color_filled, color_hover, color_disabled] = (function () {
                switch (style) {
                    case 'primary':
                        return [
                            'var(--color-blue-filled)',
                            'var(--color-blue-hover)',
                            'var(--color-blue-disabled)',
                        ];
                    case 'secondary':
                        return [
                            'var(--color-gray-filled)',
                            'var(--color-gray-hover)',
                            'var(--color-gray-disabled)',
                        ];
                    default:
                        return [
                            'var(--color-blue-filled)',
                            'var(--color-blue-hover)',
                            'var(--color-blue-disabled)',
                        ];
                }
            })();

            const [gap, font_class, getArrow] = (() => {
                switch (size) {
                    case 's':
                        return [
                            icon === 'none' ? 10 : 2,
                            'body-02-me',
                            (color) =>
                                `<svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.0625 5.5L3.5625 3L1.0625 0.5" stroke="${color}" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`,
                        ];
                    case 'm':
                        return [
                            icon === 'none' ? 10 : 2,
                            'body-03-me',
                            (color) =>
                                `<svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.6875 8.5L4.1875 5L0.6875 1.5" stroke="${color}" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`,
                        ];
                    case 'l':
                        return [
                            icon === 'none' ? 10 : 4,
                            'body-04-me',
                            (color) =>
                                `<svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 9.5L5.5 5.5L1.5 1.5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`,
                        ];
                    case 'xl':
                        return [
                            icon === 'none' ? 10 : 4,
                            'body-05-me',
                            (color) => {
                                return `<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 9L5.5 5L1.5 1" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
                            },
                        ];
                    case 'modal':
                        return [10, 'body-03-me', undefined];
                    default:
                        return [
                            icon === 'none' ? 10 : 2,
                            'body-03-me',
                            (color) =>
                                `<svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.6875 8.5L4.1875 5L0.6875 1.5" stroke="${color}" stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>`,
                        ];
                }
            })();

            this.classList += font_class;

            const setInnerHTML = (color) => {
                const arrow = getArrow?.(color);
                this.button.innerHTML = `
                    ${icon === 'left' ? arrow : ''}
                    <div style="margin: 0 0.3em;">${this.content}</div>
                    ${icon === 'right' ? arrow : ''}
                `;
            };

            this.onmouseover = () => {
                if (state === 'default') {
                    setInnerHTML(color_hover);
                }
            };

            this.onmouseout = () => {
                if (state === 'deault') {
                    setInnerHTML(color_filled);
                }
            };

            setTimeout(() => {
                this.content = this.innerHTML;
                setInnerHTML(color_filled);
            });

            const stylesheet = document.createElement('style');
            stylesheet.innerText = `
                .btn {
                    cursor: pointer;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding: 0px;
                    gap: ${gap}px;
                    color: ${
                        state === 'default' ? color_filled : color_disabled
                    };
                    ${underline === 'true' ? 'text-decoration: underline;' : ''}
                    ${size === 'modal' ? 'height: 46px;' : ''}
                    width: 100%;
                    background: none;
                }

                ${
                    state === 'default'
                        ? `
                        .btn:hover {
                            color: ${color_hover}
                        }
                    `
                        : ''
                }
            `;

            const link1 = document.createElement('link');
            link1.setAttribute('href', '../css/common.css');
            link1.setAttribute('rel', 'stylesheet');

            const link2 = document.createElement('link');
            link2.setAttribute('href', '../css/reset.css');
            link2.setAttribute('rel', 'stylesheet');

            shadow.append(link1, link2, stylesheet, this.button);
        }
    },
);

customElements.define(
    'button-icon',
    class extends HTMLElement {
        button;
        constructor() {
            super();
            this.button = document.createElement('button');
            this.button.setAttribute('class', 'btn');
        }
        connectedCallback() {
            const shadow = this.attachShadow({ mode: 'open' });

            const style = this.getAttribute('style_') ?? 'primary';
            const state = this.getAttribute('state') ?? 'default';
            const size = this.getAttribute('size') ?? 'm';
            const [color_filled, color_hover, color_disabled, font_color] =
                (function () {
                    switch (style) {
                        case 'primary':
                            return [
                                'var(--color-blue-filled)',
                                'var(--color-blue-hover)',
                                'var(--color-blue-disabled)',
                                state !== 'disabled'
                                    ? 'var(--text-white)'
                                    : 'var(--text-disabled)',
                            ];
                        case 'secondary':
                            return [
                                'var(--color-gray-filled)',
                                'var(--color-gray-hover)',
                                'var(--color-gray-disabled)',
                                state !== 'disabled'
                                    ? 'var(--text-white)'
                                    : 'var(--text-disabled)',
                            ];
                        case 'outline':
                            return [
                                '',
                                'var(--background-gray-02)',
                                '',
                                state !== 'disabled'
                                    ? 'var(--text-secondary)'
                                    : 'var(--text-disabled)',
                            ];
                        default:
                            return [
                                'var(--color-blue-filled)',
                                'var(--color-blue-hover)',
                                'var(--color-blue-disabled)',
                                state !== 'disabled'
                                    ? 'var(--text-secondary)'
                                    : 'var(--text-disabled)',
                            ];
                    }
                })();
            const [length, arrow] = (function () {
                switch (size) {
                    case 's':
                        return [
                            30,
                            `<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.875 7L3.875 4L0.875 1" stroke="${font_color}" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
                        ];
                    case 'm':
                        return [
                            36,
                            `<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 9L5.5 5L1.5 1" stroke="${font_color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
                        ];
                    case 'l':
                        return [
                            40,
                            `<svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.3125 10.5L5.8125 6L1.3125 1.5" stroke="${font_color}" stroke-width="1.6875" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
                        ];
                    case 'xl':
                        return [
                            44,
                            `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.125 11L6.125 6L1.125 1" stroke="${font_color}" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`,
                        ];
                }
            })();

            this.button.innerHTML = arrow;

            const stylesheet = document.createElement('style');
            stylesheet.innerText = `
                .btn {
                    cursor: pointer;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    width: ${length}px;
                    height: ${length}px;
                    border-radius: 2px;
                    ${
                        state === 'default'
                            ? `
                            background: ${color_filled};
                        `
                            : state === 'disabled'
                            ? `background: ${color_disabled};`
                            : ''
                    }
                    ${
                        style === 'outline'
                            ? `
                            border: 1px solid var(${
                                state === 'default'
                                    ? '--stroke-gray-01'
                                    : '--color-gray-disabled'
                            });
                        `
                            : 'border: 0px;'
                    }
                }

                ${
                    state === 'default'
                        ? `
                        .btn:hover {
                            background: ${color_hover}
                        }`
                        : ''
                }
            `;

            shadow.append(stylesheet, this.button);
        }
    },
);
