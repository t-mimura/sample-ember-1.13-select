import Ember from 'ember';

export default Ember.Controller.extend({
  controllsValue: null,
  // if initial value is exists.
  // controllsValue: 2

  actions: {
    setValue: function(value) {
      this.set('controllsValue', value);
    }
  }
});
