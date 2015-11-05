var React = require('react');

var ShowcaseControlComponent = React.createClass({

  render: function() {
    return (
      <div className="showcase-control row text-center">
        <span className="glyphicon glyphicon-menu-left" onClick={this.props.prev}></span>
        <span className="glyphicon glyphicon-menu-right" onClick={this.props.next}></span>
      </div>
    );
  }

});

module.exports = ShowcaseControlComponent;

