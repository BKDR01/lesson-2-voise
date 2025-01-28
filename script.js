let text = document.querySelector('#text')
let playButton = document.querySelector('#playbutton')
let voisSelect = document.querySelector('#voisSelect')

playButton.addEventListener("click" , () => {
    let voices = new SpeechSynthesisUtterance(text.value)
    voices.lang = voisSelect.value; 
    speechSynthesis.speak(voices)
})



