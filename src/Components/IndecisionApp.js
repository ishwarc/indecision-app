import React from 'react';
import Headers from './Headers';
import Action from './Action';
import Options from './Options';
import AddOptionHandle from './AddOptionHandle';


class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.addOptionHandle = this.addOptionHandle.bind(this);
    this.removeAllOption = this.removeAllOption.bind(this);
    this.removeElement = this.removeElement.bind(this);
    this.state = {
      options:['123', '456']
    };
  }

  // componentDitmount(){
  //   if(options){
  //     this.setState(() => ({ options }));
  //   }
  // }

  handlePick(){
    const option = Math.floor(Math.random() * (this.state.options.length));
    alert(this.state.options[option]);
  }

  addOptionHandle(option){
    if(!option){
      return 'You cannot enter empty name';
    }else if(this.state.options.indexOf(option) > -1){
      return 'You cannot enter duplicate entry';
    }

    this.setState((prevState)=>{
      return{
        options: prevState.options.concat([option])
      };
    });
  }

  removeElement(optionToRemove){
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove != option)
    }));
  }

  removeAllOption(){
    this.setState(()=>{
      return{
          options: []
      };
    });
  }

  render(){
    return(
      <div>
        <Headers/ >
        <Action
        handlePick = {this.handlePick}
        hasOption = {this.state.options.length > 0}
        />
        <Options
        options={this.state.options}
        removeAllOption = {this.removeAllOption}
        removeElement = {this.removeElement}
        />
        <AddOptionHandle
        addOptionHandle = {this.addOptionHandle}/>
      </div>
    );
  }
}


export default IndecisionApp;
