import Customer from "./models/Customer";

const newCustumer = new Customer("Henriettenstr. 4", "Düsseldorf");

newCustumer.name = "Pablo";
newCustumer.email = "pablo@hola.com";
newCustumer.postalCode = 40225;

console.log(newCustumer);
