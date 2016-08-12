import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('tag', {
  needs: [
    'model:app'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
