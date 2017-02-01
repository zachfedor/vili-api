'use strict';

import test from 'ava';
import mockgoose from 'mockgoose';
import mongoose from 'mongoose';

import { db } from '../../config';
import ProjectSchema from '../../app/models/project';


test.beforeEach(async t => {
  await mockgoose(mongoose);

  mongoose.Promise = global.Promise;

  await mongoose.connect(db.testURL);

  mongoose.model('Project', ProjectSchema);

  t.context.mongoose = mongoose;
});


/*
 * Project Tests
 */
test('project name is required', t => {
  t.plan(2);
  const Project = t.context.mongoose.model('Project');
  let error;

  const invalidProject = new Project();
  error = invalidProject.validateSync();
  t.is(error.errors.name.message, 'Path `name` is required.');

  const validProject = new Project({ name: 'valid' });
  error = validProject.validateSync();
  t.is(error, undefined);
});

