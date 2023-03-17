export var Attri;
(function (Attri) {
    Attri["image"] = "image";
    Attri["date"] = "date";
    Attri["tittle"] = "tittle";
    Attri["text"] = "text";
})(Attri || (Attri = {}));
class Sellers extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            image: null,
            date: null,
            tittle: null,
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
                <link rel="stylesheet" href="./app/components/sellers/sellers.css">
                <section class="all">
                <img src="${this.image}">
                <p>${this.date}</p>
                <p>${this.tittle}</p>
                <p>${this.text}</p>
                <p>Nintendo Switch</p>
                <button></button>
                </section>
                `;
        }
    }
}
customElements.define("my-sellers", Sellers);
export default Sellers;
