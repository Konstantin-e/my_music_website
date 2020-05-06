import React from 'react'

function Track(props) {

  // for (let i = 0; i < scrubbers.length; i++) {
  //   scrubbers[i].addEventListener("click", progressLocation);
  // }
  
  // function progressLocation(event) {
  
  //   let relativeTrack = event.srcElement.previousElementSibling.firstElementChild.firstElementChild;
  //   let duration = relativeTrack.duration;
  //   let scrollAmount = event.pageX - event.srcElement.offsetLeft; // max is width of .bg = 200
  //   relativeTrack.currentTime = scrollAmount * duration / 200;
  // }

  // if (!props.paused && props.id === props.currentTrackNumber) {
  //   let scrubberId = setInterval(frame, 100);

  //   function frame() {
  //     if (props.currentTime === props.duration || track.paused) {
  //       clearInterval(scrubberId);
  //     } else {
  //         scrubbers[index].setAttribute("value", 100*track.currentTime/track.duration);
  //     }
  //   }
  // }
  

  return(
    <div className="player">
      <div className="bg" onClick={props.setSrc(props.id)}>
        <div className={!props.paused && props.id === props.currentTrackNumber ? "playing" : "paused"}>
          
        </div>
      </div>
        <progress 
          onClick={(event) => {
            if (props.id === props.currentTrackNumber) {
              let amount = event.pageX - event.target.offsetLeft
              amount = amount * props.duration / 200
              props.scrubberClick(amount)
            }
          }}
          className="scrubber" 
          value={
            props.duration && props.currentTime ?
            100 * props.currentTime / props.duration : 0
          } 
          max="100" 
        /> 
    </div>
  )

  
}

export default Track