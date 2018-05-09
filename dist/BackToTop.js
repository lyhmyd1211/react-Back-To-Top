'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

require('./BackToTop.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackToTop = function (_Component) {
  _inherits(BackToTop, _Component);

  function BackToTop(props) {
    _classCallCheck(this, BackToTop);

    var _this = _possibleConstructorReturn(this, (BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).call(this, props));

    _this.state = {
      percent: 0,
      current: 0
    };
    _this.animate = _this.props.animate || 'fade'; /**1、fade(default) 2、rotate 3、none */
    _this.mainStyle = _this.props.mainStyle || {};
    _this.percentStyle = _this.props.percentStyle || {};
    _this.offsetTop = _this.props.offsetTop || 0;
    _this.step = _this.props.step || 50;
    _this.visiblePercent = _this.props.visiblePercent > 0 ? _this.props.visiblePercent : 1;
    _this.isPercent = _this.props.isPercent === undefined ? true : _this.props.isPercent;
    window.onscroll = function () {
      _this.setState({ percent: (0, _utils.getScrollPercent)(_this.props.offsetTop) });
      _this.setState({ current: (0, _utils.getScrollTop)() });
    };

    return _this;
  }

  _createClass(BackToTop, [{
    key: 'scrollToTop',
    value: function scrollToTop() {
      (0, _utils.ScrollToAnimate)(this.props.offsetTop, this.props.step, this.state.current);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var animate = this.props.animate;

      var visible = this.state.percent >= this.visiblePercent;
      var animateHide = "c-animate-hide";
      var animateShow = "c-animate-show";
      if (animate !== "fade" && animate !== "rotate") {
        if (animate !== 'none') {
          animateHide = "fade-hide";
          animateShow = "fade-show";
        }
      } else {
        animateHide = animate + "-hide";
        animateShow = animate + "-show";
      }
      return _react2.default.createElement(
        'div',
        { onClick: function onClick() {
            return _this2.scrollToTop();
          }, className: "base-back-to-up " + (visible ? animateShow : animateHide) },
        _react2.default.createElement('div', { className: 'back-to-up-default', style: this.mainStyle }),
        _react2.default.createElement(
          'div',
          { className: "to-up-percent" + (this.isPercent ? "" : " percent-hide"), style: this.percentStyle },
          this.state.percent + "%"
        )
      );
    }
  }]);

  return BackToTop;
}(_react.Component);

exports.default = BackToTop;
//# sourceMappingURL=BackToTop.js.map