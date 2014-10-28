/**
  * @jsx React.DOM
  */

var React = require('react');
var App = require('./components/App');
var data = require('./data/dummyData');

(function(){
	React.render( <App data={data} />, document.getElementById('application') );
})()