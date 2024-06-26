export enum SmoothieSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

export interface ISmoothie {
    name: string;
    ingredients: string[];
    size: SmoothieSize;
    price: number;
}

export function customizeSmoothie(basicSmoothie: ISmoothie, customizedSmoothie: Partial<ISmoothie>): ISmoothie {
    return {
        ...basicSmoothie,
        ...customizedSmoothie
    };
}