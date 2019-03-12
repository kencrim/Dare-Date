import React, {PropTypes} from 'react';
import Button from '@material-ui/core/Button';

class TimerDare extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
    timeRemaining: {hours: 0, minutes: 0, seconds: 0},
    endTime: new Date(this.props.dare.timeCreated.getTime()+props.dare.timerTimeMins*60*1000),
    stopTimer: setInterval(() => {this.timerCountdown();},500)
    };
    this.stopTime = this.stopTime.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.state.stopTimer);
  }

  timerCountdown() {
    let currentTime = new Date;
    let timeDifference = this.state.endTime.getTime()-currentTime.getTime();
    if(timeDifference <= 0){
      this.setState({timeRemaining: {hours: 0, minutes: 0, seconds: 0}});
      this.props.fail(this.props.dare);
    } else {
    let seconds = Math.floor(timeDifference/1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    this.setState({timeRemaining: {hours: hours, minutes: minutes, seconds: seconds}});
    }
  }

  stopTime() {
    clearInterval(this.state.stopTimer);
    this.props.complete(this.props.dare)
  }

  render(){
    return (
      <div>
        <span>
          {`H:${this.state.timeRemaining.hours} M:${this.state.timeRemaining.minutes} S:${this.state.timeRemaining.seconds}`}
        </span>
        <Button onClick={this.stopTime}>Stop</Button>
      </div>
      );
  }
}

// TimerDare.propTypes = {
//   dare: PropTypes.object.isRequired
// };

export default TimerDare;