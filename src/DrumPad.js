import React from 'react';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
      }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress(e) {
        if (e.keyCode === this.props.letter.charCodeAt()) {
            this.audio.play(e);
            this.props.handleDisplay(this.props.id);
        }
    }

    handleClick(e) {
       this.audio.play(e);
       this.props.handleDisplay(this.props.id);
    };
    render() {
        return (
            <div id={this.props.id} className="drum-pad" onClick={this.handleClick}>{this.props.letter}
                <audio 
                    src={this.props.src}
                    className="clip"
                    id={this.props.letter}
                    ref = {ref => this.audio = ref}></audio>
            </div>
        )
    }
}

export default DrumPad;