const whiteKeys= ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const blackKeys= ['s', 'd', 'g', 'h', 'j'];

const whiteNotes = document.querySelectorAll(".key.white");
const blackNotes = document.querySelectorAll(".key.black");
const keys = document.querySelectorAll(".key");

document.addEventListener('keydown', e => {
    const key = e.key;
    const whiteKeyIndex = whiteKeys.indexOf(key);
    const blackKeyIndex = blackKeys.indexOf(key);

    if (whiteKeyIndex > -1){playNote(whiteNotes[whiteKeyIndex])}
    if (blackKeyIndex > -1){playNote(blackNotes[blackKeyIndex])}
})

keys.forEach(key => {
    key.addEventListener("click", () => playNote(key));
})

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}