var AppDispatcher = require('../dispatcher/AppDispatcher');

var NotesActions = {
    add: function(note, index) {
        AppDispatcher.dispatch({
            eventName: 'new-item',
            newItem: { "title": note.title, "text": note.text },
            index: index
        });
    }
};

module.exports = NotesActions;