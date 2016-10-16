import app from '../app';
import test from 'ava';
import express from 'express';
import request from 'supertest-as-promised';


test('foo', t => {
  t.pass();
});

test('bar', async t => {
  const bar = Promise.resolve('bar');

  t.is(await bar, 'bar');
});

test('get projects:success', async t => {
  t.plan(2);

  const res = await request(app)
    .get('/projects');

  t.is(res.status, 200);
  t.is(res.body.data.length, 2);
});
