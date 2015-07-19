var AppDispatcher = require('../dispatcher/AppDispatcher');
var MicroEvent = require('microevent-github');

var NoteStore = {

    // Actual collection of model data
    items: [],
    get: function(index) {
        return this.items[index];
    },
    // Accessor method we'll use later
    getAll: function() {
        return this.items;
    },
    set: function(newItem, index) {
        if(typeof this.items[index] === 'undefined') {
            this.items.push(newItem);
        } else {
            this.items[index] = newItem;
        }
    }

};

MicroEvent.mixin(NoteStore);

AppDispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case 'new-item':
            NoteStore.set(payload.newItem, payload.index);
            NoteStore.trigger('change');
            break;

    }

    return true; // Needed for Flux promise resolution

}); 


module.exports = NoteStore;