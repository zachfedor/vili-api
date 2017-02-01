'use strict';

import mongoose from 'mongoose';
import { db } from '../../config';
import ProjectSchema from './project';


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  projects: [ProjectSchema]
}, {
  ...db.schemaOptions
});


module.exports = UserSchema;
