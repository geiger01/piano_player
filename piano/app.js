const whiteKeys= ['z', 'x', 'c', 'v', 'b', 'n', 'm',"q",'w','e','r','t','y','u'];
const blackKeys= ['s', 'd', 'g', 'h', 'j', '2','3','5','6','7'];

const whiteNotes = document.querySelectorAll(".key.white");
const blackNotes = document.querySelectorAll(".key.black");
const keys = document.querySelectorAll(".key");

document.addEventListener('keydown', e => {
    const key = e.key;
    // console.log(key);
    const whiteKeyIndex = whiteKeys.indexOf(key);
    const blackKeyIndex = blackKeys.indexOf(key);

    if (whiteKeyIndex > -1){playNote(whiteNotes[whiteKeyIndex])}
    if (blackKeyIndex > -1){playNote(blackNotes[blackKeyIndex])}
})

document.addEventListener('keyup', e => {
    const key = e.key;
    const whiteKeyIndex = whiteKeys.indexOf(key);
    const blackKeyIndex = blackKeys.indexOf(key);

    if (whiteKeyIndex > -1){pauseNote(whiteNotes[whiteKeyIndex])}
    if (blackKeyIndex > -1){pauseNote(blackNotes[blackKeyIndex])}
})



keys.forEach(key => {
    key.addEventListener("mousedown", () => playNote(key));
    // key.addEventListener("click", () => playNote(key));
    key.addEventListener("mouseup", () => pauseNote(key));
    key.addEventListener("touchstart", () => playNote(key));//for mobile experience
    key.addEventListener("touchend", () => pauseNote(key));

})

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note);
    // noteAudio.currentTime = 0;
    noteAudio.play();

    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })

}

function pauseNote(key){
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.pause();
    key.classList.remove('active');
}


