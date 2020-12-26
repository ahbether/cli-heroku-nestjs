import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { AuthzModule } from './authz/authz.module';
import { ItemsController } from './items/items.controller';

@Module({
  imports: [
    AuthModule,
    //MongooseModule.forRoot('mongodb+srv://m001-student:1234@sandbox.dkszg.mongodb.net/sample_weatherdata?retryWrites=true&w=majority')
    MongooseModule.forRoot('mongodb://m001-student:1234@sandbox-shard-00-00.dkszg.mongodb.net:27017,sandbox-shard-00-01.dkszg.mongodb.net:27017,sandbox-shard-00-02.dkszg.mongodb.net:27017/gaming_online?replicaSet=atlas-10buee-shard-0&ssl=true&authSource=admin'),
    AuthzModule
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
