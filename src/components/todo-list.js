import React from 'react';
import ToDoListItem from './todo-list-item';

const ToDoList = () => {
    const items = ['Learn React.js', 'Build Awesome App'];
    return (
        <ul>
            <li><ToDoListItem /></li>
            <li><ToDoListItem /></li>
        </ul>
    )
}

export  default ToDoList;