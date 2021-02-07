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

// Remove a todo function
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
}

// Generate the DOM structure for a todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed 
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

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