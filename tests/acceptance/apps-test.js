import { test } from 'qunit';
import moduleForAcceptance from 'kuzi/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | apps');

test('visiting /apps', function(assert) {
  visit('/apps');

  andThen(function() {
    assert.equal(currentURL(), '/apps');
  });
});
