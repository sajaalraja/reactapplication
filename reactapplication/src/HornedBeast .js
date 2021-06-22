import React, { Component } from 'react'

class HornedBeast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vote: props.vote
        }
    }

votinggchange = () => {
    this.setState({ vote: this.state.vote + 1 })
}


render(){


    return (
        <div>
            <h2>{this.props.title}</h2>
            <img src={this.props.imgage}></img>
            <p>{this.props.description}</p>
            <button onClick={this.votinggchange}>ask for voting</button>
            <span> {this.state.vote}</span>
        </div>
    )

}
}
export default HornedBeast;