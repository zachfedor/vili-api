'use strict';

import mongoose from 'mongoose';
import ProjectSchema from './project';
import TimeSchema from './time';
import UserSchema from './user';


const Project = mongoose.model('Project', ProjectSchema);
const Time = mongoose.model('Time', TimeSchema);
const User = mongoose.model('User', UserSchema);


module.exports = { Project, Time, User };
