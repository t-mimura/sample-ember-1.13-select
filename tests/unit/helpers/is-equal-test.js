import { isEqual } from '../../../helpers/is-equal';
import { module, test } from 'qunit';

module('Unit | Helper | is equal');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.expect(2);
  assert.ok(isEqual(['aaa', 'aaa']), "it's equal");
  assert.ok(!isEqual(['aaa', 'aab']), "it's not equal");
});
