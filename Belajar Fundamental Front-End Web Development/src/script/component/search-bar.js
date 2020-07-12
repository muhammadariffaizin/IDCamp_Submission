class SearchBar extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        let date = this.shadowDOM.querySelector("#select-day").value;
        let month = this.shadowDOM.querySelector("#select-month").value;
        const result = `${(parseInt(month)+1)}/${date}`;
        // window.alert(result);
        return result;
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .search-container {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 30px;
                display: flex;
                top: 10px;
                background-color: white;
                margin: auto 20%;
                overflow: hidden;
            }
        
            .search-container > button {
                width: 25%;
                font-size: 10pt;
                cursor: pointer;
                margin-left: auto;
                padding: 10px;
                background-color: limegreen;
                color: white;
                border: 0;
                text-transform: uppercase;
                border-top-right-radius: 30px;
                border-bottom-right-radius: 30px;
                transition: all 0.2s ease-in;
            }

            .search-container > button:hover {
                background-color: #5bd75b;
            }

            .search-container > button:focus {
                outline: 0;
            }

            .search-container select {
                -webkit-appearance: none;
                -moz-appearance: none;
                -ms-appearance: none;
                appearance: none;
                outline: 0;
                box-shadow: none;
                border: 0 !important;

                background: white;
                background-image: none;
                flex: 1;
                padding: 0.5em;
                color: limegreen;
                cursor: pointer;
                font-size: 14pt;
            }
            
            .search-container > select::-ms-expand {
                display: none;
            }
            
            .search-container > .select {
                margin-left: 30px;
                position: relative;
                display: flex;
                width: 50%;
                height: 3em;
                line-height: 3;
                background: white;
                overflow: hidden;
            }
            
            
            @media screen and (max-width: 550px){
                .search-container {
                    flex-direction: column;
                    position: static;
                }
        
                .search-container > button {
                    width: 100%;
                    border-radius: 0 0 30px 30px;
                }

                .search-container .select {
                    width: 100%;
                    margin-left: 10px;
                }
            }
        </style>
        <div id="search-container" class="search-container">
            <div class="select-date select">
                <select id="select-day">
                </select>
                <select id="select-month">
                    <option value="0">January</option>
                    <option value="1">February</option>
                    <option value="2">March</option>
                    <option value="3">April</option>
                    <option value="4">May</option>
                    <option value="5">June</option>
                    <option value="6">July</option>
                    <option value="7">August</option>
                    <option value="8">September</option>
                    <option value="9">October</option>
                    <option value="10">November</option>
                    <option value="11">December</option>
                </select>
            </div>
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;
  
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);

        const daysInMonth = [31,29,31,30,31,30,31,31,30,31,30,31],
            today = new Date(),
    
            targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            
        const findDate = this.shadowDOM.querySelector("#select-day");
        const findMonth = this.shadowDOM.querySelector("#select-month");
        const optDate = findDate.querySelectorAll("option");
        
        setDate(targetDate);
    
        findMonth.addEventListener("change", function() {
            let monthIndex = findMonth.value;
            setDays(monthIndex);
        });
        
        function setDate(date) {
            setDays(date.getMonth());
            findDate.value = date.getDate();
            findMonth.value = date.getMonth();
        }
        
        function setDays(monthIndex) {
            const optionCount = optDate.length,
            daysCount = daysInMonth[monthIndex];
            // window.alert(optionCount);
            
            if (optionCount < daysCount) {
                for (let i = optionCount; i < daysCount; i++) {
                    findDate.innerHTML += `<option value="${i+1}">${i+1}</option>`;
                }
            }
            else {
                for (let i = daysCount; i < optionCount; i++) {
                    let optionItem = '#select-day option[value=' + (i+1) + ']';
                    optionItem.remove();
                } 
            } 
        }
    }
 }
  
 customElements.define("search-bar", SearchBar);