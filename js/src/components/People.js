/**
  * @jsx React.DOM
  */

var React = require('react');
var Person = require('./Person');

var People = React.createClass({
	render:function(){

		var people = this.props.data.map(function(person){
			return <Person first={person.first} last={person.last} />
		});

		return (
			<div>
				{people}
			</div>
		)
	}
});

module.exports = People;

