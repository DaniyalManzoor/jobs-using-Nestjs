import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobDTO } from './dtos/jobs.dto';
import { Job } from './interfaces/jobs.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobService: JobsService) {}

  @Get()
  async getJobs(): Promise<Job[]> {
    return await this.jobService.getJobs();
  }

  @Post()
  async createJob(@Body() job: JobDTO): Promise<Job> {
    return await this.jobService.createJob(job);
  }
  @Put(':id')
  async updateJob(@Param('id') id: string, @Body() job: JobDTO): Promise<Job> {
    return await this.jobService.updateJob(id, job);
  }

  @Delete(':id')
  async deleteJob(@Param('id') id: string) {
    return await this.jobService.deleteJob(id);
  }

  @Get(':id')
  async findJob(@Param('id') id: string): Promise<Job> {
    return await this.jobService.findJob(id);
  }
}
