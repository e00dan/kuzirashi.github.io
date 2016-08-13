import { test } from 'qunit';
import moduleForAcceptance from 'kuzi/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | apps');

test('visiting /apps', function(assert) {
  assert.expect(6);

  const APPS_LENGTH = 8,
        FIRST_APP = 'naruto dst',
        TAGS_LENGTH = 24,
        EMBER_APPS_LENGTH = 4,
        FIRST_EMBER_APP = 'portfolio';

  visit('/apps');

  andThen(function() {
    assert.equal(currentURL(), '/apps');

    assert.equal($('ul.applications > li').length, APPS_LENGTH);
    assert.equal($('ul.applications li:first header a span').text().trim().toLowerCase(), FIRST_APP);

    assert.equal($('.tags > li').length, TAGS_LENGTH);
  });

  click('.tags [title*="Ember.js"]');

  andThen(function() {
    assert.equal($('ul.applications > li').length, EMBER_APPS_LENGTH);
    assert.equal($('ul.applications li:first header a span').text().trim().toLowerCase(), FIRST_EMBER_APP);
  });
});
