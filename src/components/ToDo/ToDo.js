import React from 'react'

const ToDo = (props) => {
    return (
        <div>
            <form>
                <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                        What needs to be done?</label>
                    <input type="text" id="new-todo-input" className="input input__lg" name="text" autoComplete="off" />
                    <button type="submit" className="btn btn__primary btn__lg">
                        Add</button>
                </h2>
            </form>
            <h2 id="list-heading">{props.items?.filter(ii => ii.done).length} task(s) remaining</h2>
            <button
                onClick={props.toggleItemsHandler}>Show/Hide Items</button>

        </div>
    )
};

export default ToDo;