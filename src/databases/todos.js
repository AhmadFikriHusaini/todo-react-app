let todos = [
    {
        id: 1,
        title: 'Finish Progate React Course',
        completed: true,
    },
    {
        id: 2,
        title: 'Have lunch with Guru Domba',
        completed: false,
    },
    {
        id: 3,
        title: 'Study React with Ninja Ken',
        completed: false,
    },
]

const getTodos = () => {
    return todos
}

const setTodoStatus = (id) => {
    return todos = todos.map((todo) => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
    })
}

const deleteTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id)
    return todos
}

export { getTodos, setTodoStatus, deleteTodo }