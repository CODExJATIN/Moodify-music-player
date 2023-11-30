
let details = document.getElementsByClassName('details');

let techStack=document.getElementsByClassName('techStack');

let aboutMe=document.getElementsByClassName('aboutMe');

let findCode=document.getElementsByClassName('findCode');

let social=document.getElementsByClassName('social');

let selector=document.getElementsByClassName('selector');


function removeColor(){
    techStack[0].style="background-color:black";
    aboutMe[0].style="background-color:black";
    findCode[0].style="background-color:black";
    social[0].style="background-color:black";

}




techStack[0].addEventListener('click',()=>{
    

    details[0].innerHTML= `<div style="opacity:0; transition: opacity 1s ease-in" class="about box">
                
    <h1><img src="logo.png">Moodify</h1>
    <p>It's a music player. loaded with songs that can make your mood fantastic.<br>
        <b>Technologies Used</b>
        <ul class="techList">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </p>

</div>`;

removeColor();

techStack[0].style = "background-color: red"

setTimeout(() => {
    document.getElementsByClassName("box")[0].style.opacity = 1;
}, 10);

});

aboutMe[0].addEventListener('click',()=>{
    details[0].innerHTML=`
    <div style="opacity:0; transition: opacity 1s ease-in" class=" box developedBy">
                <h1><img src="logo.png">Moodify</h1>
                <p style='font-size:30px;text-align:center;align-items:center'>Developed by Jatin</p>

            </div>
    `;

    removeColor();

    aboutMe[0].style="background-color:red;"

    setTimeout(() => {
        document.getElementsByClassName("box")[0].style.opacity = 1;
    }, 10);
});

findCode[0].addEventListener('click',()=>{

    details[0].innerHTML=`
    <div class="box" style="opacity:0; transition: opacity 1s ease-in">
    <h1><img src="logo.png">Moodify</h1>

    <br>

    <p style="text-align:center;
    display:flex;
    align-items:center;
    justify-content:center"><b>Find code here</b></p>
    <a href="https://github.com/CODExJATIN/Moodify-music-player" target="_blank"><img src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg" style="align-items:center"><h3>Moodify-music-player</h3></a>

    </div>
    `;

    removeColor();
    findCode[0].style="background-color:red;"

    setTimeout(() => {
        document.getElementsByClassName("box")[0].style.opacity = 1;
    }, 10);

})

social[0].addEventListener('click',()=>{
    details[0].innerHTML=`
    <div class="box" style="opacity:0; transition: opacity 1s ease-in">
    <h1><img src="logo.png">Moodify</h1>
    <br><br>

    <h4 style="font-family: 'Varela Round' , sans-serif;">Find me on:</h4>

    <a href="https://www.instagram.com/yup_jatin/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="instagram"> <h3>@yup_jatin</h3></a>

    <br>

    <a href="https://www.linkedin.com/in/jatin-p-9048a5250/" target="_blank"><img src="https://yt3.googleusercontent.com/9XmuxL_LL7CxAOOlbBgTnJIo2uHpoLKHhWzlPt7O49ULQmvBSJlxk1RpX3pJ8jkRBkD6p9BIRg=s900-c-k-c0x00ffffff-no-rj" alt="instagram" id="linkedIn">  <h3>Jatin Parmar</h3></a>
    </div>
    `;

    removeColor();

    social[0].style="background-color:red;"

    setTimeout(() => {
        document.getElementsByClassName("box")[0].style.opacity = 1;
    }, 10);
})

