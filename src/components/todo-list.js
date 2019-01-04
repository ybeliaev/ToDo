import React from 'react';
import ToDoListItem from './todo-list-item';

const ToDoList = ({todos}) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li className="list-group-item" key={ id }>
                <ToDoListItem { ...itemProps }/>
            </li>
        )
    })

    return (
        <ul className="list-group">
            { elements }
        </ul>

    )
}

export  default ToDoList;