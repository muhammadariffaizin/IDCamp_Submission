import "regenerator-runtime";
import "./styles/style.css";
import "./styles/slider.css";
import "./script/component/app-bar.js";
import './script/component/foot-copyright.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';
import main from "./script/view/main.js";
 
document.addEventListener("DOMContentLoaded", main);