import React from 'react';


class Indecision extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options : ['Ishwar', '1234']
    };

  }

  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option){
    if(!option){
      return 'Please enter the valid number';
    }else if(this.state.options.indexOf(option) > -1){
      return 'The option is already in array';
    }

    this.setState((preState) => {
      return{
          options : preState.options.concat([option])
      };
    });
  }

  handleDeleteOptions(){
    this.setState(()=>{
      return{
          options: []
      };
    });
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hand of computer';
    return (
      <div>
        <Header title={title} subtitle = {subtitle}/>
        <Action
          hasOption={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options = {this.state.options}
          handleDeleteOptions = {this.handleDeleteOptions}
          />
        <AddOption
          handleAddOption = {this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {


  render(){
    return(
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOption}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {

  render(){
    return(
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.options.map((option)=><p key={option}>{option}</p>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render(){
    return(
      <div>
        Option goes here
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    if(option){
      this.props.handleAddOption(option);
    }

    this.setState(()=>{
      return{
        error: error
      };
    });
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

export default Indecision;
