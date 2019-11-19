export const initialState = {
    todos: [
        {
        item: 'Learn about reducers',
        completed: false, 
        id: 3892987589
    }]
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {...state, 
                todos: [...state.todos, {
                    id: action.payload.id,
                    item: action.payload.item,
                    completed: false
                }]
            }                
        default: return state;
    }
}
