const todos = [{
    text: 'Order Cat food',
    completed: false
}, {
    text: 'Clean Kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filters = {
    searchText: ''
}

const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    const incompleteTodos = filteredTodos.filter((todo) => {
        return !todo.completed
    })
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach((todo) => {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderTodos(todos, filters)

// Listen for todo text change
document.querySelector('#new-todo-text').addEventListener('input', e => {
    console.log(e.target.value)
})

document.querySelector('#search-todo').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})