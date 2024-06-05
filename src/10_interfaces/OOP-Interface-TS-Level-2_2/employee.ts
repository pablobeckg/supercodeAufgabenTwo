import { IEmployee } from './contracts/IEmployee';

export class Employee implements IEmployee {
  name: string;
  age: number;
  position: string;
  startDate: Date;

  constructor( name: string, age: number, position: string, startDate: Date) {
    this.name = name;
    this.age = age
    this.position = position;
    this.startDate = startDate;
  }

  getYearsOfService(): number {
    const now = new Date();
    const diff = now.getFullYear() - this.startDate.getFullYear();
    return diff;
  }
}
