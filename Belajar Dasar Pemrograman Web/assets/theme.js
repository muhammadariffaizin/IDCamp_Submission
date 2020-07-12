function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme() {
    if(localStorage.getItem('theme') === null) {
        setTheme('theme-word');
    } else {
        setTheme(localStorage.getItem('theme'));
    }
    
    const word = document.querySelector('#word');
    const excel = document.querySelector('#excel');
    const powerpoint = document.querySelector('#powerpoint');
    const onenote = document.querySelector('#onenote');
    
    if(word) {
        function temp() {
            console.log("word");
            setTheme('theme-word');
        }
        word.addEventListener('click', temp);
        word.removeEventListener('click', temp);
    }
    
    if(excel) {
        function temp() {
            console.log("excel");
            setTheme('theme-excel');
        }
        excel.addEventListener('click', temp);
        excel.removeEventListener('click', temp);
    }
    
    if(powerpoint) {
        function temp() {
            console.log("powerpoint");
            setTheme('theme-powerpoint');
        }
        powerpoint.addEventListener('click', temp);
        powerpoint.removeEventListener('click', temp);
    }
    
    if(onenote) {
        function temp() {
            console.log("onenote");
            setTheme('theme-onenote');
        }
        onenote.addEventListener('click', temp);
        onenote.removeEventListener('click', temp);
    }
}

window.onload = function() {
    if(localStorage.getItem('theme') === null) {
        setTheme('theme-word');
    } else {
        setTheme(localStorage.getItem('theme'));
    }
    
    const word = document.querySelector('#word');
    const excel = document.querySelector('#excel');
    const powerpoint = document.querySelector('#powerpoint');
    const onenote = document.querySelector('#onenote');

    if(word) {
        word.addEventListener('click', (e)=>{
            console.log("word");
            setTheme('theme-word');
        })
    }

    if(excel) {
        excel.addEventListener('click', (e)=>{
            console.log("excel");
            setTheme('theme-excel');
        })
    }
    
    if(powerpoint) {
        powerpoint.addEventListener('click', (e)=>{
            console.log("powerpoint");
            setTheme('theme-powerpoint');
        })
    }
    
    if(onenote) {
        onenote.addEventListener('click', (e)=>{
            console.log("onenote");
            setTheme('theme-onenote');
        })
    }
};