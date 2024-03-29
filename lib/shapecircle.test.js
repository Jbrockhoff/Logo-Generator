//This tests the circle code
const {Circle} = require('./shapecircle')

describe('Circle', () => {
    test('it creates a circle with matching parameters', () => {
        let testsvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>'
        let newsvg = new Circle ('red', 'ABC', 'white')
        expect(newsvg.render()).toEqual(testsvg)
    }) 
});
