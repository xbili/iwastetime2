var React = require('react');

var articleData = require('../data/article');

var LearnComponent = React.createClass({
  componentWillMount: function() {
    this.setState({
      article: articleData[1]
    });
  },

  render: function() {
    var content = { __html: this.state.article.content };
    return (
      <div className="container learn" dangerouslySetInnerHTML={content}>
      </div>
    );
  }

});

module.exports = LearnComponent;

