import React, { Component } from 'react'

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curValue: "",
            lists: []
        }
    }
    handleClick = (event) => {
        console.log(this.state.curValue);
        if(this.state.curValue) {
            this.setState({
                curValue: '',
                lists: [...this.state.lists, this.state.curValue]
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            curValue: event.target.value
        })
    }

    clearContent = () => {
        this.setState({
            curValue: '',
            lists: []
        })
    }

    deleteOne = (index) => {
        const {lists} = this.state;
        lists.splice(index, 1);
        this.setState({
            lists: lists
        })
    }
    render() {
        return (
            <div>
                This is ToDoList
                <div>
                    <input type="text" 
                        value={this.state.curValue}
                        onChange={this.handleChange}></input>
                    <button onClick={this.handleClick}>Add a new ToDo Note</button>
                    <button onClick={this.clearContent}>Clear All Notes</button>
                </div>
                <ul>
                 {this.state.lists.map((ele, index) => {
                    return <li key={ele.substring(0,1) + index}>{ele} <button onClick={(index) => this.deleteOne(index)}>delete</button></li>
                })}
                </ul> 
            </div>
        )
    }
}
