import React from 'react';

class Counter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
  }

  addOne(){
    this.setState((prevCount) => {
      return {
        count: prevCount.count + 1
      };
    });
  }

  minusOne(){
    this.setState((prevCount) => {
      return{
        count: prevCount.count - 1
      };
    });
  }

  reset(){
    this.setState(()=>{
      return{
        count: 0
      };
    });
  }

  render(){
    return(
      <div>
        <p>Count : {this.state.count} </p>
        <button onClick={this.addOne}>Add One</button>
        <button onClick={this.minusOne}>Minus One</button>
        <button onClick={this.reset}>Reset</button>

      </div>
    );
  }
}

export default Counter;
