export interface ITea {
    name: string;
    type: string;
    temperature: number;
    brewingTime: number;
}

export type PartialTea = Partial<ITea>;

export function prepareTea(tea: PartialTea): void {
    if (!tea.name || !tea.brewingTime) {
        throw new Error("Error: Both name and brewingTime must be set.");
    }
    console.log(`Preparing ${tea.name} - will be ready in ${tea.brewingTime}`);
}

type TeaOmit = Omit<ITea, 'temperature'>;
type TeaPick = Pick<ITea, 'name' | 'brewingTime'>; 
type TeaRequired = Required<ITea>;
type TeaReadonly = Readonly<ITea>;

const teaOmitObj: TeaOmit = {
    name: "Earl Grey",
    type: "Black",
    brewingTime: 3
};

const teaPickObj: TeaPick = {
    name: "Green Tea",
    brewingTime: 2
};

const teaRequiredObj: TeaRequired = {
    name: "Chai",
    type: "Black",
    temperature: 95,
    brewingTime: 4
};

const teaReadonlyObj: TeaReadonly = {
    name: "Peppermint",
    type: "Herbal",
    temperature: 100,
    brewingTime: 5
};

type TeaType = "Green" | "Black" | "Rooibos" | "Peppermint" | "Oolong" | "Sencha" | "Chamomile";
type TeaTypeCaffeine = Exclude<TeaType, "Rooibos" | "Peppermint" | "Chamomile">;
type TeaTypeNoCaffeine = Exclude<TeaType, "Green" | "Black" | "Oolong" | "Sencha">;


class Tea implements ITea {
    name: string;
    type: TeaType;
    temperature: number;
    brewingTime: number;

    constructor(name: string, type: TeaType, temperature: number, brewingTime: number) {
        this.name = name;
        this.type = type;
        this.temperature = temperature;
        this.brewingTime = brewingTime;
    }
}

class CaffeineTea extends Tea {
    type: TeaTypeCaffeine;

    constructor(name: string, type: TeaTypeCaffeine, temperature: number, brewingTime: number) {
        super(name, type, temperature, brewingTime);
        this.type = type;
    }
}