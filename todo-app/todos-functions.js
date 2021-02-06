// check for todos in localStorage
const getSavedNotes = () => {
    // check local storage
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    }else {
        return []
    }
}

// save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Generate the DOM structure for a todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.text

    return todoEl
}

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`

    return summary
}

// render application todos based on filters
const renderTodos = (todos, filters) => {
    let filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos = filteredTodos.filter((todo) => {
        if (filters.hideCompleted) {
            return !todo.completed
        } else {
            return true
        }
    })

    document.querySelector('#todos').innerHTML = ''

    const incompleteTodos = filteredTodos.filter((todo) => {
        return !todo.completed
    })
    
    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach((todo) => {
        const todoEl = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(todoEl)
    })
}