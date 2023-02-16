const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const navBar = document.getElementById('nav-bar')

document.addEventListener('click', function(e) {
    if(e.target.id === "menu-btn") {
        menuBtn.style.display = 'none'
        closeBtn.style.display = 'block'
        navBar.classList.add('show')
    } 
    else if(e.target.id === "close-btn") {
        menuBtn.style.display = 'block'
        closeBtn.style.display = 'none'
        navBar.classList.remove('show')
    }
})

window.onresize = reportWindowSize;

function reportWindowSize() {
    let pageWidth = window.innerWidth
    
    if(pageWidth >= 700) {
        menuBtn.style.display = 'none'
        closeBtn.style.display = 'none'
    } else if (pageWidth < 700) {
        menuBtn.style.display = 'block'
        closeBtn.style.display = 'none'
        navBar.classList.remove('show')
    }
}