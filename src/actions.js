export const addTodo = (todo) =>  {
    return {type: "ADD_TO_DO", payload: todo}
}

export const deleteToDo = (todoId) => {
    return {type: "DELETE_TODO", payload: todoId}
}