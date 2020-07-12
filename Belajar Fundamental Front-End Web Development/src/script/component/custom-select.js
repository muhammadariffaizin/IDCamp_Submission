class CustomSelect extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                select {
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
                }
                
                select::-ms-expand {
                    display: none;
                }
                
                .select {
                    margin: 5px;
                    position: relative;
                    display: flex;
                    width: 20em;
                    height: 3em;
                    line-height: 3;
                    background: white;
                    overflow: hidden;
                    border-bottom: 1px solid limegreen;
                }
            </style>

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
            </div>`;
            
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
                        // const option = this.shadowDOM.createElement("option");
                        // option.text = i+1;
                        // option.value = i+1;
                        // findDate.add(option);
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

customElements.define("custom-select", CustomSelect);