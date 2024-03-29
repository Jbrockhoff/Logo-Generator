//This generates the triangle shape when selected by a user
class Triangle {
    constructor(shapeColor, text, textColor) {
      this.shapeColor = shapeColor;
      this.text = text;
      this.textColor = textColor;
    }
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="125,10 250,190 0,190" fill="${this.shapeColor}" /><text x="125" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  };

  module.exports = { Triangle };