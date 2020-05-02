console.log("koi_music online");

let bg = document.getElementsByClassName("bg");
let tracks = document.getElementsByTagName("audio");
let trackLengths = [];
let canv = document.getElementsByTagName("canvas")[0];
const trackNames = ["Deep.mp3", "Dog's Tail.mp3", "Into the Night.mp3", "Paprika.mp3"];
let scrubberIds = [];
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
      // barStop();
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

// progress bar
function barStart(track, index) {
   
  scrubberIds[index] = setInterval(frame, 100); //creates an id with respect to track number

  function frame() {
    if (track.ended || track.paused == true) {
      clearInterval(scrubberIds[index]);
    } else {
      // console.log(track.currentTime);
        scrubbers[index].setAttribute("value", 100*track.currentTime/track.duration);
    }
  }
}


for (let i = 0; i < scrubbers.length; i++) {
  scrubbers[i].addEventListener("click", progressLocation);
}

function progressLocation(event) {
  // for (let i = 0; i < tracks.length; i++) {
  //   trackLengths[i] = tracks[i].duration;
  //   console.log(tracks[i].duration);
  // }

  // console.log(event.pageX - event.srcElement.offsetLeft);

  let relativeTrack = event.srcElement.previousElementSibling.firstElementChild.firstElementChild;
  let duration = relativeTrack.duration;
  let scrollAmount = event.pageX - event.srcElement.offsetLeft; // max is width of .bg = 200
  relativeTrack.currentTime = scrollAmount * duration / 200;
}


// ---------------------------------------------------------------

