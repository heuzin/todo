import { getFilters, setFilters } from './filters'

console.log(getFilters())
setFilters({
    searchText: 'adsda',
    hideCompleted: true
})
console.log(getFilters())