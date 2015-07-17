import Ember from 'ember';
import { readPath } from '../../../helpers/read-path';
import { module, test } from 'qunit';

module('Unit | Helper | read path');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = readPath([
    Ember.Object.create({
      hoge: {
        fuga: {
          piyo: 2
        }
      }
    }),
    'hoge.fuga.piyo'
  ]);
  assert.equal(result, 2);
});
