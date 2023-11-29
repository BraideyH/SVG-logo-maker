class shapesArray {
    constructor () {
        this.shapeColor = "";
    }
    setColor(colorChoice) {
        this.shapeColor = colorChoice;
    }
}

class Circle extends shapesArray {
    render() {
        return `<circle cx="150" cy="125" r="75" fill="${this.shapeColor}"/>`
    }
}

class Triangle extends shapesArray {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    }
}

class Square extends shapesArray {
    render() {
        return `<rect x="85" y="55" width="125" height="125" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Circle, Triangle, Square};