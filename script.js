function toggleMenu() {
    const menu = document.querySelector(".menu-links"); /*we are targeting menu links*/
    const icon = document.querySelector(".hamburger-icon"); /*we are targeting the main icon*/
    menu.classList.toggle("open")
    icon.classList.toggle("open") /*and we open them*/
}
