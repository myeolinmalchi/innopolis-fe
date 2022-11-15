customElements.define(
    'modal-default',
    class extends HTMLElement {
        connectedCallback() {
            const [
                title,
                content,
                btn_count,
                btn1_value,
                btn1_style,
                btn2_value,
                btn2_style,
                btn_direction,
                use_img,
                img_src,
            ] = [
                this.getAttribute('title') ?? '',
                this.getAttribute('content') ?? '',
                this.getAttribute('btn-count') ?? '1',
                this.getAttribute('btn1-value') ?? '',
                this.getAttribute('btn1-type') ?? 'primary',
                this.getAttribute('btn2-value') ?? '',
                this.getAttribute('btn2-type') ?? 'secondary',
                this.getAttribute('btn-direction') ?? 'vertical',
                this.getAttribute('use-img') ?? 'false',
                this.getAttribute('img-src') ?? '',
            ];

            this.style = `
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 32px;
                gap: 32px;
                width: 480px;
                background: white;
                border-radius: 4px;
                box-sizing: border-box;
            `;

            const titleElement = document.createElement('span');
            titleElement.classList += 'title-01';
            titleElement.innerText = title;

            const imgElement = document.createElement('img');
            imgElement.style.width = '108px';
            imgElement.style.height = '108px';
            imgElement.style.border = 'none';
            imgElement.setAttribute('src', img_src);

            const contentElement = document.createElement('span');
            contentElement.classList += 'body-04-me';
            contentElement.innerText = content;
            contentElement.style.color = 'var(--text-secondary)';

            const btn1 = document.createElement(
                btn1_style === 'text' ? 'button-text' : 'button-default',
            );
            btn1.setAttribute(
                'style_',
                btn1_style === 'text' ? 'primary' : btn1_style,
            );
            btn1.setAttribute('size', 'modal');
            btn1.innerHTML = btn1_value;

            const btn2 = document.createElement(
                btn2_style === 'text' ? 'button-text' : 'button-default',
            );
            btn2.setAttribute(
                'style_',
                btn2_style === 'text' ? 'primary' : btn2_style,
            );
            btn2.setAttribute('size', 'modal');
            btn2.innerHTML = btn2_value;

            const btnContainer = document.createElement('div');
            btnContainer.style.display = 'flex';
            btnContainer.style.justifyContent = 'center';
            btnContainer.style.alignItems = 'center';
            btnContainer.style.gap = '6px';
            btnContainer.style.width = '100%';
            if (btn_direction === 'vertical') {
                btnContainer.style.flexDirection = 'column';
                btn1.style.width = '100%';
                btn2.style.width = '100%';
            } else if (btn_direction === 'horizontal') {
                btnContainer.style.flexDirection = 'row';
                btn1.style.width = '100%';
                btn2.style.width = '100%';
            }

            btnContainer.appendChild(btn1);
            if (btn_count === '2') {
                btnContainer.appendChild(btn2);
            }

            this.appendChild(titleElement);
            if (use_img === 'true') {
                this.appendChild(imgElement);
            }
            this.appendChild(contentElement);
            this.appendChild(btnContainer);
        }
    },
);
