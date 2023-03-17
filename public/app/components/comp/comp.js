export var Attribute;
(function (Attribute) {
    Attribute["tittle"] = "tittle";
    Attribute["image"] = "image";
    Attribute["text"] = "text";
    Attribute["buttontx"] = "buttontx";
})(Attribute || (Attribute = {}));
class Comp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            tittle: null,
            image: null,
            text: null,
            buttontx: null
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
                <link rel="stylesheet" href="./app/components/comp/comp.css">
                <section class="t2">
                    <h1>${this.tittle}</h1>
                    <img src="${this.image}">
                    <section class="t1">
                    <p>${this.text}</p>
                    <button>${this.buttontx}</button>
                    </section>
                </section>
                `;
        }
    }
}
customElements.define("my-comp", Comp);
export default Comp;
