
let songIndex=0;
let masterPlay= document.getElementById('masterPlay');
let myProgrssBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[ 
    {songName:"Life is better with you" , songPath:"song/1.mp3" , coverPath:"covers/1.jpg"},
    {songName:"Way Down We Go" , songPath:"song/2.mp3" , coverPath:"covers/2.jpg"},
    {songName:"The Shade" , songPath:"song/3.mp3" , coverPath:"covers/3.jpg"},
    {songName:"Sunroof" , songPath:"song/4.mp3" , coverPath:"covers/4.jpg"},
    {songName:"Go fuck yourself" , songPath:"song/5.mp3" , coverPath:"covers/5.jpg"},
    {songName:"I wanna be yours" , songPath:"song/6.mp3" , coverPath:"covers/6.jpg"}
]
let audioElement = new Audio('song/1.mp3');

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;

});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play"); 
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgrssBar.value = progress;
});

myProgrssBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgrssBar.value * audioElement.duration/100;

});

function makeAllPlay(){
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
}



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        e.target.classList.remove('fa-play');
        element.classList.add('fa-pause');
    })
    
})


//GOT SOME BUG HERE

/*

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    return `${minutes}:${seconds}`;
}

Array.from(document.getElementsByClassName('time')).forEach((element)=>{
    element.innerText=formatTime(audioElement.duration);
})

*/



