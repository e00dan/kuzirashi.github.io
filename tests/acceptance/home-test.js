import { test } from 'qunit';
import moduleForAcceptance from 'kuzi/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  assert.expect(9);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(this.$('#particles-js canvas').length, 1, 'particles are initiated');
    assert.equal(this.$('img[src*="stackoverflow.com"]').length, 1, 'stackoverflow flair is displayed');

    const $careersAnchor = this.$('a[href*="stackoverflow.com/cv"]');
    assert.equal($careersAnchor.length, 1);
    assert.equal($careersAnchor.attr('href'), 'https://stackoverflow.com/cv/danielkmak');

    const $linkedinAnchor = this.$('a[href*="linkedin.com"]');
    assert.equal($linkedinAnchor.length, 1);
    assert.equal($linkedinAnchor.attr('href'), 'https://linkedin.com/in/kmakdaniel');

    const $iconBar = this.$('.icon-bar');
    assert.equal($iconBar.length, 1);

    assert.equal($iconBar.children().length, 4);
  });
});
