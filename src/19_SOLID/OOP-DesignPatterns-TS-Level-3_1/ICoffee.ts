interface ICoffee {
    name: string;
    size: string;
    brew(): void;
    getPrice(): number;
}
export default ICoffee