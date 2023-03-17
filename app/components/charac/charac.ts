export enum Attrib {
    "image" = "image",
    "tittle" = "tittle",
}

class Charac extends HTMLElement{

    image?: string;
    tittle?: string;

    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attrib, null> = {
            image: null,
            tittle: null,
        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attrib,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {           
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/charac/charac.css">
                <section class="all">
                <img src="${this.image}">           
                <p>${this.tittle}</p>
                </section>
                `;
            }
        }
}

customElements.define("my-charac", Charac);
export default Charac;
