import { test } from 'qunit';
import moduleForAcceptance from 'kuzi/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | about/experience');

test('visiting /about/experience', function(assert) {
  assert.expect(3);

  visit('/about/experience');

  andThen(function() {
    assert.equal(currentURL(), '/about/experience');

    assert.equal(this.$('.card').length, 2);
    assert.equal(this.$('.card:first a').text().toLowerCase(), 'memsoria.pl');
  });
});
