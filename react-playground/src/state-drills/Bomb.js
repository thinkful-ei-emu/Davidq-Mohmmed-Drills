import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0
    };
    componentDidMount() {
        this.timer = setInterval(() =>{
            this.setState({
                count: this.state.count + 1
            })
            //console.log('hello')
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    displayCounts(){
        if(this.state.count > 8){
            clearInterval(this.timer);
            return 'BOOM';
        }
        else if(this.state.count % 2 === 0){
            return 'tick';
        }
        else return 'tock';
    }

    render(){
        return(
            <div>
                <p>
                {this.displayCounts()}
                </p>
            </div>
        )
    }
}
export default Bomb;