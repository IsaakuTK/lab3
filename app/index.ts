import "./components/index.js";
import data from "./data.js";
import data2 from "./data2.js";
import data3 from "./data3.js";
import data4 from "./data4.js";
import data5 from "./data5.js";
import  Comp, { Attribute } from "./components/comp/comp.js";
import  Card, { Attribut } from "./components/card/card.js";
import  News, { Attribu } from "./components/news/news.js";
import  Charac, { Attrib } from "./components/charac/charac.js";
import  Sellers, { Attri } from "./components/sellers/sellers.js";

class AppContainer extends HTMLElement {

    comp: Comp[] = [];
    card: Card[] = [];
    news: News[] = [];
    charac: Charac[] = [];
    sellers: Sellers[] = [];
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        

        data.forEach((e) => {
            const prof = this.ownerDocument.createElement(
                "my-comp"
                ) as Comp;
                prof.setAttribute(Attribute.tittle, e.tittle);
                prof.setAttribute(Attribute.image, e.image);
                prof.setAttribute(Attribute.text, e.text);
                prof.setAttribute(Attribute.buttontx, e.buttontx);
    
                this.comp.push(prof);
            });

            data2.forEach((e) => {
                const prof = this.ownerDocument.createElement(
                    "my-card"
                    ) as Card;
                    prof.setAttribute(Attribut.image, e.image);
                    prof.setAttribute(Attribut.text, e.text);
        
                    this.card.push(prof);
                });

                data3.forEach((e) => {
                    const prof = this.ownerDocument.createElement(
                        "my-news"
                        ) as News;
                        prof.setAttribute(Attribu.image, e.image);
                        prof.setAttribute(Attribu.date, e.date);
                        prof.setAttribute(Attribu.tittle, e.tittle);
                        prof.setAttribute(Attribu.text, e.text);
            
                        this.news.push(prof);
                    });

                    data4.forEach((e) => {
                        const prof = this.ownerDocument.createElement(
                            "my-charac"
                            ) as Charac;
                            prof.setAttribute(Attrib.image, e.image);
                            prof.setAttribute(Attrib.tittle, e.tittle);
                            this.charac.push(prof);
                        });

                    data5.forEach((e) => {
                        const prof = this.ownerDocument.createElement(
                            "my-sellers"
                            ) as Sellers;
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
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML += `
                <my-bar></my-bar>
                `; 

                this.shadowRoot.innerHTML += `
                <my-intro></my-intro>
                `; 
                
            
                this.shadowRoot.innerHTML += ``
                this.shadowRoot?.appendChild(this.comp[0]);
                ;     

                const cardss = this.ownerDocument.createElement("section")
                cardss.className = "siu"
                for (let index = 0; index < data2.length; index++) {
                    cardss.appendChild(this.card[index]);
                }  
                this.shadowRoot?.appendChild(cardss);
                
                this.shadowRoot.innerHTML += ``
                this.shadowRoot?.appendChild(this.comp[1]);
                ;   

                this.shadowRoot.innerHTML += ``
                this.shadowRoot?.appendChild(this.comp[2]);
                ;   

                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                <p class="news">News</p>`

                const newss = this.ownerDocument.createElement("section")
                newss.className = "newss1"
                    newss.appendChild(this.news[0]);
                    newss.appendChild(this.news[1]);
                this.shadowRoot?.appendChild(newss);

                const newss2 = this.ownerDocument.createElement("section")
                newss2.className = "newss2"
                    newss2.appendChild(this.news[2]);
                    newss2.appendChild(this.news[3]);
                    newss2.appendChild(this.news[4]);
                    newss2.appendChild(this.news[5]);
                this.shadowRoot?.appendChild(newss2);
                
                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                <button class="biut">See all news articles</button>`

                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                <p>Characters</p>`

                const charac = this.ownerDocument.createElement("section")
                charac.className = "charac"
                for (let index = 0; index < data4.length; index++) {
                    charac.appendChild(this.charac[index]);
                }  
                this.shadowRoot?.appendChild(charac);

                this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./app/index.css">
                <p>Digital best sellers</p>`

                const sellers = this.ownerDocument.createElement("section")
                sellers.className = "sellers"
                for (let index = 0; index < data5.length; index++) {
                    sellers.appendChild(this.sellers[index]);
                }  
                this.shadowRoot?.appendChild(sellers);
            }
        }
    }
    
customElements.define("app-cont", AppContainer);