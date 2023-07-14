var sentences = [
    "Let the world rush on",
    "while you take a moment to relax and find peace within",
    "Nothing could go wrong",
    "Always remember....",
    "God loves you",
    "Even Bhargav loves you.",
    "In the chaos of the world",
    "find solace in the stillness within yourself.",
    "You've got no enemies to fight with...",
    "Just stay relax for a while.",
    "Release the weight of the world from your shoulders... ",
    "...and allow yourself to unwind.",
    "Bhargav loves you",
    "And always will..."

];

var currentIndex = 0;
var intervalId;
var audio = new Audio('music.mp3');
var isMusicPlaying = false;


function printText() {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = sentences[currentIndex];
    currentIndex = (currentIndex + 1) % sentences.length;
}

function togglePrinting() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {
        printText();
        intervalId = setInterval(printText, 5000);
    }
}



    function toggleMusic() {

        if (isMusicPlaying) {
            audio.pause();
            isMusicPlaying = false;
        } else {
            audio.play();
            isMusicPlaying = true;
        }
}