import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateBug extends Component {
    constructor(props){
        super(props);

        this.onChangeBugname = this.onChangeBugname.bind(this);
        this.onChangeReporter = this.onChangeReporter.bind(this);
        this.onChangeAssignee = this.onChangeAssignee.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeSeverity = this.onChangeSeverity.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            bugname: '',
            reporter: '',
            assignee: '',
            status: '',
            severity: '',
            date: new Date(),
            employees: [],

            statuss: ['Open', 'In progress', 'In testing', 'closed'],
            severitys: ['High', 'Medium', 'Low']
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/employee/')
        .then(response => {
            if (response.data.length > 0) {
            this.setState({
                employees: response.data.map(employees => employees.name),
                name: response.data[0].name
            })
            }
        })
        .catch((error) => {
            console.log(error);
        })

        // this.setState({
        //     //reporters: ['Jack', 'Paul', 'Unknown'],
        //     //assignees: ['Jack', 'Paul', 'Ray', 'Clark', 'Unknown'],
        //     statuss: ['Open', 'In progress', 'In testing', 'closed'],
        //     severitys: ['High', 'Medium', 'Low']
        // })
    }

    onChangeBugname(e){
        this.setState({
            bugname: e.target.value
        });
    }

    onChangeReporter(e){
        this.setState({
            reporter: e.target.value
        });
    }

    onChangeAssignee(e){
        this.setState({
            assignee: e.target.value
        });
    }

    onChangeStatus(e){
        this.setState({
            status: e.target.value
        });
    }

    onChangeSeverity(e){
        this.setState({
            severity: e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
    
        const bug = {
            bugname: this.state.bugname,
            reporter: this.state.reporter,
            assignee: this.state.assignee,
            status: this.state.status,
            severity: this.state.severity,
            date: this.state.date
        }
    
        console.log(bug);
    
        axios.post('http://localhost:4000/bugs/add/', bug)
           .then(res =>  console.log(res.data));
        
    }

    render(){
        return (
            <div>
                <h3>Create New Bug Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Bug name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.bugname}
                        onChange={this.onChangeBugname}
                        />
                    </div>

                    <div className="form-group pt-3"> 
                    <label>Reporter: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.reporter}
                        onChange={this.onChangeReporter}>
                        {
                            this.state.employees.map(function(reporter) {
                                return <option 
                                    key={reporter}
                                    value={reporter}>{reporter}
                                    </option>;
                            })
                        }
                    </select>
                    </div>  

                    <div className="form-group pt-3"> 
                    <label>Assignee: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.assignee}
                        onChange={this.onChangeAssignee}>
                        {
                            this.state.employees.map(function(assignee) {
                                return <option 
                                    key={assignee}
                                    value={assignee}>{assignee}
                                    </option>;
                            })
                        }
                    </select>
                    </div>  

                    <div className="form-group pt-3"> 
                    <label>Status: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.status}
                        onChange={this.onChangeStatus}>
                        {
                            this.state.statuss.map(function(s) {
                                return <option 
                                    key={s}
                                    value={s}>{s}
                                    </option>;
                            })
                        }
                    </select>
                    </div>   

                    <div className="form-group pt-3"> 
                    <label>Severity: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.severity}
                        onChange={this.onChangeSeverity}>
                        {
                            this.state.severitys.map(function(s) {
                                return <option 
                                    key={s}
                                    value={s}>{s}
                                    </option>;
                            })
                        }
                    </select>
                    </div>                

                    <div className="form-group pt-3">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                        />
                    </div>
                    </div>

                    <div className="form-group pt-3">
                    <input type="submit" value="Submit a bug" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}