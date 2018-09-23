import React, { Component } from "react"
import { Route, Link } from "react-router-dom"
import { Field, reduxForm } from 'redux-form'
import showForm from "../reducer/showForm"
import { connect } from "react-redux"

class CreateTodo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { handleSubmit } = this.props
        
        

        console.log(this.props.state)

        return(
            <div className="create-todo-container">
                <form onSubmit={handleSubmit(showForm)}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" component="input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component="input" type="text" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email" />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

CreateTodo = reduxForm({
    form: "user",
    destroyOnUnmount: false
})(CreateTodo)

export default connect(state => {
    return{
        state
    }; 
})(CreateTodo)