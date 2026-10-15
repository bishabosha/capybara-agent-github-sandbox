import test from 'node:test';
import assert from 'node:assert/strict';
import { capitalise } from '../src/capitalise.mjs';

test('capitalises the first character of a string', () => {
  assert.equal(capitalise('capybara'), 'Capybara');
  assert.equal(capitalise('hello world'), 'Hello world');
});

test('leaves the rest of the string unchanged', () => {
  assert.equal(capitalise('hELLO'), 'HELLO');
  assert.equal(capitalise('123abc'), '123abc');
});

test('empty and already-capitalised input are unchanged', () => {
  assert.equal(capitalise(''), '');
  assert.equal(capitalise('Capybara'), 'Capybara');
});
