let taskAdd = document.querySelector('.add-button')
taskAdd.addEventListener('click', (event) => {
    let newTask = document.querySelector('.input-field').cloneNode(true)

    newTask.firstElementChild.value = ''

    let parentElement = document.querySelector('.list')
    parentElement.append(newTask)

    newTask.lastElementChild.addEventListener('click', (event) => {
        newTask.remove()
    })

    newTask.lastElementChild.addEventListener('mouseover', (event) => {
        newTask.lastElementChild.src = 'images/delete-active.svg'
    })
    newTask.lastElementChild.addEventListener('mouseout', (event) => {
        newTask.lastElementChild.src = 'images/delete-rest.svg'
    })
})


let taskDelete = document.querySelector('.delete-button')

taskDelete.addEventListener('click', (event) => {
    let doneTask = document.querySelector('.input-field')
    doneTask.remove()
})

taskDelete.addEventListener('mouseover', (event) => {
    taskDelete.src = 'images/delete-active.svg'
})

taskDelete.addEventListener('mouseout', (event) => {
    taskDelete.src = 'images/delete-rest.svg'
})


let taskSort = document.querySelector('.sort-button')

function changeSortButton(taskSort) {
    if (taskSort.src = 'images/grey-down.svg') {
        taskSort.addEventListener('mouseover', (event) => {
            taskSort.src = 'images/black-down.svg'
        })
    }
}
