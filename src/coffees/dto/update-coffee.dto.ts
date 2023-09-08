import { PartialType } from "@nestjs/mapped-types"; // returns type of class we passed in here with all properties set to optional, inherits all validation rules applied via decorators, and adds a single additional validation rule to eah field
import { CreateCoffeeDto } from "./create-coffee.dto";

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) { // can use this instead of manually adding variables below
    // readonly name?: string;
    // readonly brand?: string;
    // readonly flavors?: string[];
}
