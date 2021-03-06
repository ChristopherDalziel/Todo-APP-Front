import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// React functional component? Action for the display
// Adding className for cross out when completed!
const Todo = props => (
  <tr>
    <td className={props.todo.todo_completed ? "completed" : ""}>{props.todo.todo_description}</td>
    <td className={props.todo.todo_completed ? "completed" : ""}>{props.todo.todo_responsible}</td>
    <td className={props.todo.todo_completed ? "completed" : ""}>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/"+props.todo._id}>Edit</Link>
    </td>
  </tr>
)

export default class todosList extends Component {

  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  // Requesting from the DB
  componentDidMount() {
    console.log('getting data')
    axios.get(process.env.REACT_APP_BACKEND_URL + '/todos/')
      .then(response => {
        this.setState({todos: response.data});
      })
      .catch(function(error){
        console.log(error);
      })
  }

  // Implimenting the todoList method, interating over (.map)
  todoList(){
    return this.state.todos.map(function(currentTodo, i){
      return <Todo todo={currentTodo} key={i} />
    });
  }

  // Creating the render/how the TODO list items will be displayed
  render() {
    return (
      <div>
        {/* Creating the display for TODO items */}
        <h3>TODO's List:</h3>
          <table className="table table-striped" style={{ marginTop: 20}}>
            <thead>
              <tr>
                <th>Description:</th>
                <th>Responsible:</th>
                <th>Priortiy:</th>
                <th>Actions</th>
              </tr>
            </thead>
          <tbody>
            {this.todoList()}
          </tbody>
        </table>
      </div>
    )
  }
}