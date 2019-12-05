import React, {Component} from 'react';
import axios from "axios";

export default class editTodo extends Component {

  // Constructor
  constructor(props){
    super(props);
    
    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    }
  }

  componentDidMount(){
    axios.get('https://localhost:4000/todos/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          todo_description: response.data.todo_description,
          todo_responsible: response.data.todo_responsible, 
          todo_priority: response.data.todo_priority,
          todo_completed: response.data.todo_completed
        })
      })
      .catch(function(error) {
        console.log(error);
      })
  }

  // Output form so the user can edit existing values
  render() {
    return (
      <div>
        <h3>TODO: Update</h3>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label>Description:</label>
            <input type="text"
                   className="form-control"
                   value={this.state.todo_description}
                   onChange={this.onChangeTodoDescription} />
            </div>
            <div class="form-group">
              <label>Responsible:</label>
              <input type="text"
                     className="form-control"
                     value={this.state.todo_responsible}
                     onChange={this.onChangeTodoResponsible} />
          </div>
        
          <div className="form-group">
            <label>Description: </label>
            <input type="text" 
                   className="form-control" 
                   value={this.state.todo_description} 
                   onChange={this.onChangeTodoDescription} />
            </div>
            <div className="form-group">
            <label>Responsible: </label>
            <input type="text" 
                   className="form-control" 
                   value={this.state.todo_responsible} 
                   onChange={this.onChangeTodoResponsible} />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input className="form-check-input"
                     type="radio"
                     name="priorityOptions"
                     id="priorityLow"
                     value="Low"
                     checked={this.state.todo_priority==="Low"}
                     onChange={this.onChangeTodoPriority} />
              <label className="form-check-label">Low</label>
              </div>
              <div className="form-check form-check-inline">
              <input className="form-check-input"
                     type="radio"
                     name="priorityOptions"
                     id="priorityMedium"
                     value="Medium"
                     checked={this.state.todo_priority==="Medium"}
                     onChange={this.onChangeTodoPriority} />
              <label className="form-check-label">Medium</label>
              </div>
              <div className="form-check form-check-inline">
              <input className="form-check-input"
                     type="radio"
                     name="priorityOptions"
                     id="priorityHigh"
                     value="High"
                     checked={this.state.todo_priority==="High"}
                     onChange={this.onChangeTodoPriority} />
              <label className="form-check-label">High</label>
              </div>
              <div className="form-check">
                <input type="checkbox"
                       className="form-check-input"
                       id="completedCheckbox"
                       name="completedCheckbox"
                       onChange={this.onChangeTodoCompleted}
                       checked={this.state.todo_completed}
                       value={this.state.todo_completed} />
                <label className="form-check-label" htmlFor="completedCheckbox">
                  Completed
                </label>
              </div>
              <br/>
              <div className="form-group">
                <input type="sbumit value" value="Update TODO" classname="btn btn-primary" />
              </div>
            </div>
        </form>
      </div>
    )
  }
}