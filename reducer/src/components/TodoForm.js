import React, { useState } from 'react';

const TodoForm = (props) => {
    const [addTodo, setAddTodo] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(addTodo)
        setAddTodo('');
    }
    const handleClear = (e) => {
        e.preventDefault();
        props.clearCompleted();

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    onChange={(e) => setAddTodo(e.target.value)}
                    value={addTodo}
                />
                <button type="submit" className="btn btn-success">+</button>
                <button onClick={handleClear}>Clear Completed</button>
            </form>

        </div>
    )
}
export default TodoForm;