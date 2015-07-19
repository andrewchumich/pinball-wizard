var React = require('react');
var NoteStore = require('../stores/NoteStore');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;


var Notes = React.createClass({
    getInitialState: function() {
        return { items: NoteStore.getAll() };
    },
    componentDidMount: function() {  
        NoteStore.bind( 'change', this.notesChanged );
    },
    componentWillUnmount: function() {  
        NoteStore.unbind( 'change', this.notesChanged );
    },
    notesChanged: function() {
        this.setState({
            notes: NoteStore.getAll()
        });
    },
    render: function() {
        var itemHtml = this.state.items.map(function(noteItem, index) {
            return (
                    <tr>
                        <td>{noteItem.title}</td>
                        <td>{noteItem.text}</td>
                        <td><Link to={`/notes/${index}`}>edit</Link></td>
                    </tr>
                );
        });
        return (
            <table className="table">
                <tbody>
                    {{ itemHtml }}
                </tbody>
            </table>
        );
    }
});

module.exports = Notes;