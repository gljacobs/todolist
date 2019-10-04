import React from 'react';

class ToDoInput extends React.Component {
    state = {
        value: ""
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter ToDo..." value={this.state.value} onChange={this.handleChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={() => this.props.handleAddTodo(this.state.value)}>+</button>
                </div>
            </div>
        );
    }
}

export default ToDoInput;