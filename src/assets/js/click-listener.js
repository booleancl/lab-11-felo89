// ¿What is that third param?

const button = document.querySelector("[data-test='script']")

button.addEventListener('click', () => console.log('ouch!'), false)
button.addEventListener('click', () => console.log('ouch2!'), false)

document.body.addEventListener('click', () => console.log('ouch3!'), false)