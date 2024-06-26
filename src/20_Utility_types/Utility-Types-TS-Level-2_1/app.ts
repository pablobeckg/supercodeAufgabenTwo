import { ITea, PartialTea, prepareTea } from "./tea";

const fullTea: ITea = {
    name: "Black Tea",
    type: "Black",
    temperature: 100,
    brewingTime: 5
};

const partialTea: PartialTea = {
    name: "Green Tea",
    brewingTime: 3
};

prepareTea(fullTea);
prepareTea(partialTea); 