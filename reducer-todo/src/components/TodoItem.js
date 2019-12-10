import React from 'react';

function TodoItem(props) {
    return (
        <div
            className={props.item.completed ? 'completed' : ''}
            onClick={() => props.toggleComplete(props.item.id)}
        >
            <p>{props.item.item}</p>
        </div>
    );
};

export default TodoItem;