document.addEventListener('DOMContentLoaded', () => {
    const newDrinkForm = document.querySelector('#new-drink-form')
    newDrinkForm.addEventListener('submit', handleNewDrinkSubmit)


})

const handleNewDrinkSubmit = function(evt) {
    evt.preventDefault()

    const drinkListItem = createDrinkListItem(evt.target)
    const drinkList = document.querySelector('#drink-list')
    drinkList.appendChild(drinkListItem)
    evt.target.reset()
}

const createDrinkListItem = function(form) {
    const drinkListItem = document.createElement('li')
    drinkListItem.classList.add('drink-list-item')

    const name = document.createElement('h3')
    name.textContent = form.name.value
    drinkListItem.appendChild(name)

    const carbonated = document.createElement('p')
    carbonated.textContent = `Carbonated: ${form.carbonated.value}`
    drinkListItem.appendChild(carbonated)

    const alcohol = document.createElement('p')
    alcohol.textContent = `Contains alcohol: ${form.alcohol.value}`
    drinkListItem.appendChild(alcohol)

    const caffeine = document.createElement('p')
    caffeine.textContent = `Caffeine level: ${form.caffeine.value}`
    drinkListItem.appendChild(caffeine)

    return drinkListItem
}



