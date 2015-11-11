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
      <div className="animated fadeIn container about">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={content}/>
      </div>
    );
  }

});

module.exports = AboutComponent;

