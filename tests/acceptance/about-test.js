import { test } from 'qunit';
import moduleForAcceptance from 'kuzi/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | about');

test('you can go to experience tab from about', function(assert) {
  assert.expect(2);

  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });

  click('a[href$=experience]');

  andThen(function() {
    assert.equal(currentURL(), '/about/experience');
  });
});

test('you can go to general tab from about', function(assert) {
  assert.expect(2);

  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });

  click('a[href$=general]');

  andThen(function() {
    assert.equal(currentURL(), '/about/general');
  });
});

test('arrow rotates in direction of your mouse', function(assert) {
  assert.expect(5);

  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');

    function getRotationDegrees(obj) {
      var matrix = obj.css("-webkit-transform") ||
                   obj.css("-moz-transform")    ||
                   obj.css("-ms-transform")     ||
                   obj.css("-o-transform")      ||
                   obj.css("transform");

      let angle = 0;
      if(matrix !== 'none') {
          const values = matrix.split('(')[1].split(')')[0].split(',');
          const [a, b] = values;
          angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
      } else {
        angle = 0;
      }
      return (angle < 0) ? angle + 360 : angle;
    }

    const $arrow = this.$('.arrow');

    assert.equal(getRotationDegrees($arrow), 0);

    const mouseMoveEvent = $.Event('mousemove');
    mouseMoveEvent.pageX = 80;
    mouseMoveEvent.pageY = 180;

    $arrow.trigger(mouseMoveEvent);

    assert.ok(getRotationDegrees($arrow) > 0);
    assert.ok(getRotationDegrees($arrow) > 270);
    assert.ok(getRotationDegrees($arrow) < 360);
  });
});
