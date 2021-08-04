const fs = require('fs')
const path = require('path')
const $ = require('jquery')
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

// Start with a fresh page on each test
beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
  console.log = jest.fn();
});


describe('Events', () => {

  it("Inline events (don't use them but you'll see them)", () => {
    $("[data-test=inline]").click()
    expect(console.log).toHaveBeenCalledWith("ouch!");
  })

  it("Using onclick property of DOM elements", () => {
    const script = require('../src/assets/js/btn-handler')
    $("[data-test=script]").click()
    expect(console.log).toHaveBeenCalledWith("ouch!");
  })

  it("Using addEventListener", () => {
    const script = require('../src/assets/js/click-listener')
    $("[data-test=script]").click()
    
    expect(console.log).toHaveBeenNthCalledWith(1,"ouch!");
    expect(console.log).toHaveBeenNthCalledWith(2,"ouch2!");
    expect(console.log).toHaveBeenNthCalledWith(3,"ouch3!");
  })

  it("Understanding bubbling", () => {
    const script = require('../src/assets/js/bubbling')
    $("[data-test=script]").click()
    expect(console.log).toHaveBeenNthCalledWith(1,"ouch!");
    expect(console.log).not.toHaveBeenNthCalledWith(2,"ouch from the body!");
  })
  
  it("Prevent default", () => {
    const script = require('../src/assets/js/prevent-default')
    expect(() => $('[type="submit"]').click()).not.toThrow()    
    expect(console.log).toHaveBeenNthCalledWith(1,"No no no oooo");
  })

  it("Event delegation", () => {
    const script = require('../src/assets/js/delegation')
    $("ul li:nth-child(2)").click()
    expect(console.log).toHaveBeenCalledWith("Responding:", "This is line 2");
  })
})

