customElements.define(
    'table-container',
    class extends HTMLElement{
        connectedCallback(){
            this.style.display = 'block';
            this.size = this.getAttribute('size');
            const style = document.createElement('style');
            style.textContent = `
            .right{
                text-align: right;
            }
            .center{
                text-align: center;
            }
            .left{
                text-align: left;
            }
                `
            const [width, font_size] = function(){
                switch(size){
                case 's':
                    width = 1024;
                    font_size = 16;

                case 'l':
                    width = 1440;
                    font_size = 18;
            }

            this.style.width = width;
            this.style.font_size = font_size;
            this.style.text_align = 'center';
        };
    }
    }
)

customElements.define(
    'table-row',
    class extends HTMLElement{
        connectedCallback(){
            this.style.width = '100%';
            this.style.height = 30;
            this.style.float = 'left';
        }
    }
)

customElements.define(
    'table-header',
    class extends HTMLElement{
        connectedCallback(){
            const container = document.createElement('th');
            const value = this.getAttribute('value');
            const size = this.getAttribute('size');
            const align = this.getAttribute('Align');

            switch(align){
                case 'center':
                    container.setAttribute('class','center');
                case 'right':
                    container.setAttribute('class','right');
                case 'left':
                    container.setAttribute('class','left');
            }
            container.style.width = size;
            container.innerText = value;
        }
    }
)

customElements.define(
    'table-content',
    class extends HTMLElement{
        connectedCallback(){
            const container = document.createElement('td');
            const value = this.getAttribute('value');
            const size = this.getAttribute('size');
            const align = this.getAttribute('Align');

            switch(align){
                case 'center':
                    container.setAttribute('class','center');
                case 'right':
                    container.setAttribute('class','right');
                case 'left':
                    container.setAttribute('class','left');
            }
            container.style.width = size;
            container.innerText = value;
        }
    }
);