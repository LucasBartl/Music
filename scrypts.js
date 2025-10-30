const btnpause = document.querySelector("#btnpause");
const btreturn = document.querySelector("#btreturn");
const btnnext = document.querySelector("#btnnext");
const timestart = document.querySelector("#timestart");
const timeend  = document.querySelector("#timeend");


const playlist  = [
    {
        artist:"Cosmos Sheidrake",
        nameMusic: "Lost in the city Ligths",
        src: "./assets/lost-in-city-lights-145038.mp3",
        image:"./assets/cover1.jpg"
    },
    {
        artist:"Lesfm",
        nameMusic: "Forest Lullaby",
        src: "./assets/forest-lullaby-110624.mp3",
        image:"./assets/cover2.jpg" 
    }

]

let currentSongIndex = 0;
const audio = new Audio(playlist[currentSongIndex].src);


btnpause.addEventListener("click",(play) => {    


    timeend.innerHTML = new Audio(playlist[currentSongIndex].src).duration;
    
    if(audio.paused ==false){
        audio.pause()
        return
    }else if(audio.paused == true ){
        audio.play();
        return
    }



})
btnnext.addEventListener("click", ()=>{

    



})




document.querySelector("#progress").addEventListener("input", function () {
 audio.currentTime = (this.value / 100) * audio.duration;
});


