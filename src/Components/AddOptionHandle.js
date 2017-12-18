import React from 'react';

class AddOptionHandle extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

  }

  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    this.props.addOptionHandle(option);
    e.target.elements.option.value = '';

  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleAddOption}>
      <input type='text' name='option'/>
      <button>Add</button>
      </form>
      </div>
    );
  }
}

export default AddOptionHandle;
