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

const incompleteTodos = todos.filter((todo) => {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach((todo) => {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.text
    document.querySelector('body').appendChild(todoEl)
})