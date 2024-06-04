export interface IEmployee {
    name: string;
    age: number;
    position: string;
    startDate: Date;
    getYearsOfService(): number;
  }
  