var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var NoteDetail = require('../components/NoteDetail');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <Route name="noteDetail" path="notes/:note_id" handler={NoteDetail} />
    <DefaultRoute handler={Home} />
  </Route>
);