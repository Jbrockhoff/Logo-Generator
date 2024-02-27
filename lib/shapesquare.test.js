//this tests the square code
const {Square} = require('./shapesquare')

describe('Square', () => {
    test('it creates a square with matching parameters', () => {
        let testsvg = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="10" y="10" rx="0" ry="0" fill="purple" /><text x="112" y="125" font-size="60" text-anchor="middle" fill="green">NOP</text></svg>'
        let newsvg = new Square ('purple', 'NOP', 'green')
        expect(newsvg.render()).toEqual(testsvg)
    }) 
});