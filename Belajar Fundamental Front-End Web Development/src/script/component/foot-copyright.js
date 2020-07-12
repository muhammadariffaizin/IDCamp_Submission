class FootCopyright extends HTMLElement {

    connectedCallback() {
        this.name = this.getAttribute("name") || null;
        this.link = this.getAttribute("link") || null;
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            :host {
                bottom: 0;
            }

            .foot-container {
                box-sizing: border-box;
                width: 100%;
                bottom: 0;
                padding: 20px;
                color: #232323;
                background-color: #efefef;
                text-align: center;
                font-family: Lato, Arial;
            }

            .foot-container p {
                text-decoration: none;
            }

            .foot-container p a {
                color: limegreen;
                text-decoration: none;
            }

            .fa-heart{
                color: #dc3545;
            }
            
            .fas{
                font-family: FontAwesome !important;
                font-size: 12pt;
                width: 100%;
            }

            .copyright{
                font-weight: 250;
            }
        </style>
        <div class="foot-container">
            <p class="copyright">Developed with <i class="fas fa-heart"></i> by <a href="${this.link}" title="${this.name}">${this.name}</a></p>
        </div>
        `;
    }
}

customElements.define("foot-copyright", FootCopyright);