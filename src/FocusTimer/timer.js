import * as el from "./elements.js"


function updateDisplay(minutes, seconds){
    minutes = minutes ?? Number("25")
    seconds = seconds ?? Number("00")    

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}