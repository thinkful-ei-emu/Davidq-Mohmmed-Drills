import React from 'react';

export default class Accordian extends React.Component{
  state = {
    showing : null,
  }
  allSections(){
    return this.props.sections.map((sec, index)=>{
      return (<li key={index}><Section key={index} id={index}  title={sec.title} content={sec.content} showing={this.state.showing} onFocusChange={this.handleFocus}/></li>);
    });

  }
  handleFocus = id =>{
    console.log(id);
     this.setState({
      showing: id
    }); 
  }
  render(){
    return (
      <ul>
        {this.allSections()}
        
      </ul>
    );
  }
}

class Section extends React.Component{
  sHandleFocus = (e)=>{
    this.props.onFocusChange(this.props.id);
  }
  render(){
    return (<div>
      <button onClick = {this.sHandleFocus}> {this.props.title} </button>
      <p>{this.props.showing === this.props.id && this.props.content}</p>
      </div>
    );
  }
}