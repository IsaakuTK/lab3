import "./components/index.js";
import data from "./data.js";
import data2 from "./data2.js";
import data3 from "./data3.js";
import data4 from "./data4.js";
import data5 from "./data5.js";
import { Attribute } from "./components/comp/comp.js";
import { Attribut } from "./components/card/card.js";
import { Attribu } from "./components/news/news.js";
import { Attrib } from "./components/charac/charac.js";
import { Attri } from "./components/sellers/sellers.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.comp = [];
        this.card = [];
        this.news = [];
        this.charac = [];
        this.sellers = [];
        this.attachShadow({ mode: "open" });
        data.forEach((e) => {
            const prof = this.ownerDocument.createElement("my-comp");
            prof.setAttribute(Attribute.tittle, e.tittle);
            prof.setAttribute(Attribute.image, e.image);
            prof.setAttribute(Attribute.text, e.text);
            prof.setAttribute(Attribute.buttontx, e.buttontx);
            this.comp.push(prof);
        });
        data2.forEach((e) => {
            const prof = this.ownerDocument.createElement("my-card");
            prof.setAttribute(Attribut.image, e.image);
            prof.setAttribute(Attribut.text, e.text);
            this.card.push(prof);
        });
        data3.forEach((e) => {
            const prof = this.ownerDocument.createElement("my-news");
            prof.setAttribute(Attribu.image, e.image);
            prof.setAttribute(Attribu.date, e.date);
            prof.setAttribute(Attribu.tittle, e.tittle);
            prof.setAttribute(Attribu.text, e.text);
            this.news.push(prof);
        });
        data4.forEach((e) => {
            const prof = this.ownerDocument.createElement("my-charac");
            prof.setAttribute(Attrib.image, e.image);
            prof.setAttribute(Attrib.tittle, e.tittle);
            this.charac.push(prof);
        });
        data5.forEach((e) => {
            const prof = this.ownerDocument.createElement("my-sellers");
            prof.setAttribute(Attri.image, e.image);
            prof.setAttribute(Attri.tittle, e.tittle);
            prof.setAttribute(Attri.date, e.date);
            prof.setAttribute(Attri.text, e.text);
            this.sellers.push(prof);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
                <my-bar></my-bar>
                `;
            this.shadowRoot.innerHTML += `
                <my-intro></my-intro>
                `;
            this.shadowRoot.innerHTML += ``;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.comp[0]);
            ;
            const cardss = this.ownerDocument.createElement("section");
            cardss.className = "siu";
            for (let index = 0; index < data2.length; index++) {
                cardss.appendChild(this.card[index]);
            }
            (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(cardss);
            this.shadowRoot.innerHTML += ``;
            (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(this.comp[1]);
            ;
            this.shadowRoot.innerHTML += ``;
            (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(this.comp[2]);
            ;
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                <p class="news">News</p>`;
            const newss = this.ownerDocument.createElement("section");
            newss.className = "newss1";
            newss.appendChild(this.news[0]);
            newss.appendChild(this.news[1]);
            (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.appendChild(newss);
            const newss2 = this.ownerDocument.createElement("section");
            newss2.className = "newss2";
            newss2.appendChild(this.news[2]);
            newss2.appendChild(this.news[3]);
            newss2.appendChild(this.news[4]);
            newss2.appendChild(this.news[5]);
            (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.appendChild(newss2);
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                <button class="biut">See all news articles</button>`;
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                <p>Characters</p>`;
            const charac = this.ownerDocument.createElement("section");
            charac.className = "charac";
            for (let index = 0; index < data4.length; index++) {
                charac.appendChild(this.charac[index]);
            }
            (_g = this.shadowRoot) === null || _g === void 0 ? void 0 : _g.appendChild(charac);
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                <p>Digital best sellers</p>`;
            const sellers = this.ownerDocument.createElement("section");
            sellers.className = "sellers";
            for (let index = 0; index < data5.length; index++) {
                sellers.appendChild(this.sellers[index]);
            }
            (_h = this.shadowRoot) === null || _h === void 0 ? void 0 : _h.appendChild(sellers);
        }
    }
}
customElements.define("app-cont", AppContainer);
