import { moduleForModel, test } from 'ember-qunit';

moduleForModel('experience', 'Unit | Serializer | experience', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:experience',
    'model:tag'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject();

  const serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
