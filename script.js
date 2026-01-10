const containerEl = document.
    querySelector(".container");
const isimler = ["Mehmet", "Hasan", "Ali", "Ayşe"];
let isimlerIndex = 0;
let characterIndex = 0;

updateText();

function updateText(){
    characterIndex++;
    containerEl.innerHTML = 'I am ' + isimler[isimlerIndex];
    if (characterIndex === isimler
        [isimlerIndex].length) {
        isimlerIndex++;
        characterIndex = 0;
    }
    if (isimlerIndex === isimler.length) {
        isimlerIndex = 0;
    }
    setTimeout(updateText, 400);
}


