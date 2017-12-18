import React from 'react';

class Options extends React.Component{

  constructor(props){
    super(props);
    this.removeElement = this.removeElement.bind(this);
  }

  removeElement = (optionToRemove) => {
    const opind = optionToRemove.target.getAttribute('data-ind');
    this.props.removeElement(opind);
  };

  render(){
    return(
      <div>
      {
        this.props.options.length > 0 &&
        <button onClick={this.props.removeAllOption}>Remove All</button>
      }
      {
        this.props.options.map((option)=>

          <div key={option}>
            {option}
            <button key={option}  data-ind = {option} onClick={this.removeElement}>Remove</button>

          </div>)
      }
      </div>
    );
  }
}


export default Options;
