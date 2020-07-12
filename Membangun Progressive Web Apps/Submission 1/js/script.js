document.addEventListener("DOMContentLoaded", function() {
  // Activate sidebar nav
  const side = document.querySelectorAll(".sidenav");
  M.Sidenav.init(side);

  // Aktifkan TopNav dan SideNav, dibagi dua karena kodenya berbeda
  loadTopNav();
  loadSideNav();
  // Aktifkan juga footer
  loadFoot();
 
  function loadTopNav() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status != 200) return;
    
        // Muat daftar tautan menu
        document.querySelectorAll(".topnav").forEach( (elm) => {
          elm.innerHTML = xhttp.responseText;
        });
        
        // Init dropdown pada topnav
        const dropnav = document.querySelectorAll(".dropdown-trigger");
        M.Dropdown.init(dropnav);
    
        // Daftarkan event listener untuk setiap tautan menu
        document.querySelectorAll(".topnav a, .dropdown-content a").forEach( (elm) => {
          elm.addEventListener("click", (event) => {
            // Muat konten halaman yang dipanggil
            page = event.target.getAttribute("href").substr(1);
            loadPage(page);
          });
        });
      }
    };
    xhttp.open("GET", "component/topnav.html", true);
    xhttp.send();
  }

  function loadSideNav() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status != 200) return;
   
        // Muat daftar tautan menu
        document.querySelectorAll(".sidenav").forEach( (elm) => {
          elm.innerHTML = xhttp.responseText;
        });
   
        // Daftarkan event listener untuk setiap tautan menu
        document.querySelectorAll(".sidenav a").forEach( (elm) => {
          elm.addEventListener("click", (event) => {
            // Tutup sidenav
            let sidenav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sidenav).close();
   
            // Muat konten halaman yang dipanggil
            page = event.target.getAttribute("href").substr(1);
            loadPage(page);
          });
        });
      }
    };
    xhttp.open("GET", "component/sidenav.html", true);
    xhttp.send();
  }      
    
  // Load footer
  function loadFoot() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        let foot = document.querySelector("#footer");
        if (this.status == 200) {  
          foot.innerHTML = xhttp.responseText;
        }
      }
    };
    xhttp.open("GET", "component/footer.html", true);
    xhttp.send();
  }

  // Load page content
  let page = window.location.hash.substr(1);
  if (page === "") page = "home";
  loadPage(page);

  function loadPage(page) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          let content = document.querySelector("#body-content");
          if (this.status == 200) {
              content.innerHTML = xhttp.responseText;

              // Cari semua elemen yang akan diaktifkan
              const slider = document.querySelectorAll('.slider');
              const homeSlider = document.querySelectorAll('#homeSlider');
              const parallax = document.querySelectorAll('.parallax');
              const collapse = document.querySelectorAll('.collapsible');

              M.Slider.init(slider,{
                indicators: true,
                height: 500,
                duration: 300,
                interval: 2000
              });
              
              // Pengecualian untuk slider di home, tanpa indikator
              M.Slider.init(homeSlider,{
                indicators: false,
                height: 500,
                duration: 300,
                interval: 5000
              });

              M.Parallax.init(parallax);
              M.Collapsible.init(collapse);

              // Daftarkan event listener untuk setiap button yang ada dalam content
              document.querySelectorAll(".btn").forEach( (elm) => {
                elm.addEventListener("click", (event) => {
                  // Muat konten halaman yang dipanggil
                  let temppage = event.target.getAttribute("href").substr(1);
                  loadPage(temppage);
                });
              });
          } else if (this.status == 404) {
              content.innerHTML = "<h2>Halaman tidak ditemukan.</h2>";
          } else {
              content.innerHTML = "<h2>Ups.. halaman tidak dapat diakses.</h2>";
          }
        }
    };
    xhttp.open("GET", `pages/${page}.html`, true);
    xhttp.send();
  }
});