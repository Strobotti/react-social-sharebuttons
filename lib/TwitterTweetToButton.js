'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TwitterTweetToButton = function (_React$Component) {
  _inherits(TwitterTweetToButton, _React$Component);

  function TwitterTweetToButton(props) {
    _classCallCheck(this, TwitterTweetToButton);

    var _this = _possibleConstructorReturn(this, (TwitterTweetToButton.__proto__ || Object.getPrototypeOf(TwitterTweetToButton)).call(this, props));

    _this.state = { initialized: false };
    return _this;
  }

  _createClass(TwitterTweetToButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.initialized) {
        return;
      }

      if (typeof twttr === 'undefined') {
        var twitterbutton = this.node;
        var twitterscript = document.createElement('script');
        twitterscript.src = '//platform.twitter.com/widgets.js';
        twitterscript.async = true;
        twitterscript.id = 'twitter-wjs';
        twitterbutton.parentNode.appendChild(twitterscript);
      } else {
        twttr.widgets.load(); // eslint-disable-line
      }

      this.initialized();
    }
  }, {
    key: 'initialized',
    value: function initialized() {
      this.setState({ initialized: true });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'a',
        {
          ref: function ref(node) {
            return _this2.node = node;
          },
          href: 'https://twitter.com/intent/tweet?screen_name=' + this.props.user + '&text=' + this.props.text,
          className: 'twitter-mention-button'
        },
        'Tweet to ',
        this.props.user
      );
    }
  }]);

  return TwitterTweetToButton;
}(_react2.default.Component);

exports.default = TwitterTweetToButton;


TwitterTweetToButton.propTypes = {
  user: _react.PropTypes.string.isRequired,
  text: _react.PropTypes.string
};

TwitterTweetToButton.defaultProps = {
  text: ''
};

/*
<a href="https://twitter.com/intent/tweet?screen_name=uraway_&text=text" class="twitter-mention-button">Tweet to @uraway_</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
*/