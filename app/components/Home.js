var React = require('react');
var Notes = require('./Notes');
var AddNote = require('./AddNote');

var Home = React.createClass({
  render: function(){
    return (
        <div>
            <h2 className="text-center">
              Notes
            </h2>
            <Notes />
            <AddNote />
        </div>
    )
  }
});

module.exports = Home;