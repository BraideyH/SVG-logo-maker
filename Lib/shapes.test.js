const {Circle, Triangle, Square} = require("./shapes");

describe('Shape Tests', () => {
    describe('Circle Test', () => {
        it('creates an image of a blue circle', () => {
            const shapeChoice = new Circle();
            shapeChoice.setColor("blue")
            expect(shapeChoice.render()).toEqual (
                `<circle cx="150" cy="125" r="75" fill="blue"/>`
            );
        });
    });
    describe('Triangle Test', () => {
        it('creates an image of a red triangle', () => {
            const shapeChoice = new Triangle();
            shapeChoice.setColor("red")
            expect(shapeChoice.render()).toEqual (
                `<polygon points="150, 18 244, 182 56, 182" fill="red"/>`
            );
        });
    });
    describe('Square Test', () => {
        it('creates an image of a yellow square', () => {
            const shapeChoice = new Square();
            shapeChoice.setColor("yellow")
            expect(shapeChoice.render()).toEqual (
                `<rect x="85" y="55" width="125" height="125" fill="yellow"/>`
            );
        });
    });
});
