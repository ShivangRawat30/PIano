const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav"); // by default, audio src is "a" tune
const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`;// passing audio src based on key pressed
    audio.play(); // playing audio
    const clickedKey = document.querySelector(`[data-key="${key}"]`)//Getting clicked key element
    clickedKey.classList.add("active");
    setTimeout(() => { //removing active class after 150ms from the clicked key element 
        clickedKey.classList.remove("active"); 
    }, 150);
}

pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key);//adding data-key value to the allKeys array
    //calling playtune function with passing data-key as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}

const showHideKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    // if the pressed key is in the allKeys array, only call the playtime function
    if(allKeys.includes(e.key))playTune(e.key);
}
document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("click", showHideKeys);