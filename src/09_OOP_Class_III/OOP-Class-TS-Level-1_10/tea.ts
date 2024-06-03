import TeaType from "./Teatype";
import Beverage from "./models/beverage";

class Tea extends Beverage{
    flavor: TeaType;
  
    constructor(name: string, price: number, flavor: TeaType) {
        super(name, price);
        this.flavor = flavor;
    }
  }

  export default Tea;