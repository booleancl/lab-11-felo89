const button = document.querySelector("[data-test='script']")

document.body.addEventListener('click', () => console.log('ouch from the body!'))

button.addEventListener('click', (event) => { 
  console.log('ouch!')
  event.stopPropagation();
  }, false)
