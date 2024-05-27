import SpecialColor from "./special-color";

function randomColorGenerator(): string {
    const colors = Object.values(SpecialColor);
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export default randomColorGenerator;
