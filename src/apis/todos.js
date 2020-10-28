import api from './api';

export const getTodos = () => {
    return api.get('todos')
}

export const addTodo = text => api.post('/todos', {
    text
})