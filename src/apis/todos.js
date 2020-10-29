import api from './api';


export const getTodos = () => {
    return api.get('todos')
}

export const addTodo = todoItem => api.post('/todos', {
    todoItem
})

export const deleteTodo = id => api.delete(`/todos/${id}`)

export const toggleTodo = ({id, done}) => api.put(`/todos/${id}`, {
    done: !done
})