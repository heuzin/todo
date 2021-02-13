import uuidv4 from 'uuid/v4'

let todos = []

// Fetch existing todos from localStorage
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
}

// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos()
}

loadTodos()

export { getTodos, saveTodos, createTodo }