import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { jobSchema } from './schema/jobs.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Job', schema: jobSchema }])],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
