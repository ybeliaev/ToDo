import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {
    const items = ['Learn React.js', 'Build Awesome App'];
    return (
        <ul>
            <li>{ items[0] }</li>
            <li>{ items[1] }</li>
        </ul>
    )
}
const AppHeader = () => {
    return <h1>ToDO List</h1>
}
const SearchPanel = () => {
    const searchStyle = {
        fontSize: '20px'
    }

    return <input
        style={ searchStyle }
        placeholder='search'
    />
}
const App = () => {

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <ToDoList />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));
