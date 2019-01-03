import React from 'react';
import ToDoListItem from './todo-list-item';

const ToDoList = () => {
    const items = ['Learn React.js', 'Build Awesome App'];
    return (
        <ul>
            <li><ToDoListItem label='Drink Coffee' /></li>
            <li><ToDoListItem
                label='Building React App'
                important
            /></li>
        </ul>
    )
}

export  default ToDoList;