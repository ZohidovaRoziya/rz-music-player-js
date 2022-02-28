////* CALLING ELEMENTS IN HTML
const musicCard_El = document.querySelector(".music-card");
const imgContainer_El = document.querySelector(".img-container");
const title_El = document.getElementById("title");
const cover_El = document.getElementById("cover");
const audio_El = document.getElementById("audio");
const start_El = document.querySelector(".start");
const end_El = document.querySelector(".end");
const progressContainer_El = document.querySelector(".progress-container");
const progress_El = document.querySelector(".progress");
const prev_El = document.getElementById("prev");
const play_El = document.getElementById("play");
const next_El = document.getElementById("next");
const rangeInp = document.getElementById("rangeInp")



////* MUSIC NAMES ARRAY 
const songs = [
    "jonimsan-jahonim deysiz siz hardam",
    "Eslamayman - Husnora",
    "Dada - Nodirbek Xolboyev",
    "Dadajon - Malika Ravshanova",
    "Mening Onam -  Malika Ravshanova",
    "Onaizorim - Nodirbek Xolboyev",
    "Tвоей - улыбкой - Andro-болен",
    "Yandirdin Qelbimi -Aysel Elizade",
    "Yor-yor - Ozoda",
    "Уйдёшь - Rahim & Jony"
];


////* songIndex 
let songIndex = 0;


loadSong(songs[songIndex])

function loadSong(song) {
    title_El.textContent = song
    audio_El.src = `musics/${song}.mp3`
    cover_El.src = `images/${song}.jpg`
}



////* PLAY SONG FUNCATION 
function playSong() {
    musicCard_El.classList.add("play")
    play_El.innerHTML = `<i class="fa-solid fa-pause"></i>`
    audio.play()
}



////* POUSE SONG FUNCATION 
function pauseSong() {
    musicCard_El.classList.remove("play")
    play_El.innerHTML = `<i class="fa-solid fa-play"></i>`
    audio.pause()
}



////* PLAY BUTTON LISTINING 
play_El.addEventListener("click", ()=> {
    const isPlaying = musicCard_El.classList.contains("play")

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})


////* NEXT MUSIC FUNCATION 
function nextMusic() {
    songIndex++
    if (songIndex > songs.length - 1 ) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    audio.play()
}

////* NEXT BUTTON LISTINING 
next_El.addEventListener("click", nextMusic)



////* PREV MUSIC FUNCATION 
function prevMusic() {
    songIndex--
    if (songIndex < 0 ) {
        songIndex = songs.length - 1
    }
    loadSong(songs[songIndex])
    audio.play()
}

////* NEXT BUTTON LISTINING 
prev_El.addEventListener("click", prevMusic)



////* PROGRESS FUNCATION 
function progress(e) {
    const duration = e.srcElement.duration
    const curTime = e.srcElement.currentTime
    const presentageWidth = (curTime / duration) * 100
    progress_El.style.width = `${presentageWidth}%`


    ////* END TIME 
    let endMinutes = Math.floor(duration / 60)
    let endSeconds = Math.floor(duration % 60)
    end_El.textContent = `${endMinutes = endMinutes < 10 ? "0" + endMinutes : endMinutes}:${( endSeconds = endSeconds < 10 ? "0" + endSeconds : endSeconds)}`


      ////* START TIME 
      let startMinutes = Math.floor(curTime / 60)
      let startSeconds = Math.floor(curTime % 60)
      start_El.textContent = `${startMinutes = startMinutes < 10 ? "0" + startMinutes : startMinutes}:${( startSeconds = startSeconds < 10 ? "0" + startSeconds : startSeconds)}`
}


////* AUDIO LISTINING 
audio_El.addEventListener("timeupdate", progress)
audio_El.addEventListener("ended", nextMusic)


////*SET PROGREE FUNCATION 
function setProgress(e) {
    const width = this.clientWidth
    const widthX = e.offsetX
    const duration = audio_El.duration
    audio_El.currentTime = (widthX / width ) * duration
}


////* PROGRESS CONTAINER LISTINING
progressContainer_El.addEventListener("click", setProgress) 



// ////* CHANGE VOLUME FUNCATION
// function changeVolume(){
//     const rangeVolume = +rangeInp.value / +rangeInp.max
//     audio_El.volume = rangeVolume
// }

// ////* RANGE INPUT LISTINING 
// rangeInp.addEventListener("input", changeVolume)