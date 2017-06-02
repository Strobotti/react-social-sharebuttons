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

var HatenabookmarkButton = function (_React$Component) {
  _inherits(HatenabookmarkButton, _React$Component);

  function HatenabookmarkButton(props) {
    _classCallCheck(this, HatenabookmarkButton);

    var _this = _possibleConstructorReturn(this, (HatenabookmarkButton.__proto__ || Object.getPrototypeOf(HatenabookmarkButton)).call(this, props));

    _this.state = { initialized: false };
    return _this;
  }

  _createClass(HatenabookmarkButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.initialized) {
        return;
      }

      var hatenabutton = this.node;
      var hatenascript = document.createElement('script');
      hatenascript.src = 'https://b.st-hatena.com/js/bookmark_button.js';
      hatenascript.type = 'text/javascript';
      hatenabutton.parentNode.appendChild(hatenascript);

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
          href: 'http://b.hatena.ne.jp/entry/' + this.props.url,
          className: 'hatena-bookmark-button',
          'data-hatena-bookmark-title': this.props.title,
          'data-hatena-bookmark-layout': this.props.layout,
          'data-hatena-bookmark-lang': 'ja',
          title: '\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0'
        },
        _react2.default.createElement('img', {
          src: 'https://b.st-hatena.com/images/entry-button/button-only@2x.png',
          alt: '\u3053\u306E\u30A8\u30F3\u30C8\u30EA\u30FC\u3092\u306F\u3066\u306A\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u306B\u8FFD\u52A0',
          style: { width: 20, height: 20, border: 'none' }
        })
      );
    }
  }]);

  return HatenabookmarkButton;
}(_react2.default.Component);

exports.default = HatenabookmarkButton;


HatenabookmarkButton.propTypes = {
  url: _react2.default.PropTypes.string,
  layout: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string
};

HatenabookmarkButton.defaultProps = {
  url: typeof window !== 'undefined' ? window.url : '',
  layout: '',
  title: ''
};