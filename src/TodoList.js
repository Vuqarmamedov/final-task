import React from 'react';
import { connect } from "react-redux";
import { addTodo } from "./actions";

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
        this.onClickHandle = this.onClickHandle.bind(this)
    }

    onClickHandle = () => {
        const val = document.getElementsByTagName("input")[0].value;
        this.setState({
            value:val
        })
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <input type="text"/>
                <button onClick={this.onClickHandle}>Add todo</button>
                TodoList
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        todos: state.todos
    }
};

export default connect (mapStateToProps, {addTodo})(TodoList);