const fs = require('fs')
const path = require('path')
const $ = require('jquery')
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');
const responseText = JSON.stringify(require('../src/data.json'))

// Start with a fresh page on each test
document.documentElement.innerHTML = html.toString();

console.log = jest.fn();

const xhrMock = {
  open             : jest.fn(),
  send             : jest.fn(),
  setRequestHeader : jest.fn(),
  readyState       : 4,
  status           : 200,
  responseText
}

window.XMLHttpRequest = jest.fn(() => xhrMock)

test("Working with GET AJAX", () => {
  const script = require('../src/assets/js/get-ajax')
  const responseElement = $('pre')
  expect(() => { $('[value="Get Ajax"]').click()}).not.toThrow()    
  xhrMock.onreadystatechange()
  expect(xhrMock.open).toHaveBeenCalledWith('GET', 'data.json', true)
  expect(responseElement.text()).toEqual(responseText);
  expect(xhrMock.send).toHaveBeenCalled()
})