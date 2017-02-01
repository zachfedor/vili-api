'use strict';

import mongoose from 'mongoose';
import { db } from '../../config';


const TimeSchema = new mongoose.Schema({
  start: {
    type: Date,
    default: Date.now
  },

  end: Date,

  message: String,

  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  }
}, {
  ...db.schemaOptions
});


module.exports = TimeSchema;
