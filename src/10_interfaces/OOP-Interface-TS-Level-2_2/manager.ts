import { Employee } from './employee';
import { IEmployee } from './contracts/IEmployee';

export class Manager extends Employee {
  private subordinates: IEmployee[] = [];

  constructor(name: string, age: number, startDate: Date) {
    super(name, age, 'Manager', startDate);
  }

  addSubordinate(subordinate: IEmployee): void {
    this.subordinates.push(subordinate);
  }

  getSubordinates(): IEmployee[] {
    return this.subordinates;
  }
}

export default Manager;
