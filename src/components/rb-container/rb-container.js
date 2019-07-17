import React, { Component } from 'react';

export default class RBContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log(this);
        return (
            <div style={{padding: "50px", border: "solid 3px", borderColor: this.props.color, width: "40%"}}>
                {this.props.children}
            </div>
        )
    }
}
