var React = require('react');
var Router = require('react-router');
var NoteStore = require('../stores/NoteStore');
var AddNote = require('../components/AddNote');

var NoteDetail = React.createClass({
    mixins: [Router.State, Router.Navigation],
    componentDidMount: function() {  
        NoteStore.bind( 'change', this.notesChanged );
    },
    componentWillUnmount: function() {  
        NoteStore.unbind( 'change', this.notesChanged );
    },
    notesChanged: function() {
        this.transitionTo('/');
    },
    render: function() {
        var note = NoteStore.get(this.getParams().note_id);
        return (
                <AddNote noteId={this.getParams().note_id} />
            );
    }
});

module.exports = NoteDetail;