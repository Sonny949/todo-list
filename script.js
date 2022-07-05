

let modal = document.querySelector('.modal')
    button = document.querySelector('#todo-button')
    closeModal = document.querySelector('.close')
    form = document.querySelector('#newTask')
    data = new FormData(form)
    todosUl = document.querySelector('.todos-ul')
    save = document.querySelector('#submit')

button.addEventListener('click', function() {
    // modal display is set to none, so modal will now display
    modal.style.display = 'block'
})

closeModal.addEventListener('click', function() {
    modal.style.display = 'none'
})

save.addEventListener('click', function() {
    modal.style.display = 'none'
})

window.addEventListener('click', function(e) {
    // modal is set to 100% of the screen, so if you click outside the box, it will close the modal
    if (e.target == modal) {
        modal.style.display = 'none'
    }
})

document.addEventListener('submit', function(event) {
    // prevent form from subitting to server
    event.preventDefault
    form = document.querySelector('#newTask')
    data = new FormData(form)
    localStorage.setItem("task", JSON.stringify(data))
    todosUl.innerHTML += `<li>hello</li>`


})

