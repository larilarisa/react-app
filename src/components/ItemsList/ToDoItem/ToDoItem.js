import React, { useState } from 'react';

const ToDoItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const { name, id, checked, changed, click } = props;
    const [itemName, setItemName] = useState(name);
    const test = (event, id) => {
        setItemName(event.target.value);
        changed(event.target.value, id)
        console.log(event.target.value)
    };

    const renderContent = (isEdit) => {
        if (isEdit) {
            return (
                <div className=''>
                    <input className="form-control" type="text" onChange={(event) => { test(event, id) }} value={itemName} />
                </div>
            )
        } else {
            return (
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id={id} defaultChecked={checked} />
                    <label className="form-check-label todo-label" htmlFor={id}>
                        {itemName}
                    </label>
                </div>
            )
        }
    }

    const renderButtons = (editCallback, isEditing) => {
        return (
            <div className="btn-group">
                <button className='btn btn-outline-primary' variant="outline-primary" onClick={() => editCallback(!isEditing)}>
                    {isEditing ? 'Done' : 'Edit'}
                </button>
                <button className='btn btn-outline-primary' variant="outline-primary"
                    onClick={() => click(id)}>
                    Delete
                </button>
            </div>
        )
    }

    return (

        <div>
            {renderContent(isEditing)}
            {renderButtons(setIsEditing, isEditing)}
            {/* <p>{children}</p> */}
        </div>
    );
}


export default ToDoItem;