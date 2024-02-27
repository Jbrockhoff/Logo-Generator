//This generates the square shape when selected by a user
class Square {
    constructor(shapeColor, text, textColor) {
      this.shapeColor = shapeColor;
      this.text = text;
      this.textColor = textColor;
    }
    render() {
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="10" y="10" rx="0" ry="0" fill="${this.shapeColor}" /><text x="112" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  };

  module.exports = { Square };