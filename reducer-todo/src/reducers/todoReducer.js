export const initialState = {
    todo: [
        {
            id: 1,
            item: 'finish app',
            completed: false,
        },
        {
            id: 2,
            item: 'learn to juggle',
            completed: true,
        },
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3
        }
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            };
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                todo: state.todo.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    } else {
                        return item;
                    }
                })
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todo: state.todo.filter(item => !item.completed)
            };
        default:
            return state;
    }
};