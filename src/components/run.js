var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = require('./Main');
var Showcase = require('./Showcase');
var About = require('./About');
var Learn = require('./Learn');

// Render the main component into the dom
ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Showcase} />
      <Route name="showcase" path="showcase" component={Showcase} />
      <Route name="learn" path="learn" component={Learn} />
      <Route name="about" path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('app'));

