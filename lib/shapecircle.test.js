const {Circle} = require('./shapecircle')

describe('Circle', () => {
    test('it creates a circle with matching parameters', () => {
        let testsvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text></svg>'
        let newsvg = new Circle ('red', 'ABC', 'white')
        expect(newsvg.render()).toEqual(testsvg)
    }) 
});

const {Square} = require('./shapecircle')

describe('Square', () => {
    test('it creates a square with matching parameters', () => {
        let testsvg = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="10" y="10" rx="0" ry="0" fill="purple" /><text x="112" y="125" font-size="60" text-anchor="middle" fill="green">NOP</text></svg>'
        let newsvg = new Square ('purple', 'NOP', 'green')
        expect(newsvg.render()).toEqual(testsvg)
    }) 
});

const {Triangle} = require('./shapecircle')

describe('Triangle', () => {
    test('it creates a circle with matching parameters', () => {
        let testsvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="125,10 250,190 0,190" fill="orange" /><text x="125" y="150" font-size="60" text-anchor="middle" fill="black">XYZ</text></svg>'
        let newsvg = new Triangle ('orange', 'XYZ', 'black')
        expect(newsvg.render()).toEqual(testsvg)
    }) 
});