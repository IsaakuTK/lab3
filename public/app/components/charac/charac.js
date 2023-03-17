export var Attrib;
(function (Attrib) {
    Attrib["image"] = "image";
    Attrib["tittle"] = "tittle";
})(Attrib || (Attrib = {}));
class Charac extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            image: null,
            tittle: null,
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
