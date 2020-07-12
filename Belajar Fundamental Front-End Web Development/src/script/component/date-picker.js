const dateInit = () => {
    const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31],
        today = new Date(),

        targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const findDate = document.querySelector("#select-day");
    const findMonth = document.querySelector("#select-month");
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
        // findDate.val(date.getDate());
        // findMonth.val(date.getMonth());
    }

    function setDays(monthIndex) {
        const optionCount = optDate.length,
            daysCount = daysInMonth[monthIndex];
        
        if (optionCount < daysCount) {
            for (let i = optionCount; i < daysCount; i++) {
                const option = document.createElement("option");
                option.text = i+1;
                option.value = i+1;
                findDate.add(option);
                console.log("Y");
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

export default dateInit;