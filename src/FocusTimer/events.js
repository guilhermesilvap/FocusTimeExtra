import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function startTimer(){

   let timerInterval

function updateTimer() {

    el.seconds.textContent--

if(el.seconds.textContent< 0){
 el.seconds.textContent = 59
 el.minutes.textContent -- 
 }


if(((el.minutes.textContent) == 0 && (el.seconds.textContent) == 0)){
    clearInterval(timerInterval)
    timerInterval = null
}

if(el.minutes.textContent < 10){
    el.minutes.textContent = `0${Number(el.minutes.textContent)}`
}

if(el.seconds.textContent < 10){
    el.seconds.textContent = `0${Number(el.seconds.textContent)}`
}

}

el.play.addEventListener('click', () => {

    if (!timerInterval && (Number(el.minutes.textContent) > 0 || Number(el.seconds.textContent) > 0)) {
       
        timerInterval = setInterval(updateTimer, 1000);
    }
});

el.plusFive.addEventListener('click', () => {

     if(el.minutes.textContent < 60){    
     el.minutes.textContent =  Number(el.minutes.textContent) + 5}
 });

 el.minusFive.addEventListener('click', () => {

    if(el.minutes.textContent > 5){    
    el.minutes.textContent =  Number(el.minutes.textContent) - 5}
}); 

 el.stop.addEventListener('click', () => {

    clearInterval(timerInterval)
    timerInterval = null 
});


el.forest.addEventListener('click', () => {

    sounds.fireplace.pause()
    sounds.coffeeshop.pause()
    sounds.rain.pause()



        el.rainCard.classList.remove("selected")
        el.fireplaceCard.classList.remove("selected")
        el.coffeeshopCard.classList.remove("selected") 

    el.forestCard.classList.toggle("selected")
     sounds.forest.loop = true

    if(el.forestCard.classList.contains("selected")){
                sounds.forest.play()
    } else{
        sounds.forest.pause()
    } 

})

el.rain.addEventListener('click', () => {

    sounds.fireplace.pause()
    sounds.coffeeshop.pause()
    sounds.forest.pause()

    el.forestCard.classList.remove("selected")
    el.fireplaceCard.classList.remove("selected")
    el.coffeeshopCard.classList.remove("selected")     


    el.rainCard.classList.toggle("selected")
     sounds.rain.loop = true

    if(el.rainCard.classList.contains("selected")){
        sounds.rain.play()
    } else{
        sounds.rain.pause()
    } 


})

el.coffeeshop.addEventListener('click', () => {

    sounds.fireplace.pause()
    sounds.rain.pause()
    sounds.forest.pause()

    el.forestCard.classList.remove("selected")
    el.fireplaceCard.classList.remove("selected")
    el.rainCard.classList.remove("selected")     


    el.coffeeshopCard.classList.toggle("selected")
     sounds.coffeeshop.loop = true

    if(el.coffeeshopCard.classList.contains("selected")){
        sounds.coffeeshop.play()
    } else{
        sounds.coffeeshop.pause()
    } 
})

el.fireplace.addEventListener('click', () => {

    sounds.coffeeshop.pause()
    sounds.rain.pause()
    sounds.forest.pause()

    el.forestCard.classList.remove("selected")
    el.coffeeshopCard.classList.remove("selected")
    el.rainCard.classList.remove("selected")     


    el.fireplaceCard.classList.toggle("selected")
     sounds.fireplace.loop = true

    if(el.fireplaceCard.classList.contains("selected")){
        sounds.fireplace.play()
    } else{
        sounds.fireplace.pause()
    } 
})

}