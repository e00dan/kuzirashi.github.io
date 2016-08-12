import { moduleForModel, test } from 'ember-qunit';

moduleForModel('experience', 'Unit | Model | experience', {
  needs: [
    'model:tag'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
