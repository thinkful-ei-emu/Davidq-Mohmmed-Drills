import React from 'react';

export default class RouletteGun extends React.Component{
    state = {
        chamber: null,
        spinningTheChamber: false
    };

    trigger(){
        if(this.state.chamber === this.props.chamber){
            return 'BANG!!!';
        }
        else if(this.state.spinningTheChamber){
            return 'spinning the chamber and pulling the trigger...';
        }
        else{
            return 'you are safe!';
        }
    }

    handleClick = e =>{//always use arrow function when event handling
      
      this.setState({spinningTheChamber:true},()=>{//this.setState is async so use callback function
        this.timer = setTimeout(()=>{
          this.setState({
            spinningTheChamber:false,
            chamber: Math.ceil(Math.random()*8)
          })
        },2000);
      });
      console.log(this.state);
    }
    componentWillUnmount(){
      clearTimeout(this.timer);
    }

    render(){
        return(
            <div>
                <p>{this.trigger()}</p>
                <button onClick = {this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}