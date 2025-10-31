const btnpause = document.querySelector("#btnpause");
const btreturn = document.querySelector("#btreturn");
const btnnext = document.querySelector("#btnnext");
const start = document.querySelector("#start");
const end = document.querySelector("#end");
const box = document.querySelector("#box");
const h3 = document.querySelector("#box h3");
const p = document.querySelector("#box p");
const logo = document.querySelector("#box img");
const progress = document.querySelector("#progress");


const playlist = [
    {
        artist: "Cosmos Sheidrake",
        nameMusic: "Lost in the city Ligths",
        src: "./assets/lost-in-city-lights-145038.mp3",
        image: "./assets/cover-1.jpg",
    },
    {
        artist: "Lesfm",
        nameMusic: "Forest Lullaby",
        src: "./assets/forest-lullaby-110624.mp3",
        image: "./assets/cover-2.jpg",
    }

]

let currentSongIndex = 0;
const audio = new Audio(playlist[currentSongIndex].src);


btnpause.addEventListener("click", (play) => {




    if (audio.paused == false) {
        audio.pause()
        return
    } else if (audio.paused == true) {
        audio.play();
        return
    }
    progressBar()


})



btnnext.addEventListener("click", () => {

    currentSongIndex = 1;

    box.classList.add("card");
    logo.src = playlist[currentSongIndex].image;
    h3.innerHTML = playlist[currentSongIndex].nameMusic;
    p.innerHTML = playlist[currentSongIndex].artist;
    audio.src = playlist[currentSongIndex].src;

})

btreturn.addEventListener("click", () => {

    currentSongIndex = currentSongIndex - 1;

    box.classList.add("card");
    logo.src = playlist[currentSongIndex].image;
    h3.innerHTML = playlist[currentSongIndex].nameMusic;
    p.innerHTML = playlist[currentSongIndex].artist;
    audio.src = playlist[currentSongIndex].src;
})



function tempSong() {
    const val = (progress.value - progress.min) / (progress.max - progress.min) * 100;
    progress.style.background = `linear-gradient(to right, #e91e63 ${val}%, #ffffff ${val}%)`;
}

progress.addEventListener("input", function () {
    audio.currentTime = (this.value / 100) * audio.duration;
    tempSong();
});

audio.addEventListener("timeupdate", function () {
    progress.value = (audio.currentTime / audio.duration) * 100;
    tempSong();
    time()
});

function time() {


    let currentValue = audio.currentTime;

    let min = Math.floor(currentValue / 60);
    let secon = Math.floor(currentValue % 60);

    start.innerHTML = `${min.toString().padStart(2, "0")}:${secon.toString().padStart(2, "0")}`;;

    let totalSeconds = Math.floor(audio.duration);

    let remaining = Math.floor(audio.duration - currentValue);

    let remMin = Math.floor(remaining / 60);
    let remSec = Math.floor(remaining % 60);
    let formattedRemaining = `${remMin.toString().padStart(2, "0")}:${remSec.toString().padStart(2, "0")}`;

    end.innerHTML = formattedRemaining;
}