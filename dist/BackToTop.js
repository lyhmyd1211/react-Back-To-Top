"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("./utils");

require("./BackToTop.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BackToTop =
/*#__PURE__*/
function (_Component) {
  _inherits(BackToTop, _Component);

  function BackToTop(props) {
    var _this;

    _classCallCheck(this, BackToTop);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BackToTop).call(this, props));
    _this.state = {
      percent: 0,
      current: 0
    };
    _this.animate = _this.props.animate || 'fade';
    /**1、fade(default) 2、rotate 3、none */

    _this.mainStyle = _this.props.mainStyle || {};
    _this.percentStyle = _this.props.percentStyle || {};
    _this.offsetTop = _this.props.offsetTop || 0;
    _this.step = _this.props.step || 50;
    _this.visiblePercent = _this.props.visiblePercent > 0 ? _this.props.visiblePercent : 1;
    _this.isPercent = _this.props.isPercent === undefined ? true : _this.props.isPercent;
    return _this;
  }

  _createClass(BackToTop, [{
    key: "scrollToTop",
    value: function scrollToTop() {
      (0, _utils.ScrollToAnimate)(this.props.offsetTop, this.props.step, this.state.current);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (window) {
        window.onscroll = function () {
          _this2.setState({
            percent: (0, _utils.getScrollPercent)(_this2.props.offsetTop),
            current: (0, _utils.getScrollTop)()
          }); // this.setState({ current: getScrollTop() });

        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          animate = _this$props.animate,
          children = _this$props.children;
      var visible = this.state.percent >= this.visiblePercent;
      var animateHide = 'c-animate-hide';
      var animateShow = 'c-animate-show';

      if (animate !== 'fade' && animate !== 'rotate') {
        if (animate !== 'none') {
          animateHide = 'fade-hide';
          animateShow = 'fade-show';
        }
      } else {
        animateHide = animate + '-hide';
        animateShow = animate + '-show';
      }

      console.log('asdasd', this.props, this.props.children);
      return _react["default"].createElement("div", {
        onClick: function onClick() {
          return _this3.scrollToTop();
        },
        className: 'base-back-to-up ' + (visible ? animateShow : animateHide)
      }, _react["default"].createElement("div", {
        className: "back-to-up-default",
        style: this.mainStyle
      }, children ? Array.isArray(children) ? children.map(child, function (index) {
        return _react["default"].createElement("div", {
          key: index
        }, child);
      }) : children && _react["default"].createElement("div", null, children) : _react["default"].createElement("div", {
        className: "back-to-up-default-text"
      }, _react["default"].createElement("span", null, "UP")), _react["default"].createElement("div", {
        className: 'to-up-percent' + (this.isPercent ? '' : ' percent-hide'),
        style: this.percentStyle
      }, this.state.percent + '%')));
    }
  }]);

  return BackToTop;
}(_react.Component);

var _default = BackToTop;
exports["default"] = _default;
//# sourceMappingURL=BackToTop.js.map