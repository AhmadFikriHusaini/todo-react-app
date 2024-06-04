const todos = [
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
    return id
}

export { getTodos, setTodoStatus }