var React = require('react');
var NoteStore = require('../stores/NoteStore');
var NotesActions = require('../actions/NotesActions');
var Router = require('react-router');

var AddNote = React.createClass({
    mixins: [Router.State],
    getInitialState: function() {
        var state = { title: "", text: "" };
        var note = NoteStore.get(this.props.noteId);
        if(typeof note !== "undefined") {
            state = note;
        }
        return state;
    },
    setText: function(event) {
        this.setState({text: event.target.value});
    },
    setTitle: function(event) {
        this.setState({title: event.target.value});
    },
    addNewNote: function(evt) {
        var title = this.state.title;
        var text = this.state.text;
        if(title === '' || text === '') {
            return;
        }
        var note = {"title": title, "text": text};
        NotesActions.add(note, this.props.noteId);
    },
    render: function() {
        return (
                <div className="row">
                    <div className="col-md-3">
                        Title: <input type="text" className="form-control" value={this.state.title} onChange={this.setTitle} />
                        <br/>
                        <button className="form-control btn btn-primary" onClick={ this.addNewNote }>Add Note</button>
                    </div>                  
                    <div className="col-md-6">
                        Text: <textarea type="text" className="form-control" rows="6" value={this.state.text} onChange={this.setText} />
                    </div>                  
                </div>
            );
    }
});



module.exports = AddNote;