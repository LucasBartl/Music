const btnpause = document.querySelector("#btnpause");
const btreturn = document.querySelector("#btreturn");
const btnnext = document.querySelector("#btnnext");
const timestart = document.querySelector("#timestart");
const timeend = document.querySelector("#timeend");
const box = document.querySelector("#box");
const h3 = document.querySelector("#box h3");
const p = document.querySelector("#box p");
const logo = document.querySelector("#box img");

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


    timeend.innerHTML = new Audio(playlist[currentSongIndex].src).duration;

    if (audio.paused == false) {
        audio.pause()
        return
    } else if (audio.paused == true) {
        audio.play();
        return
    }



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



document.querySelector("#progress").addEventListener("input", function () {
    audio.currentTime = (this.value / 100) * audio.duration;
});


