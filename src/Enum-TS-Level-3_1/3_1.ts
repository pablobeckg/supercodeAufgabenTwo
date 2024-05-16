

enum BasicShape {
    Square,
    Circle,
    Triangle,
    Rectangle
};

enum ExtendedShape {
    Ellipse,
    Rhombus,
};


const group = [Object.values(BasicShape), Object.values(ExtendedShape)];

console.log(group);