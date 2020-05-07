import React from 'react'
import Track from './Track'
import songs from '../songs'

class MusicSection extends React.Component {
  constructor() {
    super()
    this.state = {
      src: "",
      paused: true,
      duration: [],
      currentTrackNumber: "",
      currentTime: [],
    }

    this.player = React.createRef()
  }


  handleSetSrc = (id) => {
    return () => {
      this.setState({
        src: songs[id].src,
        currentTrackNumber: id,
      }, () => { //when done setting state do this
        if (this.player.current.paused) {
          if (this.state.currentTime[id]) { //if current time was set. otherwise start from 0
            this.player.current.currentTime = this.state.currentTime[id] //start from where stopped last time
          }
          this.player.current.play()
          this.setState({
            paused: false,
            ended: this.player.current.ended
          })
        } else {
          this.player.current.pause()
          this.setState({
            paused: true,
          })
        }
      }) 
    }
  } 

  handleTimeUpdate = (event) => {
    let index = this.state.currentTrackNumber
    let updatedCurrentTime = [...this.state.currentTime]
    updatedCurrentTime[index] = event.target.currentTime //update single value in array
    this.setState({
      currentTime: updatedCurrentTime
    })
  }

  handleDurationChange = () => {
    let updatedDuartion = [...this.state.duration]
    updatedDuartion[this.state.currentTrackNumber] = this.player.current.duration
    this.setState({
      duration: updatedDuartion
    })
  }

  handleScrubberClick = (amount) => {
    try {
      this.player.current.currentTime = amount
    } catch {
      console.log("give it a second...")
    }
  }

  handleEnded = () => {
    let index = this.state.currentTrackNumber
    let updatedCurrentTime = [...this.state.currentTime]
    updatedCurrentTime[index] = 0
    this.setState({
      ended: this.player.current.ended,
      paused: true,
      currentTime: updatedCurrentTime
    })
  }

  render() {
    const list = songs.map((item, index) => {
      return(
        <Track 
          ended={this.state.ended}
          currentTime={this.state.currentTime[index]}
          currentTrackNumber={this.state.currentTrackNumber}
          paused={this.state.paused}
          duration={this.state.duration[index]}
          title={songs[index].name}
          key={index}
          id={index}
          setSrc={this.handleSetSrc}
          scrubberClick={this.handleScrubberClick}
        />
      )
    })
    return(
      <div className="tracks" >
        <audio 
          ref={this.player}
          src={this.state.src}
          onTimeUpdate={this.handleTimeUpdate}
          onDurationChange={this.handleDurationChange}
          onEnded={this.handleEnded}
        />
        
        {list}
        
      </div>
    )
  }
}

export default MusicSection
