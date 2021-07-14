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

// taskSort.addEventListener('mouseover', (event) => {
//     taskSort.src = 'images/black-down.svg'
// })
// taskSort.addEventListener('mouseout', (event) => {
//     taskSort.src = 'images/grey-down.svg'
// })
// taskSort.addEventListener('click', (event) => {
//     taskSort.src = 'images/black-up.svg'
// })

// if (taskSort.src = 'images/grey-down.svg') {
//     taskSort.addEventListener('mouseover', (event) => {
//         taskSort.src = 'images/black-down.svg'
//     })
//     taskSort.addEventListener('mouseout', (event) => {
//         taskSort.src = 'images/grey-down.svg'
//     })
// } else if (taskSort.src = 'images/black-up.svg') {
//     taskSort.addEventListener('mouseout', (event) => {
//         taskSort.src = 'images/grey-up.svg'
//     })
// }





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

    if (multiplier === -1) {
        taskSort.src = 'images/black-up.svg'
    } else if (multiplier === 1) {
        taskSort.src = 'images/black-down.svg'
    }

    multiplier = multiplier*(-1)
    let parentList = document.querySelector('.list')
    taskArray.forEach((element) => {
        element.remove()
        parentList.append(element)
    })
})

// let taskSortReversed = document.querySelector('.sort-button')

// taskSortReversed.addEventListener('click', (event) => {
//     let taskArray = []
//     document.querySelectorAll('.input-field').forEach((element) => {
//         taskArray.unshift(element)
//     })
//     taskArray.sort((a, b) => {
//         let textA = a.firstElementChild.value
//         let textB = b.firstElementChild.value
//         let orderIndicatorReversed = textB.localeCompare(textA)
//         return orderIndicatorReversed
//     })
//     let parentList = document.querySelector('.list')
//     let theFirstChild = parentList.firstChild
//     taskArray.forEach((element) => {
//         element.remove()
//         parentList.insertBefore(element, theFirstChild)
//     })
//     taskSort.src = 'images/black-up.svg'
// })

