import { moduleForModel, test } from 'ember-qunit';

moduleForModel('experience', 'Unit | Serializer | experience', {
  // Specify the other units that are required for this test.
  needs: ['serializer:experience']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
