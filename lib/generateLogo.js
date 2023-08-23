const fs = require('fs');
//const SVG = require('./svg');

class Circle {
    constructor(color) {
        this.color = color;
    }

    draw(canvas) {
        canvas.circle(100).move(100, 70).fill(this.color);
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }

    draw(canvas) {
        canvas.polygon('100, 20 150, 120 50, 120').fill(this.color);
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }

    draw(canvas) {
        canvas.rect(100, 100).move(100, 50).fill(this.color);
    }
}

function generateLogo(text, textColor, shapeType, shapeColor) {
    const width = 300;
    const height = 200;

    const canvas = SVG().size(width, height);

    canvas.text(text)
        .move(10, 30)
        .fill(textColor);

    let shape;
    switch (shapeType) {
        case 'circle':
            shape = new Circle(shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(shapeColor);
            break;
        case 'square':
            shape = new Square(shapeColor);
            break;
        default:
            getConsoleOutput.log("Invalid shape choice.");
    }

    shape.draw(canvas);

    fs.writeFileSync('logo.svg', canvas.svg());
}

module.exports = generateLogo;