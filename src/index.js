import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo } from './todos'

renderTodos()

document.querySelector('#search-todo').addEventListener('input', e => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit', e => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()
    
    if (text.length > 0) {
        createTodo(text)
        renderTodos()
        e.target.elements.text.value = ''
    }

})

document.querySelector('#hide-completed').addEventListener('change', e => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})