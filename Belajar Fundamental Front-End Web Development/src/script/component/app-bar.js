class AppBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Lato, Arial;
            }
            :host {
                display: block;
                width: 100%;
                background-color: limegreen;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                text-align: center;
            }
            h2 {
                font-size: 24pt;
                padding: 30px;
            }
        </style>
        <h2>On This Day</h2>`;
    }
 }
  
 customElements.define("app-bar", AppBar);