customElements.define(
    'custom-modal',
    class extends HTMLElement {
        connectedCallback() {
            const [
                btn_count,
                btn_position,
                btn1_type,
                btn2_type,
                img,
                img_src,
                title,
                content,
                value1,
                value2,
            ] = [
                Number(this.getAttribute('btn-count')) ?? 1,
                this.getAttribute('btn-position') ?? 'vertical',
                this.getAttribute('btn-type') ?? 'primary',
                this.getAttribute('img') ?? 'false',
                this.getAttribute('img-src') ?? '',
            ];

            this.style = `
                display: flex;; 
                flex-direction: column;
                align-items: center;
                padding: 32px;
                gap: 32px;

                width: 480px;
            `;

            const titleElement = document.createElement('span');
            {
                titleElement.classList += 'title-01';
                titleElement.innerText = title;
            }
            this.appendChild(titleElement);

            const contentElement = document.createElement('span');
            {
                contentElement.classList += 'body-04-me';
                contentElement.innerText = content;
                contentElement.style.color = 'var(--text-secondary)';
            }
            this.appendChild(contentElement);

            const buttonContainer = document.createElement('div');
            {
                const button1 = document.createElement(
                    btn1_type === 'text' ? 'button-text' : 'button-default',
                );
                {
                    button1.setContent(value1);
                }
                buttonContainer.appendChild(button1);

                const button2 = document.createElement(
                    btn2_type === 'text' ? 'button-text' : 'button-default',
                );
                {
                    button2.setContent(value2);
                }
                if (btn_count === 2) {
                    buttonContainer.appendChild(button2);
                }
            }
        }
    },
);
