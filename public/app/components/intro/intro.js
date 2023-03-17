class Intro extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/intro/intro.css">
            <img class="imgg" src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80">
            <section class="int3">
            
                <section class="int2">
                    <img class="imggg" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1500/ncom/en_US/merchandising/center-stage-banner/bayonetta-origins/3600x1300_BayoOrigins_centerstage_desktop">
                    <section class="int1">
                        <p>Pre-order digitally today, play on 3/17</p>
                        <button>Pre-order now</button>
                        <img class="img" src="	https://www.esrb.org/wp-content/uploads/2019/05/T.svg">
                        <p class="pp">Animated Blood, Fantasy Violence</p>
                    </section>
                </section>
            </section>
            `;
        }
    }
}
customElements.define("my-intro", Intro);
export default Intro;
