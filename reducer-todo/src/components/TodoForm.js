import React from 'react';

function TodoForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input
                type='text'
                name='newItemText'
                value={props.newItemText}
                onChange={props.handleChanges}
            />
            <button type='submit'>Add Item</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;