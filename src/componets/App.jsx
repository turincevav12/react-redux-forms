import React, { Component } from "react"
import { Route, Link } from "react-router-dom"

import CreateTodo from "../router/CreateTodo"
import TodoList from "../router/TodoList"

class App extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="app-container">
                <main>
                    <Route exact path="/todo-list" component={TodoList}></Route>
                    <Route exact path="/" component={CreateTodo}></Route>
                </main>
            </div>
        )
    }
}

export default App

