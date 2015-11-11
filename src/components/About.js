var React = require('react');

var article = require('../data/article')

var AboutComponent = React.createClass({

  componentWillMount: function() {
    this.setState({
      article: article[0]
    });
  },

  render: function() {
    var title = this.state.article.title === '' ? 'About' : this.state.article.title;
    var paragraphs = this.state.article.content.map(function(paragraph) {
      return (
        <p key={paragraph} className="lead content">{paragraph}</p>
      );
    });
    return (
      <div className="container about">
        <h1 className="text-center">{title}</h1>
        {paragraphs}
      </div>
    );
  }

});

module.exports = AboutComponent;

