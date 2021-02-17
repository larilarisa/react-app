import React, { useState } from 'react';

const Item = (props) => {
    const renderContent = (isEdit) => {
        if (isEdit) {
            return (
                <div>
                    <input type="text" onChange={props.changed} value={props.name} />
                </div>
            )
        } else {
            return (
                <div>
                    <input id={props.id} type="checkbox" defaultChecked={props.done} />
                    <label className="todo-label" htmlFor={props.id}>
                        {props.name}
                    </label>
                </div>
            )
        }
    }

    const renderButtons = (editCallback, isEditing) => {
        return (

            <div className="btn-group">
                <button onClick={() => editCallback(!isEditing)} type="button" className="btn">
                    {isEditing?'Done':'Edit'}
                </button>
                <button type="button" className="btn btn__danger"
                    onClick={props.click}>
                    Delete
                </button>
            </div>
        )
    }

    const [isEditing, setIsEditing] = useState(false);

    return (
        
        <div>
            {renderContent(isEditing)}
            {renderButtons(setIsEditing, isEditing)}
            {/* <p>{props.children}</p> */}
        </div>
    );
}


export default Item;