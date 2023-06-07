let menu = document.querySelector(".nav-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

menu.onclick = ()=>{
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}