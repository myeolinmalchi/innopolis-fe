customElements.define(
    'going-up',
    class extends HTMLElement {
        connectedCallback() {
            const tag = '<div></div>';
            

            this.onclick = () => {
                window.scroll({top:0, behavior: "smooth"});
            }

            this.innerHTML = tag;
        }
    },
);

