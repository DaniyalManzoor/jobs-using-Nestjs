import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from './interfaces/jobs.interface';

@Injectable()
export class JobsService {
  constructor(@InjectModel('Job') private readonly jobModel: Model<Job>) {}

  async getJobs(): Promise<Job[]> {
    return await this.jobModel.find().sort('title');
  }

  async findJob(id: string): Promise<Job> {
    return await this.jobModel.findById(id).exec();
  }

  async createJob(job: Job): Promise<Job> {
    const product = new this.jobModel(job);
    return await product.save();
  }

  async updateJob(id: string, { title, salary }: Job): Promise<Job> {
    const product = await this.jobModel
      .findByIdAndUpdate(id, { title, salary }, { new: true })
      .exec();

    if (!product) throw new NotFoundException('Job not found.');

    return product;
  }

  async deleteJob(id: string): Promise<Job> {
    return await this.jobModel.findByIdAndRemove(id);
  }
}
