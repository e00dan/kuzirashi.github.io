import { moduleForModel, test } from 'ember-qunit';

moduleForModel('video', 'Unit | Model | video', {
  needs: [
    'model:app'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
