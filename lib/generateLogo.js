const fs = require('fs');

class Circle {
    constructor(color) {
        this.color = color;
    }

    draw(svg) {
        svg += `<circle cx="100" cy="70" r="50" fill="${this.color}" />`;
        return svg;
    }
}

class Triangle {
    constructor(color) {
        this.color = color;
    }

    draw(svg) {
        svg += `<polygon points="100,20 150,120 50,120" fill="${this.color}" />`;
        return svg;
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }

    draw(svg) {
        svg += `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
        return svg;
    }
}

function generateLogo(text, textColor, shapeType, shapeColor) {
    const width = 300;
    const height = 200;

    let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<text x="10" y="30" fill="${textColor}">${text}</text>`;

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

    svg = shape.draw(svg);
    svg += '</svg>';

    fs.writeFileSync('logo.svg', svg);
}

module.exports = generateLogo;