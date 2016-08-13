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

    assert.equal($('.fa-eye').hasClass('visible'), false);
    assert.ok($('.fa-eye').hasClass('hidden'));
    assert.equal($('time').length, 1);

    $('.animated-caption').on('transitionend', () => {
      assert.ok(true, 'transition is fired');
      assert.ok($('.fa-eye').hasClass('visible'));
      assert.equal($('time').length, 0);

      resolve();
    });

    Ember.run.next(() =>
      $('a').addClass('hovered')
    );
  });
});
