const header = document.querySelector("header");
const humBars = document.querySelector(".fa-bars");
const headerLinks = document.querySelectorAll(".header-link");
headerLinks.forEach(hc => {
    hc.addEventListener("click", (e) => {
    for(let i = 0; i < headerLinks.length; i++){
        if(headerLinks[i].classList.contains("active-link")){
            headerLinks[i].classList.remove("active-link")
        }
    }
    e.target.classList.add("active-link")
})
})
window.onscroll = function(){
    let scrollValue = window.scrollY
    if(scrollValue > 50){
        header.style.backgroundColor = "rgba(0,0,0,0.7)"
    }else{
        header.style.backgroundColor = "transparent"
    }
    if(scrollValue < 650){
        headerLinks[1].classList.remove("active-link")
        headerLinks[2].classList.remove("active-link")
        headerLinks[3].classList.remove("active-link")
        headerLinks[0].classList.add("active-link")
    }
    if(scrollValue >= 650) {
        headerLinks[0].classList.remove("active-link")
        headerLinks[2].classList.remove("active-link")
        headerLinks[3].classList.remove("active-link")
        headerLinks[1].classList.add("active-link")
    }
    if(scrollValue >= 1900) {
        headerLinks[0].classList.remove("active-link")
        headerLinks[1].classList.remove("active-link")
        headerLinks[3].classList.remove("active-link")
        headerLinks[2].classList.add("active-link")
    }
    if(scrollValue > 2200){
        headerLinks[0].classList.remove("active-link")
        headerLinks[1].classList.remove("active-link")
        headerLinks[2].classList.remove("active-link")
        headerLinks[3].classList.add("active-link")
    }
}
humBars.onclick = function(){
    let mainList = document.getElementById("main-list");
    mainList.style.transition = "5s cubic-bezier(0.68, -0.55, 0.265, 1.55);"
    mainList.classList.toggle("active-menu")
}
