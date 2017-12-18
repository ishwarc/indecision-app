import React from 'react';

class Action extends React.Component{
  render(){
    return(
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOption}>Please tell what do you want to pick?</button>
      </div>
    );
  }
}

export default Action;
