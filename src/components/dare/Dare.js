import React, {PropTypes} from 'react';
import BoolDare from './dareType/BoolDare';
import TimerDare from './dareType/TimerDare';
import StrikeDare from './dareType/StrikeDare';

class Dare extends React.Component {
  
  constructor(props) {
    super(props);
  }

  dareTypeRenderer(dare) {
    if(dare.bool === true && dare.strikes === true && dare.timer === true){
      return (
            <div className="theDare">
              {this.props.dare.dare}
              <BoolDare dare={this.props.dare} complete={this.props.complete} fail={this.props.fail}/>
              <StrikeDare dare={this.props.dare} complete={this.props.complete} fail={this.props.fail}/>
              <TimerDare dare={this.props.dare} complete={this.props.complete} fail={this.props.fail}/>
            </div>
            );
    } else if (dare.bool === true && dare.strikes === true){
      return (<div>Bool Strikes Dare</div>);
    } else if (dare.bool === true && dare.timer === true){
      return (<div>Bool Timer Dare</div>);
    } else if (dare.strikes === true && dare.timer === true){
      return (<div>Strikes Timer Dare</div>);
    } else if (dare.bool === true){
      return (<div>Bool Dare</div>);
    } else if (dare.strikes === true){
      return (<div>Strikes Dare</div>);
    } else if (dare.timer === true){
      return (<div>Timer Dare</div>);
    } else {
      return (<div>Invalid Dare</div>);
    }
  }

  render(){
    return (
      <div>
        {this.dareTypeRenderer(this.props.dare)}
      </div>
      );
  }
}

// Dare.propTypes = {
//   dare: PropTypes.object.isRequired
// };

export default Dare;