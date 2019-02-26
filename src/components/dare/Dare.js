import React from 'react';

class Dare extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        {this.props.dare}
      </div>
      );
  }
}

export default Dare;