// Root module (i.e. central hub of application). Used to organize application. Each module can import other modules and export its own providers (like services). 

// App Module listens to App Controller & App Service
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [CoffeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
