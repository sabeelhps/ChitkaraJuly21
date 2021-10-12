import React, { Component } from 'react'

class Happy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHappy:true
        }
    }


    onClickHandler = () => {
        this.setState({ isHappy: !this.state.isHappy });
    }

    render() {
        return (
            <div>
                <h2 onClick={this.onClickHandler}>{ this.state.isHappy ? "😂" : "😢" }</h2>
            </div>
        )
    }
}

export default Happy;
