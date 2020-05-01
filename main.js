console.log("koi_music online");

let bg = document.getElementsByClassName("bg");
let tracks = document.getElementsByTagName("audio");
// let canv = document.createElement("canvas");
let canv = document.getElementsByTagName("canvas")[0];
const trackNames = ["Deep.mp3", "Dog's Tail.mp3", "Into the Night.mp3", "Paprika.mp3"];
let scrubberId;
let scrubbers = document.getElementsByClassName("scrubber");


function toggleX(x) {
  x.classList.toggle("change");
  document.getElementById("navigation").classList.toggle("shrinked");
}

// mouse hover for tracks ----------------------------------------

for (let i = 0; i < bg.length; i++) {
  bg[i].setAttribute("onmouseover", "hoveraudio(this)");
  bg[i].setAttribute("onmouseout", "hoveraudio(this)");
}

function hoveraudio(elem) {

    if (elem.firstElementChild.style.borderLeft == "50px solid rgb(251, 175, 0)") {
      elem.firstElementChild.style.borderLeft = "50px solid white";
    } else {
      // elem.firstElementChild.style.borderLeft = "50px solid #FBAF00";
    }
}

// mouse hover for tracks end ----------------------------------------


// audio ----------------------------------------

//add play
for (let i = 0; i < bg.length; i++) {
  bg[i].addEventListener("click", () => {
    if (tracks[i].paused == true) {
      for (let j = 0; j < tracks.length; j++) {
        tracks[j].pause();
      }
      tracks[i].play();
      barStart(tracks[i], i);
    } else {
      console.log(tracks[i]);
      tracks[i].pause();
      barStop();
    }
    // console.log(bg[i].firstChild.nextSibling.classList.contains("play"));
    bg[i].firstChild.nextSibling.classList.toggle("paused"); 
    for (let j = 0; j < tracks.length; j++) {
      if (bg[j].firstChild.nextSibling.classList.contains("playing")) {  //if something is playing turn it off
        bg[j].firstChild.nextSibling.classList.toggle("playing"); 
        bg[j].firstChild.nextSibling.classList.toggle("paused");
      }
    }
    bg[i].firstChild.nextSibling.classList.toggle("playing");  //then turn on selected track
    if (tracks[i].paused == true) { //if the track audio is paused switch class to paused
        bg[i].firstChild.nextSibling.classList.toggle("playing"); 
        bg[i].firstChild.nextSibling.classList.toggle("paused");
    }
    // if (bg[i].firstChild.nextSibling.classList.value == "playing") {
    //   bg[i].insertAdjacentElement("afterend", canv);
    //   drawAudio("audio/"+trackNames[i]);
    // }
  } );
}

// function togglePlay(x) {
//   x.classList.toggle("paused");
//   document.getElementById("navigation").classList.toggle("shrinked");
// }

// ---------------------------------------------------------------

function barStart(track, index) {
  scrubberId = setInterval(frame, 1000);

function frame() {
  if (track.ended) {
    clearInterval(scrubberId);
  } else {
    console.log(track.currentTime);
      scrubbers[index].setAttribute("value", 100*track.currentTime/track.duration);
  }
}
}

function barStop() {
  clearInterval(scrubberId);
}