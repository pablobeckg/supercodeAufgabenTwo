type BasicColors = 'RED' | 'BLUE' | 'GREEN' | 'YELLOW' | 'BLACK' | 'WHITE';
type RealColors = Exclude<BasicColors, 'RED' | 'BLUE' | 'GREEN' | 'YELLOW'>;

export function showColors(param: RealColors) {
    console.log(param)
}

