import React, {PropTypes} from 'react';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';

class StrikeDare extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentStrikes: 0
    };
    this.strike = this.strike.bind(this);
  }

  strike(event) {
    this.state.currentStrikes += 1
    this.setState({currentStrikes: this.state.currentStrikes});
    if(this.props.dare.repeat === false){
      if(this.state.currentStrikes >= this.props.dare.maxStrikes){
        this.props.fail(this.props.dare);
      }
    }
  }

  strikeDisplay() {
    if(this.props.dare.repeat){
      return (
        <div>
          <span>{this.state.currentStrikes}</span>
        </div>
      );
    } else {
      let strikes = '';
      for(let x = 0; x < this.state.currentStrikes; x++){
        strikes += 'X';
      }
      return(
        <div>
          <span>{strikes}</span>
        </div>
      );
    }
  }

  render(){
    return (
      <div>
        <Button onClick={this.strike}>Strike!</Button>
        {this.strikeDisplay()}
      </div>
      );
  }
}

// StrikeDare.propTypes = {
//   dare: PropTypes.object.isRequired
// };

export default StrikeDare;