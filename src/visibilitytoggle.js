import React from 'react';

class VisibilityToggle extends  React.Component {
  constructor(props){
    super(props);
    this.toggleCheck = this.toggleCheck.bind(this);
    this.state = {
      toggleOn: false
    };
  }

  toggleCheck(){
    this.setState((preToggle) =>{
      return{
          toggleOn : !preToggle.toggleOn
      };
    });
  }

  render(){
    return(
      <div>
        <h1>Toggle On/Off</h1>
        <button onClick={this.toggleCheck}>{this.state.toggleOn ? 'ON' : 'OFF'}</button>
        {this.state.toggleOn && <p>The Toggle is one </p>}
      </div>
    );
  }
}

export default VisibilityToggle;
