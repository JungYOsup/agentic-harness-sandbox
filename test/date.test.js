import assert from 'node:assert/strict';
import test from 'node:test';
import { formatDate } from '../src/date.js';

test('Date를 YYYY-MM-DD로 포맷한다', () => {
  assert.equal(formatDate(new Date(2024, 0, 5)), '2024-01-05');
});

test('월과 일이 두 자리여도 그대로 포맷한다', () => {
  assert.equal(formatDate(new Date(2023, 11, 31)), '2023-12-31');
});
