import EmberObject from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
    didInsertElement: function() {
      let self = this;
      this.set('updateCallback', function() { return self.onUpdate(); } );
    },
    onUpdate: function() {
      let extras = this.get('model.app.game.extra_plugins');
      if (!extras.any(e => e === 'rpg')) {
        return {};
      }

      let data = {
        sheet: this.get('model.char.rpg.sheet'),
        sheet_notes: this.get('model.char.rpg.sheet_notes')
      };
      return data;
    },
});