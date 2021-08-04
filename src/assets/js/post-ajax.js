const form = document.querySelector('form')

const serializeJSON = (form) => {
  const formData = new FormData(form);
  const pairs = {};
  for (const [name, value] of formData) {
    pairs[name] = value;
  }
  return JSON.stringify(pairs);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'form', true);
  xhr.send(serializeJSON(form))

  xhr.onreadystatechange = () => {
    if (xhr.readyState < 4) {
      return; // not ready yet
    }
    if (xhr.status !== 200) {
      console.log('Error!'); // the HTTP status code is not OK
      return;
    }
    console.log(xhr.responseText);
  }
})

