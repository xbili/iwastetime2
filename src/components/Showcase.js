var React = require('react');

var Carousel = require('react-bootstrap').Carousel;
var CarouselItem = require('react-bootstrap').CarouselItem;

var ShowcaseComponent = React.createClass({
  render: function() {

    return (
      <div className="container-fluid unpad">
        <Carousel className="showcase" indicators={false}>
          <CarouselItem>
            <img src="http://lorempixel.com/1200/600"/>
          </CarouselItem>
          <CarouselItem>
            <img src="http://lorempixel.com/1200/600"/>
          </CarouselItem>
          <CarouselItem>
            <img src="http://lorempixel.com/1200/600"/>
          </CarouselItem>
        </Carousel>
        <h1 className="text-center">Relax, #IWasteTime2</h1>
      </div>
    );

  }

});

module.exports = ShowcaseComponent;

