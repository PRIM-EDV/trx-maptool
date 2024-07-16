import { join } from 'path';
import { Global, Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiModule } from './api/api.module';
import { AppGateway } from './app.gateway';
import { LoggingModule } from './infrastructure/logging/logging.module';
import { CoreModule } from './core/core.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

const MONGO_DB_HOST = process.env.MONGO_DB_HOST ? process.env.MONGO_DB_HOST : 'localhost'

@Global()
@Module({
  imports: [
    ApiModule,
    CoreModule,
    LoggingModule,
    EventEmitterModule.forRoot(),
    MongooseModule.forRoot(`mongodb://database/prim`),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppGateway, AppService],
  exports: [AppGateway]
})
export class AppModule {

}
