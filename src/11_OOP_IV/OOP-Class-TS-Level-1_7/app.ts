import InstanceChecker from "./instance-checker";
import Unicorn from "./unicorn";

const newUnicorn = new Unicorn()

console.log(InstanceChecker.isUnicorn(Unicorn)) 
console.log(InstanceChecker.isUnicorn(newUnicorn)) 