import React from "react";
import {render} from "react-dom";
import Counter from "./components/counter";
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        let {count, handleClick, increaseCount, decreaseCount} = this.props;

        return (
            <div id="counter">
                <div>
                    <Counter btnText="Increase" handler={increaseCount}/>
                    {count}
                    <Counter btnText="Increase" handler={decreaseCount}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.counter;
};

const mapDispatchToProps = (dispatch) =>({
    increaseCount(){
        dispatch({type: "INCREMENT"})
    },
    decreaseCount(){
        dispatch({type: "DECREMENT"})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);