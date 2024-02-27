//This tests the triangle code
const {Triangle} = require('./shapecircle')

describe('Triangle', () => {
    test('it creates a circle with matching parameters', () => {
        let testsvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="125,10 250,190 0,190" fill="orange" /><text x="125" y="150" font-size="60" text-anchor="middle" fill="black">XYZ</text></svg>'
        let newsvg = new Triangle ('orange', 'XYZ', 'black')
        expect(newsvg.render()).toEqual(testsvg)
    }) 
});