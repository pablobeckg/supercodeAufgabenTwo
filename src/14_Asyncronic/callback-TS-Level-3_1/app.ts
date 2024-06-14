import { ContactType } from "./ContactType_enum";
import { Customer, processCustomerOrder } from "./Customer";

const customerEmail = new Customer("Alice", "123 Main St", "555-1234", "alice@example.com", ContactType.Email);
const customerSMS = new Customer("Bob", "456 Elm St", "555-5678", "", ContactType.SMS);
const customerLetter = new Customer("Charlie", "789 Oak St", "", "", ContactType.Letter);
const customerNone = new Customer("Dave", "101 Pine St", "", "", ContactType.None);


processCustomerOrder(customerEmail);
processCustomerOrder(customerSMS);
processCustomerOrder(customerLetter);
processCustomerOrder(customerNone);