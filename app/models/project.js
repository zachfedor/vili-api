'use strict';

import mongoose from 'mongoose';
import { db } from '../../config';


const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  ...db.schemaOptions
});


module.exports = ProjectSchema;
