import React from 'react';
import ToDoInput from './ToDoInput'

class ToDoList extends React.Component {
    state = {
        toDos: [
            { num: 1, todo: "Take car to get a wash.", completed: false },
            { num: 2, todo: "Pick up groceries.", completed: false },
            { num: 3, todo: "Take dog to vet.", completed: true },
            { num: 4, todo: "Pick weeds out of garden beds.", completed: false },
        ],
    }
    handleCheck(rowNum) {
        this.setState({
            toDos: this.state.toDos.map((todo) => {
                if(todo.num === rowNum) todo.completed = !todo.completed;
                return todo;
            }),
        });
    }
    handleAddTodo = (input) => {
        this.setState({
            toDos: [
                ...this.state.toDos,
                { num: this.state.toDos.length + 1, todo: input, completed: false }
            ]
        })
    }
    render() {
        return (
            <div className="container">
                <br />
                <ToDoInput handleAddTodo={this.handleAddTodo}/>
                <table className="table table-striped table-bordered table-dark">
                    <thead className="bg-primary">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ToDo</th>
                            {/* <th scope="col">Date</th> */}
                            <th scope="col">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.toDos.map((row) => {
                                return (
                                    <tr key={row.num}>
                                        <th scope="row">{row.num}</th>
                                        <td style={row.completed ? { textDecoration: "line-through"} : {}}>{row.todo}</td>
                                        <td><input type="checkbox" checked={row.completed} onChange={() => this.handleCheck(row.num)}/></td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ToDoList;