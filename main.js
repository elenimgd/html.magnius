function getDropDownMenu() {
    let element = document.querySelector("header nav.hidden-menu");
    let icon = document.querySelector("nav.dropdown-menu > span");

    if(element.style.display == "block") {
        element.style.display = "none";
        icon.textContent = "☰";
    } else {
        element.style.display = "block";
        icon.textContent = "⛌";
    } 

}
