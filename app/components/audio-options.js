import Ember from 'ember';

export default Ember.Component.extend({
  speakerOptions: [
    {optionName: 'Default, Automatically Pick Best', id: -1},
    {optionName: 'Headphones', id: 1},
    {optionName: '4 Speakers', id: 3},
    {optionName: '2 Speakers', id: 4},
    {optionName: '5.1 Surround', id: 6},
  ],

  isOpen: false,

  actions: {
    toggleDisplay() {
      this.toggleProperty('isOpen');
    },

    updateValue(command, event) {
      this.set(`data.${command}`, event.target.value);
    }
  },

  setDefaultSelected(defaultValue, optionValue) {
    if (defaultValue === value) {
      return true;
    } else {
      return false;
    }
  }
});
