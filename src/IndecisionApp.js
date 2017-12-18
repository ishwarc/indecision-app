import React from 'react';

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options:['Ishwar', 'Senji']
    }

  }

  handlePick(){

  }

  handleAddOne(option){
    this.setState((preState)=>{
      return{
        options: preState.options.concat(option)
      };
    });
  }

  handleRemoveAll(){
    this.setState(()=>{
      return{
        options:[]
      }
    });
  }

  render(){
    return(
      <div>
        <h1>Indecision</h1>
        <p>Put your life in the hand of Computer</p>
        
        <button onClick={this.handlePick}>What should I do?</button>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <form onSubmit={this.handleAddOne}>
          <input type='text' name='options'></input>
          <button>Add Options</button>
        </form>
      </div>
    );
  }
}

export default IndecisionApp;
