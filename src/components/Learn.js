var React = require('react');

var articleData = require('../data/article');

var LearnComponent = React.createClass({
  componentWillMount: function() {
    this.setState({
      article: articleData[1]
    });
  },

  render: function() {
    return (
      <div className="container about">
        {this.state.article.content}
      </div>
    );
  }

});

module.exports = LearnComponent;

