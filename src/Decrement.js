import React, {Component} from "react";
import {render} from "react-dom";


class Decrement extends Component {
    render() {
        return (
            <input type="button" value="-" onClick={this.props.clickHandler}/>
        );
    }
}

export default Decrement;