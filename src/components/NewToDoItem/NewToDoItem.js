import React, { useState } from 'react'

const NewToDoItem = (props) => {
    const { addNewToDoHandler } = props;

    const [newItemValue, setNewItemValue] = useState('');

    const handleInputValue = (event) => {
        setNewItemValue(event.target.value);
    }

    const addHandler = () => {
        addNewToDoHandler(newItemValue);
    }

    // let isError = true;
    // let buttonClasses = isError ? 'btn btn-warning' : 'btn btn-primary';
    return (
        <div>
            <form>
                <p htmlFor="new-todo-input">What needs to be done?</p>
                <div className="new-todo-item">
                    <input type="text" className="mr-2 form-control" onChange={(event) => handleInputValue(event)} id="new-todo-input" autoComplete="off" />
                    <button type="button" className='btn btn-primary' disabled={newItemValue.length < 1} onClick={addHandler}>
                        Add</button>
                </div>
            </form>
        </div>
    )
};

export default NewToDoItem;