// App's main service file. Contains biz logic & can be used by controllers.
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }

  private readonly data = [];
  
  create(dataItem) { //adds a new item to the data array
    this.data.push(dataItem);
  }

  findAll() { // returns all items in the data array
    return this.data;
  }

  findOne(id) { //finds and returns an item that has the provided id
    return this.data.find(item => item.id === id);
  }  
}
