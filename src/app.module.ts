import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://opn:vvooNAtq0Q3p9tQc@cluster0.uhdos.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    PatientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
