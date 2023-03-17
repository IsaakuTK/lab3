export var Attribut;
(function (Attribut) {
    Attribut["image"] = "image";
    Attribut["text"] = "text";
})(Attribut || (Attribut = {}));
class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            image: null,
            text: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
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
