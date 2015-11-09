var React = require('react');
var _ = require('lodash');

var ShowcaseControlComponent = React.createClass({

  render: function() {
    return (
      <div className="showcase-control row text-center">
        <span className="glyphicon glyphicon-menu-left" onClick={_.debounce(this.props.prev, 750, {leading: false, trailing: true})}></span>
        <span className="glyphicon glyphicon-menu-right" onClick={_.debounce(this.props.next, 750, {leading: false, trailing: true})}></span>
      </div>
    );
  }

});

module.exports = ShowcaseControlComponent;

