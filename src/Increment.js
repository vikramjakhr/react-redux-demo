import React from "react";
import {render} from "react-dom";

class Increment extends React.Component{
    render(){
        return(
            <input type="button" value="+" onClick={this.props.clickHandler}/>
        );
    }
}

export default Increment;