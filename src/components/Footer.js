require('styles/main.scss');
require('styles/footer.scss');

var React = require('react');

var FooterComponent = React.createClass({

  render: function() {
    return (
      <footer className="container-fluid unpad">
        <div className="footer">
          <p>Done with ♥</p>
          <p>Tembusu College</p>
        </div>
      </footer>
    );
  }

});

module.exports = FooterComponent;

