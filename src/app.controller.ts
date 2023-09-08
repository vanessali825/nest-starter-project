// App's main controller file. Handles incoming HTTP req's & res's.

// App Controller listens to App Service.
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDataDto } from './app.dto'; //

@Controller('data') // brackets next to decorators from hereon represents api path
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  create(@Body() createDataDto: CreateDataDto) {
    return this.appService.create(createDataDto);
  }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.appService.findOne(id);
  }
}
