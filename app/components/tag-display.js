import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	classNames: ['label see-through-bordered'],
	classNameBindings: ['active:success']
});
