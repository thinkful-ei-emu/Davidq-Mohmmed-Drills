/* eslint-env jsx */
import React from 'react';

export default class Hello extends React.Component{
state = {
  who: 'World'
};
handleClick = (e) =>{
  let newObj = {
    who: e.target.innerHTML
  };
  this.setState(newObj);
}
  render(){
    return (
      <div className="hello">
        <p>Hello {this.state.who}</p><br/>
        <button onClick = {this.handleClick}>World</button>
        <button onClick = {this.handleClick}>Friend</button>
        <button onClick = {this.handleClick}>React</button>
      </div>

    );
  }
}