
let details = document.getElementsByClassName('details');

let techStack=document.getElementsByClassName('techStack');

let aboutMe=document.getElementsByClassName('aboutMe');

let findCode=document.getElementsByClassName('findCode');

let social=document.getElementsByClassName('social');


techStack[0].addEventListener('click',()=>{
    techStack[0].style = "background-color: red"
    details[0].innerHTML= `<div style="opacity: 1;" class="about">
                
    <h1><img src="logo.png">Moodify</h1>
    <p>It's a music player. loaded with songs that can make your mood fantastic.<br>
        <b>Technologies Used</b>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </p>

</div>`   
});

aboutMe[0].addEventListener('click',()=>{
    details[0].innerHTML=`
    <div style="opacity: 1;" class="developedBy">
                <h1><img src="logo.png">Moodify</h1>
                <p style='font-size:30px;text-align:center;align-items:center'>Developed by Jatin</p>

            </div>
    `
});

findCode[0].addEventListener('click',()=>{
    details[0].innerHTML=`
    <div>
    <h1><img src="logo.png">Moodify</h1>

    <p style="text-align:center;
    display:flex;
    align-items:center;
    justify-content:center"><b>Find code here</b></p>
    <a href="https://github.com/CODExJATIN/Moodify-music-player" target="_blank" style="text-decoration:none;font-family:'Varela Round' , sans-serif;"><img src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"><p>Moodify-music-player</p></a>
    </div>
    `
})

