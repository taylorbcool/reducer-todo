import React from 'react';

import TodoItem from './TodoItem';

function TodoList(props) {
    return (
        <div className='todo-list'>
            {props.todo.map(item => (
                <TodoItem
                    {...props}
                    key={item.id}                    
                    item={item}                    
                />
            ))}
        </div>
    );
};

export default TodoList;