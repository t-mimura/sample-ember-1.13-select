import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {label: 'label1', value: 1},
      {label: 'label2', value: 2}
    ];
  }
});
