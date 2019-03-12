import React, {PropTypes} from 'react';
import Checkbox from '@material-ui/core/Checkbox';


class BoolDare extends React.Component {
  
  constructor(props) {
    super(props);
    this.checked = this.checked.bind(this);
  }

  checked(event) {
    this.props.complete(this.props.dare)
  }

  render(){
    return (
      <div>
        <Checkbox onClick={this.checked}/>
      </div>
      );
  }
}

// BoolDare.propTypes = {
//   dare: PropTypes.object.isRequired
// };

export default BoolDare;