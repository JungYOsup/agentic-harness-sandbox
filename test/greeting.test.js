import assert from 'node:assert/strict';
import test from 'node:test';
import { greet } from '../src/greeting.js';

test('이름이 있으면 이름을 넣어 인사한다', () => {
  assert.equal(greet('Ada'), 'Hello, Ada!');
});

test('이름이 없으면 기본 인사를 한다', () => {
  assert.equal(greet(), 'Hello!');
});
