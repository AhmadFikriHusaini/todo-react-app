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
    todos = todos.map((todo) => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
    })
    return todos
}

const deleteTodo = (id) => {
    todos = todos.filter((todo) => todo.id !== id)
    return todos
}

const addTodo = (title) => {
    todos = todos.concat({
        id: todos.length + 1,
        title: title,
        completed: false
    })

    return todos
}

export { getTodos, setTodoStatus, deleteTodo, addTodo }