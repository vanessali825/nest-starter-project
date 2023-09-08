// Use this class as an expected input object shape for our coffee controller's POST request
// Will help us do things such as make sure request payload has everything we need before running further code

import { IsString } from "class-validator";

export class CreateCoffeeDto {
    @IsString() // requires that payload is string
    readonly name: string;
    
    @IsString()
    readonly brand: string;
    
    @IsString({ each: true }) // each will make sure that expected value is an array of strings
    readonly flavors: string[]; 
}