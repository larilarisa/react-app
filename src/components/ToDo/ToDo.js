import React, { useState } from 'react'

const ToDo = (props) => {
    const { addNewToDoHandler } = props;

    const [newItemValue, setNewItemValue] = useState('');

    const handleInputValue = (event) => {
        setNewItemValue(event.target.value);
    }

    const addHandler = () => {
        addNewToDoHandler(newItemValue);
    }

    return (
        <div>
            <form>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        What needs to be done?</label>
                    <input type="text" onChange={(event) => handleInputValue(event)} id="new-todo-input" autoComplete="off" />
                    <button type="button" className="btn" disabled={newItemValue.length < 1} onClick={addHandler}>
                        Add</button>
                </h2>
            </form>
            <h2 id="list-heading">{props.items?.filter(ii => ii.done).length} task(s) remaining</h2>
            <button
                onClick={() => props.toggleItemsHandler()}>Show/Hide Items</button>

        </div>
    )
};

export default ToDo;