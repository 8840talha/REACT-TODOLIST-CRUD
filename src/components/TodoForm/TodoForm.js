import React from 'react'

import './TodoForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoForm = (props) => {
    return (
        <div>
            <form className="TodoForm" onSubmit={props.addTodo}>

                <span>
                    <input type="text" placeholder="text" value={props.value} onChange={props.handleInput} />
                    <button type="submit"><FontAwesomeIcon icon="plus" /></button>
                </span>
            </form>


        </div>
    )
}

export default TodoForm;