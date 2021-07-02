import * as mongoose from 'mongoose';

export const jobSchema = new mongoose.Schema({
  title: String,
  salary: Number,
});
