import Ember from 'ember';

export default Ember.Component.extend({

  content: null,
  prompt: null,
  promptDisable: false,
  optionValuePath: null,
  optionLabelPath: null,
  action: Ember.K, // action to fire on change
  selectClass: "form-control input-sm",
  selectId: null,
  value: null,

  _value: Ember.computed.reads('value'),

  _contentIsObject: function() {
    var hasOptionValuePath = !!this.get('optionValuePath');
    var hasOptionLabelPath = !!this.get('optionLabelPath');
    return hasOptionValuePath && hasOptionLabelPath;
  }.property('optionValuePath', 'optionLabelPath'),

  init() {
    this._super(...arguments);
    if (!this.get('content')) {
      this.set('content', []);
    }
  },

  actions: {
    change(event) {
      const value = event.currentTarget.value || null;
      const changeCallback = this.get('action');
      this.set('_value', value);
      changeCallback(value);
    }
  }

});
