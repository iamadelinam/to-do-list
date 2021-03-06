let initialTask = document.querySelector('.list')

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

let multiplier = 1 
taskSort.addEventListener('click', (event) => {
    let taskArray = []
    document.querySelectorAll('.input-field').forEach((element) => {
        taskArray.push(element)
    })
    taskArray.sort((a, b) => {
        let textA = a.firstElementChild.value
        let textB = b.firstElementChild.value
        let orderIndicator = textA.localeCompare(textB)
        return orderIndicator*multiplier
    })

    
    multiplier = multiplier*(-1)

    if (multiplier === -1) {
        taskSort.src = 'images/black-up.svg'
    } else if (multiplier === 1) {
        taskSort.src = 'images/black-down.svg'
    }

    let parentList = document.querySelector('.list')
    taskArray.forEach((element) => {
        element.remove()
        parentList.append(element)
    })
})

taskSort.addEventListener('mouseover', (event) => {
    if (multiplier === -1) {
        taskSort.src = 'images/black-up.svg'
    } else if (multiplier === 1) {
        taskSort.src = 'images/black-down.svg'
    }
})

taskSort.addEventListener('mouseout', (event) => {
    if (multiplier === -1) {
        taskSort.src = 'images/grey-up.svg'
    } else if (multiplier === 1) {
        taskSort.src = 'images/grey-down.svg'
    }
})