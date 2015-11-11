var _ = require('lodash');
var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Carousel = require('react-bootstrap').Carousel;
var CarouselItem = require('react-bootstrap').CarouselItem;

var ShowcaseControl = require('./ShowcaseControl');

var showcaseData = require('../data/data');

var ShowcaseComponent = React.createClass({

  componentWillMount: function() {
    this.setState({
      idx: 0,
      text: showcaseData
    });
  },

  nextItem: function() {
    if (this.state.idx === showcaseData.length-1) {
      return this.setState({
        idx: 0
      });
    }
    var newIdx = this.state.idx + 1;
    this.setState({ idx: newIdx });
  },

  prevItem: function() {
    if (this.state.idx === 0) return;
    var newIdx = this.state.idx - 1;
    this.setState({ idx: newIdx });
  },

  render: function() {

    var items = this.state.text.map(function(item, i) {
      item = item.text;
      return (
        <p className="animated item" key={item}>
          {item}
        </p>
      );
    }.bind(this));

    var images = this.state.text.map(function(item, i) {
      var image = item.image_url;
      return (
        <div key={image} className="animated img-wrapper text-center">
          <img className="pr-img img-responsive center-block" src={image} />
        </div>
      );
    }.bind(this));

    return (
      <div className="container-fluid unpad">
        <div className="showcase">
          <div className="row showcase-main">

            <div className="col-md-5">
              <ReactCSSTransitionGroup
                transitionName={ {
                  enter: 'fadeInLeft',
                  leave: 'leave',
                  appear: 'fadeIn'
                } }
                transitionAppear={true}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                transitionAppearTimeout={300}>

              {images[this.state.idx]}

              </ReactCSSTransitionGroup>
            </div>

            <div className="col-md-5">
              <h3>How I Procrastinate:</h3>
              <ReactCSSTransitionGroup
              transitionName={ {
                enter: 'fadeInRight',
                leave: 'leave',
                appear: 'fadeIn'
              } }
              transitionAppear={true}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
              transitionAppearTimeout={300}>

              {items[this.state.idx]}
              </ReactCSSTransitionGroup>
            </div>

          </div>

          <ShowcaseControl next={this.nextItem} prev={this.prevItem} />
        </div>
        <h1 className="text-center">Relax, #IWasteTime2</h1>
      </div>
    );

  }

});

module.exports = ShowcaseComponent;

