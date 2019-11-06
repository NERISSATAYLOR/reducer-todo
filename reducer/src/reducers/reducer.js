import React from 'react';

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                todos: [...state.todos, { item: action.payload, id: Date.now(), completed: false }],
            };
        case "TOGGLE_COMPLETE":
            return {
                ...state,
                todos: state.todos.map((todo) => (todo.id == action.id ? { ...todo, completed: !todo.completed } : todo)),
            };
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.completed),
            }
        default:
            return state;
    }
};

export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }, {
            item: 'Learn about Redux',
            completed: false,
            id: 3892987590
        }]
}