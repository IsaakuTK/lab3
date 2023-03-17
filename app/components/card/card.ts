export enum Attribut {
    "image" = "image",
    "text" = "text",
}

class Card extends HTMLElement{

    image?: string;
    text?: string;

    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribut, null> = {
            image: null,
            text: null,
        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribut,
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
                <link rel="stylesheet" href="./app/components/card/card.css">
                <section class="in1">
                <img src="${this.image}">
                <p>${this.text}</p>
                <p>Nintendo Switch</p>
                </section>
                `;
            }
        }
}

customElements.define("my-card", Card);
export default Card;

