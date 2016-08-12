import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('animated-caption', 'Integration | Component | animated caption', {
  integration: true
});

test('it shows eye when you hover it after transition', function(assert) {
  assert.expect(6);

  return new Ember.RSVP.Promise(resolve => {
    Ember.run(() => {
      this.render(hbs`
        <ul class="applications">
          <li>
            <a href="#">
              {{animated-caption added=true class='image-caption'}}
            </a>
          </li>
        </ul>`);
      }
    );

    assert.equal(this.$('.fa-eye').hasClass('visible'), false);
    assert.ok(this.$('.fa-eye').hasClass('hidden'));
    assert.equal(this.$('time').length, 1);

    this.$().on('transitionend', () => {
      assert.ok(true, 'transition is fired');
      assert.ok(this.$('.fa-eye').hasClass('visible'));
      assert.equal(this.$('time').length, 0);

      resolve();
    });

    Ember.run.next(() =>
      this.$('a').addClass('hovered')
    );
  });
});
