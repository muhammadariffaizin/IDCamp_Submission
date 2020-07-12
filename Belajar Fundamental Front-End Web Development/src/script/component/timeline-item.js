class TimelineItem extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set info(name) {
        this._info = name;
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
                    overflow: hidden;
                }
               
                .data-info {
                    padding: 24px;
                }
               
                .data-info > h2 {
                    font-weight: lighter;
                    color: limegreen;
                    transition: all 0.3s ease-in;
                }
               
                .data-info > p {
                    color: #343434;
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }

                .data-info:hover {
                    background: limegreen;
                    color: white;
                    transition: all 0.3s ease-in;
                }

                .data-info:hover > h2 {
                    color: white;
                    font-size: 24pt;
                }

                .data-info:hover > p {
                    color: white;
                }
            </style>
            <div class="data-info">
                <h2>${this._info.year}</h2>
                <p>${this._info.description}</p>
            </div>`;
    }
 }
  
 customElements.define("timeline-item", TimelineItem);