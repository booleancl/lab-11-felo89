const fs = require('fs')
const path = require('path')
const $ = require('jquery')
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

// Start with a fresh page on each test
document.documentElement.innerHTML = html.toString();

console.log = jest.fn();

const xhrMock = {
  open             : jest.fn(),
  send             : jest.fn(),
  setRequestHeader : jest.fn(),
  readyState       : 4,
  status           : 200,
  responseText     : "Success"
}

const formObjectFixture = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  message: ''
}

window.XMLHttpRequest = jest.fn(() => xhrMock)

test("Working with POST AJAX", () => {
  const script = require('../src/assets/js/post-ajax')
  expect(() => { $('[type="submit"]').click()}).not.toThrow()    
  xhrMock.onreadystatechange()
  expect(xhrMock.open).toHaveBeenCalledWith('POST', 'form', true)
  expect(console.log).toHaveBeenCalledWith("Success");
  expect(xhrMock.send).toHaveBeenCalledWith(JSON.stringify(formObjectFixture))
})