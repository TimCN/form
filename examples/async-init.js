webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(259);


/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _src = __webpack_require__(180);
	
	var form = _interopRequireWildcard(_src);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = form; // export this package's api
	
	module.exports = exports['default'];

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createForm = undefined;
	
	var _createForm = __webpack_require__(181);
	
	var _createForm2 = _interopRequireDefault(_createForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.createForm = _createForm2.default; // export this package's api

/***/ },

/***/ 258:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var regionStyle = exports.regionStyle = {
	  border: '1px solid red',
	  marginTop: 10,
	  padding: 10
	};
	
	var errorStyle = exports.errorStyle = {
	  color: 'red',
	  marginTop: 10,
	  padding: 10
	};

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _rcForm = __webpack_require__(179);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _styles = __webpack_require__(258);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint react/no-multi-comp:0, no-console:0 */
	
	var Email = _react2.default.createClass({
	  displayName: 'Email',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	
	  checkSpecial: function checkSpecial(rule, value, callback) {
	    setTimeout(function () {
	      if (value === 'yiminghe@gmail.com') {
	        callback('can not be!');
	      } else {
	        callback();
	      }
	    }, 1000);
	  },
	  render: function render() {
	    var _props$form = this.props.form,
	        getFieldProps = _props$form.getFieldProps,
	        getFieldError = _props$form.getFieldError,
	        isFieldValidating = _props$form.isFieldValidating;
	
	    var errors = getFieldError('email');
	    return _react2.default.createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2.default.createElement(
	        'div',
	        null,
	        'email validate onBlur'
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', getFieldProps('email', {
	          validateFirst: true,
	          rules: [{
	            required: true
	          }, {
	            type: 'email',
	            message: '错误的 email 格式'
	          }, this.checkSpecial],
	          validateTrigger: 'onBlur'
	        }))
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: _styles.errorStyle },
	        errors ? errors.join(',') : null
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: _styles.errorStyle },
	        isFieldValidating('email') ? 'validating' : null
	      )
	    );
	  }
	});
	
	var Form = function (_Component) {
	  _inherits(Form, _Component);
	
	  function Form() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Form);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onSubmit = function (e) {
	      e.preventDefault();
	      _this.props.form.submit(function (callback) {
	        setTimeout(function () {
	          _this.props.form.validateFields(function (error, values) {
	            if (!error) {
	              console.log('ok', values);
	            } else {
	              console.log('error', error, values);
	            }
	            callback();
	          });
	        }, 1000);
	      });
	    }, _this.reset = function (e) {
	      e.preventDefault();
	      _this.props.form.resetFields();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Form.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    setTimeout(function () {
	      _this2.props.form.setFieldsInitialValue({
	        email: 'xx@gmail.com'
	      });
	      _this2.setState({
	        loading: false
	      });
	    }, 1000);
	  };
	
	  Form.prototype.render = function render() {
	    if (!this.state || this.state.loading !== false) {
	      return _react2.default.createElement(
	        'b',
	        null,
	        'loading'
	      );
	    }
	    var form = this.props.form;
	
	    var disabled = form.isFieldsValidating() || form.isSubmitting();
	    return _react2.default.createElement(
	      'div',
	      { style: { margin: 20 } },
	      _react2.default.createElement(
	        'h2',
	        null,
	        'async init field'
	      ),
	      _react2.default.createElement(
	        'form',
	        { onSubmit: this.onSubmit },
	        _react2.default.createElement(Email, { form: form }),
	        _react2.default.createElement(
	          'div',
	          { style: _styles.regionStyle },
	          _react2.default.createElement(
	            'button',
	            { disabled: disabled, type: 'submit' },
	            'submit'
	          ),
	          '\xA0',
	          disabled ? _react2.default.createElement(
	            'span',
	            { style: { color: 'red' } },
	            'disabled'
	          ) : null,
	          '\xA0',
	          _react2.default.createElement(
	            'button',
	            { disabled: disabled, onClick: this.reset },
	            'reset'
	          )
	        )
	      )
	    );
	  };
	
	  return Form;
	}(_react.Component);
	
	Form.propTypes = {
	  form: _react.PropTypes.object
	};
	
	
	var NewForm = (0, _rcForm.createForm)()(Form);
	
	_reactDom2.default.render(_react2.default.createElement(NewForm, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=async-init.js.map