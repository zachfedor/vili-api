import test from 'ava';
import express from 'express';
import mockgoose from 'mockgoose';
import mongoose from 'mongoose';
import request from 'supertest-as-promised';

import app from '../../app';
import { db } from '../../config';
import { Project } from '../../app/models';


test('get projects:success', async t => {
  t.plan(2);

  const res = await request(app)
    .get('/projects');

  t.is(res.status, 200);
  t.is(res.body.data.length, 2);
});
