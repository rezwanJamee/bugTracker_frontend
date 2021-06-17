import React, { Component } from 'react';
import axios from 'axios';

export default class CreateEmployee extends Component {
    constructor(props){
        super(props);

        this.onChangeEmployeename = this.onChangeEmployeename.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: ''
        }
    }

    onChangeEmployeename(e){
        this.setState({
            name: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const employee = {
            name: this.state.name
        }
    
        console.log(employee);

        this.setState({
            name: ''
        })
           
        axios.post('http://localhost:4000/employee/add', employee)
           .then(res => console.log(res.data)); 

        alert("New employee added!")  
    }

    render(){
        return (
            <div>
                <h3>Create New Employee</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label className="mb-1">Employee name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeEmployeename}
                        />
                </div>
                <div className="form-group mt-3">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
                </form>
            </div>
        )
    }
}