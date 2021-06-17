import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Bug = props => (
    <tr>
      <td>{props.bug.bugname}</td>
      <td>{props.bug.reporter}</td>
      <td>{props.bug.assignee}</td>
      <td>{props.bug.status}</td>
      <td>{props.bug.severity}</td>
      <td>{props.bug.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.bug._id}>edit</Link> | <a href="#" onClick={() => { props.deleteBug(props.bug._id) }}>delete</a>
      </td>
    </tr>
)

export default class BugsList extends Component {
    constructor(props){
        super(props);
        
        this.deleteBug = this.deleteBug.bind(this);
        this.state = { bugs: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/bugs/')
          .then(response => {
            this.setState({
                bugs: response.data   
            })   
          })
          .catch(function (error) {
            console.log(error);
        })
    }

    deleteBug(id) {
        axios.delete('http://localhost:4000/bugs/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          bugs: this.state.bugs.filter(el => el._id !== id)
        })
    }

    bugsList() {
        return this.state.bugs.map(currentbug => {
          return <Bug bug={currentbug} deleteBug={this.deleteBug} key={currentbug._id}/>;
        })
    }

    render(){
        return (
            <div>
                <h3>Logged Bugs</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr className="table-secondary">
                    <th>Bug name</th>
                    <th>Reporter</th>
                    <th>Assignee</th>
                    <th>Status</th>
                    <th>Severity</th>
                    <th>Date</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.bugsList() }
                </tbody>
                </table>
            </div>
        )
    }
}