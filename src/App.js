import React from 'react';
import './App.css';
import DrumPad from './DrumPad';

const drums = [
  { id: 'snare', letter: 'Q', src: 'https://www.myinstants.com/media/sounds/snare.mp3' },
  { id: 'bass 1', letter: 'W', src: 'https://www.myinstants.com/media/sounds/bass-drum.mp3' },
  { id: 'bongo', letter: 'E', src: 'http://tipiwiki.free.fr/snd/Percussion(4e)2.wav' },
  { id: 'tom tom', letter: 'A', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav' },
  { id: 'bass 3', letter: 'S', src: 'http://billor.chsh.chc.edu.tw/sound/bass4.wav' },
  { id: 'shotgun', letter: 'D', src: 'http://david.guerrero.free.fr/Effects/ShotgunReload.wav' },
  { id: 'high hat', letter: 'Z', src: 'http://www.denhaku.com/r_box/tr707/closed.wav' },
  { id: 'drum hit', letter: 'X', src: 'http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3' },
  { id: 'laser', letter: 'C', src: 'http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav'  },
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Hit a Drum!'
    }
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleDisplay(drum_name) {
    this.setState({
      display: drum_name
    });
  }
  
  render() {
    return (
    <div id='drum-machine'>
      <div id="display">{this.state.display}</div>
      {drums.map( drum => ( 
        <DrumPad 
          key={drum.toString()}
          id={drum.id}
          letter={drum.letter}
          src={drum.src}
          handleDisplay={this.handleDisplay}
        />
      ))}
    </div>
    );
  }
}
export default App;
