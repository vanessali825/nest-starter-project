import { Controller, Body, Get, Param, Post, HttpCode, HttpStatus, Res, Patch, Delete, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService: CoffeesService) {
        
    }
    
    @Get()
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery;
        return this.coffeeService.findAll()
        // response.status(200).send('This action returns all the coffees') // this is similar to traditional res / req method in express, however using this loses compatibility with Nest features that depend on Nest standard response handling, e.g. interceptors and @httpcode
    }
    @Get(':id')
    // findOne(@Param('id') id:string) {
    findOne(@Param('id') id:number) {
        console.log(typeof id);
        return this.coffeeService.findOne('' + id);
        // return `This action returns #${id} coffees`;
    }

    @Post()
    // @HttpCode(HttpStatus.GONE) // set specific status code for entire response; useful when status code is static
    // create(@Body() body) {
    create(@Body() createCoffeeDto: CreateCoffeeDto) { // full type safety in our method using CreateCoffeeDto - so we know what shape we're supposed to receive
        // return body;
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    // update(@Param('id') id:string, @Body() body) {
    update(@Param('id') id:string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        // return `This action updates #${id} coffee`
        return this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id:string) {
        // return `This action removes #${id} coffee`
        return this.coffeeService.remove(id);
    }    
}
