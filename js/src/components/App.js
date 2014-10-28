/**
  * @jsx React.DOM
  */

var React = require('react');
var People = require('./People');

var PersonApp = React.createClass({
	render:function(){
		return (
			<div>
				<h1>Person List</h1>
				<People data={this.props.data} />
			</div>
		)
	}
})

module.exports = PersonApp;