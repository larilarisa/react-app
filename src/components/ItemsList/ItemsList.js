import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem'

const toDoItems = (props) => props.items?.map((item, index) => {
    return <ToDoItem
        name={item.name}
        checked={item.done}
        id={item.id}
        key={item.id}
        click={() => props.click(item.id)}
        changed={(event) => props.changed(event, item.id)}></ToDoItem>
});

export default toDoItems