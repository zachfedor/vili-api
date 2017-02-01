'use strict';

import express from 'express';
import mongoose from 'mongoose';
import { db } from '../config';
import projectsRoute from './routes/projects';


/*
 * Setup
 */
const app = express();
mongoose.connect(db.url);


/*
 * Home Route
 */
app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});


/*
 * Routes
 */
app.use('/projects', projectsRoute);
//app.use('/times', time);
//app.use('/users', user);


/*
 * Export
 */
module.exports = app;

