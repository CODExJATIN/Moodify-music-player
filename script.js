
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgrssBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementsByClassName('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songListPlay = document.getElementsByClassName("songItemPlay");


let songs = [
    { songName: "Life is better with you", songPath: "song/1.mp3", coverPath: "covers/1.jpg", length: "3:16" },
    { songName: "Way Down We Go", songPath: "song/2.mp3", coverPath: "covers/2.jpg", length: "3:33" },
    { songName: "The Shade", songPath: "song/3.mp3", coverPath: "covers/3.jpg", length: "3:01" },
    { songName: "Sunroof", songPath: "song/4.mp3", coverPath: "covers/4.jpg", length: "2:43" },
    { songName: "Go fuck yourself", songPath: "song/5.mp3", coverPath: "covers/5.jpg", length: "2:09" },
    { songName: "I wanna be yours", songPath: "song/6.mp3", coverPath: "covers/6.jpg", length: "3:03" }
]
let audioElement = new Audio('song/1.mp3');

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("time")[0].innerText = songs[i].length;

});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterSongName[0].innerText = songs[songIndex].songName;
        //console.log(songs[songIndex].songName);
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        songListPlay[songIndex].classList.remove("fa-play");
        songListPlay[songIndex].classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        songListPlay[songIndex].classList.remove("fa-pause");
        songListPlay[songIndex].classList.add("fa-play");
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgrssBar.value = progress;
});

myProgrssBar.addEventListener('change', () => {
    audioElement.currentTime = myProgrssBar.value * audioElement.duration / 100;

});

function makeAllPlay() {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        if (audioElement.paused || audioElement.currentTime <= 0) {

            makeAllPlay();
            index = parseInt(e.target.id);
            songIndex = index;
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            audioElement.src = `song/${index + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterSongName[0].innerText = songs[songIndex].songName;
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
            gif.style.opacity = 1;

        }

        else {

            audioElement.pause();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');

            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");

            gif.style.opacity = 0;

        }






    })

})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 4) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }

    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName[0].innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");

    songListPlay[songIndex].classList.remove("fa-play");
    songListPlay[songIndex].classList.add("fa-pause");

    songListPlay[songIndex-1].classList.remove("fa-pause");
    songListPlay[songIndex-1].classList.add("fa-play");

    gif.style.opacity = 1;

});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex < 0) {
        songIndex = 0;
    }
    else if (songIndex === 0) {
        songIndex = 5;
    }
    else {
        songIndex -= 1;
    }

    audioElement.src = `song/${songIndex + 1}.mp3`;
    masterSongName[0].innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");

    songListPlay[songIndex].classList.remove("fa-play");
    songListPlay[songIndex].classList.add("fa-pause");

    songListPlay[songIndex+1].classList.remove("fa-pause");
    songListPlay[songIndex+1].classList.add("fa-play");

    gif.style.opacity = 1;

});



