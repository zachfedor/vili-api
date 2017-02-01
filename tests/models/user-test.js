'use strict';

import test from 'ava';
import mockgoose from 'mockgoose';
import mongoose from 'mongoose';

import { db } from '../../config';
import UserSchema from '../../app/models/user';


test.beforeEach(async t => {
  await mockgoose(mongoose);
  mongoose.Promise = global.Promise;
  await mongoose.connect(db.testURL);
  mongoose.model('User', UserSchema);
  t.context.mongoose = mongoose;
});


/*
 * User Model Tests
 */
test('required fields', t => {
  t.plan(4);
  const User = t.context.mongoose.model('User');
  let error;

  const invalidUser = new User();
  error = invalidUser.validateSync();
  t.is(error.errors.name.message, 'Path `name` is required.');
  t.is(error.errors.email.message, 'Path `email` is required.');
  t.is(error.errors.password.message, 'Path `password` is required.');

  const validUser = new User({
    name: 'valid',
    email: 'valid@mail.co',
    password: 'validpass'
  });
  error = validUser.validateSync();
  t.is(error, undefined);
});


test('insert', async t => {
  t.plan(1);
  const User = t.context.mongoose.model('User');
  await User({
    name: 'first',
    email: 'one@mail.co',
    password: 'first1'
  }).save();

  const users = User.find({});
  t.is(users.length, 1);
});
