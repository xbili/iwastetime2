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
    var content = { __html: this.state.article.content };
    return (
      <div className="container about">
        <h1 className="text-center">{title}</h1>
        <div className="lead" dangerouslySetInnerHTML={content}/>
      </div>
    );
  }

});

module.exports = AboutComponent;

