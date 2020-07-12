import './timeline-item.js';
 
class TimelineList extends HTMLElement {
 
   constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
 
   set info(name) {
       this._info = name;
       this.render();
   }

   get data() {
       return this.getAttribute("data");
   }
 
   renderError(message) {
       this.shadowDOM.innerHTML = `
       <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `;
       this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
 
    render() {
        let caption;
        if(this.getAttribute("data") == "births") {
            caption = "Births on this day";
        } else if(this.getAttribute("data") == "events") {
            caption = "Events on this day";
        } else if(this.getAttribute("data") == "deaths") {
            caption = "Deaths on this day";
        } 
        this.shadowDOM.innerHTML = `
        <style>
            * {
                box-sizing: border-box;
            }

            :host {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                flex-grow: 1;
                flex-basis: 30%;
                transition: all 0.2s ease-in;
            }

            :host(:hover) {
                box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
                flex-basis: 45%;
            }

            .caption {
                position: relative;
                height: 0.3%;
                min-height: 200px;
                background-image: linear-gradient(#5bd75b, limegreen);
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                border-bottom-left-radius: 50% 20%;
                border-bottom-right-radius: 50% 20%;
                padding-top: 10px;
            }

            h2 {
                font-family: Lato, Arial;
                font-size: 24pt;
                color: white;
                padding: 10px 30px 0;
                text-align: center;
                margin-block-start: 0;
            }

            @media screen and (max-width: 700px) {
                h2 {
                    font-size: 36pt;
                }
            }
        </style>
        <div class="caption">
            <h2>${caption}</h2>
        </div>
        ` ;
        this._info.forEach(name => {
            const infoElement = document.createElement("timeline-item");
            infoElement.info = name;
            this.shadowDOM.appendChild(infoElement);
        })
    }
}
 
customElements.define("timeline-list", TimelineList);