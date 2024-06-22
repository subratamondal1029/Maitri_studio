const thisYear = new Date().getFullYear()
document.getElementById('currentYear').textContent = thisYear

document.querySelector("#anousments img").addEventListener('click', popUpImage)

function popUpImage(){
    document.getElementById('popUpLayer').style.transform = "scale(1)"
    document.querySelector("#popUpLayer img").src = this.src
}

document.getElementById("popUpLayer").addEventListener('click', closePopUp)
function closePopUp(e){
    if(e.target.tagName === "DIV"){
        this.style.transform = "scale(0)"
    }
}