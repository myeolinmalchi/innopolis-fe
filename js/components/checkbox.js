customElements.define(
    'checkbox-default',
    class extends HTMLElement{
        constructor(){ 
            super();
        }
        
        connectedCallback(){
            this.attachShadow({mode : 'open'});
            const wrapper = document.createElement('div');
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            const textbox = document.createElement('span');
            checkbox.setAttribute('type','checkbox');

            
            const check = this.getAttribute('check');
            const text = this.getAttribute('text');
            const state =this.getAttribute('state');
            const size = this.getAttribute('size');
            const style = document.createElement('style');;
            
            const [height, width, font_size] = (function (){
                switch(size){
                    case 'M':
                        return [
                            13,
                            13,
                            12
                        ];
                    case 'L':
                        return [
                            16.67,
                            16.67,
                            16
                        ];
                }
            })();
            if(check === 'true'){
                checkbox.checked = true;
            }
            if(state === 'disabled'){
                checkbox.disabled= true;
            }
            style.textContent = `
                .size{
                    height : ${height};
                    width : ${width};
                }
                .font{
                    font-size : ${font_size};                    
                }
                `

            textbox.innerText = text;
            label.setAttribute('class','font');
            checkbox.setAttribute('class','size');
            this.shadowRoot.append(style);
            this.shadowRoot.appendChild(wrapper);
            wrapper.appendChild(label);
            label.appendChild(checkbox);
            label.appendChild(textbox);
        }
    

    }
)