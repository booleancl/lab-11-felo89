const btn = document.querySelector('[value="Get Ajax"]')
const responseElement = document.querySelector('pre')

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'data.json', true);
  xhr.send()

  xhr.onreadystatechange = () => {
    if (xhr.readyState < 4) {
      return; // not ready yet
    }
    if (xhr.status !== 200) {
      console.log('Error!'); // the HTTP status code is not OK
      return;
    }
    responseElement.textContent =xhr.responseText;
  }
})

