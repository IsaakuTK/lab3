export enum Attribu {
    "image" = "image",
    "date" = "date",
    "tittle" = "tittle",
    "text" = "text",
}

class News extends HTMLElement{

    image?: string;
    date?: string;
    tittle?: string;
    text?: string;

    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribu, null> = {
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

    attributeChangedCallback(
        propName: Attribu,
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
                <link rel="stylesheet" href="./app/components/news/news.css">
                <section class="all">
                <img src="${this.image}">
                <p>${this.date}</p>
                <p>${this.tittle}</p>
                <p>${this.text}</p>
                <button class="but">Read more</button>
                </section>
                `;
            }
        }
}

customElements.define("my-news", News);
export default News;
