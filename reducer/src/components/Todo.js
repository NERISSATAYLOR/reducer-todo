import React from 'react';
const Todo = props => {
    const { id, toggleComplete, item, completed } = props;
    return (

        <li className={completed ? 'completed' : 'none'}
            onClick={() => toggleComplete(id)}>

            {item}
        </li>

    )

}
export default Todo;