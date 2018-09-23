import React, { Component } from "react"
import { connect } from "react-redux"

class TodoList extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="todo-list-container">
                todo-list
            </div>
        )
    }
}

export default (TodoList)
