
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgrssBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementsByClassName('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songListPlay = document.getElementsByClassName("songItemPlay");

let list1 = document.getElementById('pl1');
let list2 = document.getElementById('pl2');
let list3 = document.getElementById('pl3');
let list4 = document.getElementById('pl4');
let list5 = document.getElementById('pl5');
let container = document.getElementsByClassName('container')[0];
let defaultContent = container.innerHTML;


let songs = [
    { songName: "Starboy", songPath: "song/7.m4a", coverPath: "covers/7.jpg", length: "3:50" },
    { songName: "Die For You", songPath: "song/8.m4a", coverPath: "covers/8.png", length: "4:20" },
    { songName: "After Hours", songPath: "song/9.m4a", coverPath: "covers/9.jpg", length: "6:01" },
    { songName: "Blinding Lights", songPath: "song/10.m4a", coverPath: "covers/10.png", length: "3:21" },
    { songName: "Creepin", songPath: "song/11.m4a", coverPath: "covers/11.jpg", length: "3:41" },
    { songName: "Save Your Tears", songPath: "song/12.mp3", coverPath: "covers/12.jpg", length: "3:11" }
]
let audioElement = new Audio('song/7.m4a');

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
            audioElement.src = songs[songIndex].songPath;
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

    audioElement.src = songs[songIndex].songPath;
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

    audioElement.src = songs[songIndex].songPath;
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


list1.addEventListener('mouseover',()=>{

    //container.innerHTML='';
    document.getElementById('sl1').classList.add('hidden');
   

    container.style = `background-image: url(bg2.png);
    background-size: cover;
    background-position: center;`

});

list1.addEventListener('mouseout',()=>{
   

    //container.innerHTML = defaultContent;
    document.getElementById('sl1').classList.remove('hidden');
   


    container.style = `background-image: url(bg2.png);
    background-size: cover;
    background-position: center;`

});



list2.addEventListener('mouseover',()=>{

    //container.innerHTML='';
    document.getElementById('sl1').classList.add('hidden');

    container.style = `background-image: url(bg4.jpg);
    background-size: cover;
    background-position: center;`

});

list2.addEventListener('mouseout',()=>{
   

    //container.innerHTML = defaultContent;
    document.getElementById('sl1').classList.remove('hidden');

    container.style = `background-image: url(bg2.png);
    background-size: cover;
    background-position: center;`
});



list3.addEventListener('mouseover',()=>{

    //container.innerHTML='';
    document.getElementById('sl1').classList.add('hidden');

    container.style = `background-image: url(bg3.jpg);
    background-size: cover;
    background-position: center;`

});

list3.addEventListener('mouseout',()=>{
   

    //container.innerHTML = defaultContent;
    document.getElementById('sl1').classList.remove('hidden');

    container.style = `background-image: url(bg2.png);
    background-size: cover;
    background-position: center;`

});


list4.addEventListener('mouseover',()=>{

    //container.innerHTML='';
    document.getElementById('sl1').classList.add('hidden');

    container.style = `background-image: url(bg5.jpg);
    background-size: cover;
    background-position: center;`

});

list4.addEventListener('mouseout',()=>{
   

    //container.innerHTML = defaultContent;
    document.getElementById('sl1').classList.remove('hidden');

    container.style = `background-image: url(bg2.png);
    background-size: cover;
    background-position: center;`

});

list5.addEventListener('mouseover',()=>{

    //container.innerHTML='';
    document.getElementById('sl1').classList.add('hidden');

    container.style = `background-image: url(bg6.jpeg);
    background-size: cover;
    background-position: center;`

});

list5.addEventListener('mouseout',()=>{
   

    //container.innerHTML = defaultContent;
    document.getElementById('sl1').classList.remove('hidden');

    container.style = `background-image: url(bg2.png);
    background-size: cover;
    background-position: center;`

});
