let search = document.querySelector('#search')
let icon = document.querySelector('#icon')
let clear = document.querySelector('#clear')
let input = document.querySelector('#input')




icon.addEventListener('click', () => {
   search.classList.toggle('active')
})

clear.addEventListener('click', () => {
   input.value = ''
})



