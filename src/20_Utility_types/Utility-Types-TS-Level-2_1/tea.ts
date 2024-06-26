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
