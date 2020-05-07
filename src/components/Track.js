import React from 'react'

function Track(props) {

  function convertToTime(num) {
    num = num * 1000 //ms
    let date = new Date(num)
    // if (props.duration - props.currentTime < 1 || !props.currentTime) {return "0:00"}
    return date.getMinutes() + ':' + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds())
  }

  return(
    <div className="player">
      <div className="song-title">{props.title}</div>
      <div className="bg" onClick={props.setSrc(props.id)}>
        <div className={!props.paused && props.id === props.currentTrackNumber ? "playing" : "paused"}>
          
        </div>
      </div>
      <div className="progress-container">
        <div>{props.currentTime && props.id === props.currentTrackNumber ? convertToTime(props.currentTime) : null}</div>
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
        <div>{(props.duration && !props.ended && props.id === props.currentTrackNumber) ?
         convertToTime(props.duration) : null}
        </div>
      </div>
    </div>
  )

  
}

export default Track
