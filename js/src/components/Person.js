/**
  * @jsx React.DOM
  */

var React = require('react');

var Person = React.createClass({
	render:function(){
		return (
			<div>
				<h2>{this.props.last}, {this.props.first}</h2>
			</div>
		)
	}
});

module.exports = Person;



