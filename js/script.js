// DOM ELEMENTS
const bulbDom = document.querySelector("#bulb > img")
const bulbBtnDom = document.querySelector("#bulb > button")





// EVENTS
bulbBtnDom.addEventListener("click", function() {
        if (bulbDom.src.includes("img/white_lamp.png")) {
            bulbDom.src = "img/yellow_lamp.png"
            bulbDom.alt = "lampadina accesa"
            bulbBtnDom.innerHTML = "Spegni"
        } else if (bulbDom.src.includes("img/yellow_lamp.png")) {
            bulbDom.src = "img/white_lamp.png"
            bulbDom.alt = "lampadina spenta"
            bulbBtnDom.innerHTML = "Accendi"
        }
        
    }
)
