import Circle from "./models/Circle";

const circle1 = new Circle('Circle');
const circle2 = new Circle('Circle');
const circle3 = new Circle('Circle');


circle1.draw()
circle2.draw()
circle3.draw()

circle1.color = 'red'
circle2.radius = 20

console.log(circle1)
console.log(circle2)
console.log(circle3)