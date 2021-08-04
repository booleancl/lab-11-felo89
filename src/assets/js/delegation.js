const customUl = document.createElement('ul');


for (var i = 1; i <= 10; i++) {
  const newElement = document.createElement('li');
  newElement.textContent = "This is line " + i;
  customUl.appendChild(newElement);
}

document.body.appendChild(customUl)

customUl.addEventListener('click', (event) => {
  if(event.target.nodeName === 'LI'){
    console.log('Responding:', event.target.textContent)
  }
});



