const generateLogo = require('./generateLogo');
const fs = require('fs');

test('generates a logo with valid input', () => {
    const text = 'SVG';
    const textColor = 'white';
    const shape = 'circle';
    const shapeColor = 'green';

    generateLogo(text, textColor, shape, shapeColor);

    const svgContent = fs.readFileSync('logo.svg', 'utf-8');
    expect(svgContent).toContain(text);
    expect(svgContent).toContain(textColor);
    expect(svgContent).toContain(shape);
    expect(svgContent).toContain(shapeColor);
});