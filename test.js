var test = require('tape')
var plott = require('./index.js')

test('plott', function(t){
  t.ok(plott, 'Initialized plott successfully')

  // check that each of the sub modules initializes as a function
  Object.keys(plott).forEach(function(module){
    t.ok(plott[module], module)
    t.equal(typeof plott[module], 'function', module + ' is a function')
  })

  t.end()
})
