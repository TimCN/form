webpackJsonp([9],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(316);


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

/***/ 285:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _rcForm = __webpack_require__(179);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	__webpack_require__(285);
	
	var _styles = __webpack_require__(258);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /* eslint react/no-multi-comp:0, no-console:0 */
	
	var CustomInput = _react2.default.createClass({
	  displayName: 'CustomInput',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	  getInitialState: function getInitialState() {
	    return {
	      data: []
	    };
	  },
	  checkUpper: function checkUpper(rule, value, callback) {
	    if (value !== value.toUpperCase()) {
	      callback(new Error('need to be upper!'));
	    } else {
	      callback();
	    }
	  },
	  toUpper: function toUpper(v, prev) {
	    if (v === prev) {
	      return v;
	    }
	    return v.toUpperCase();
	  },
	  render: function render() {
	    var _props$form = this.props.form,
	        getFieldProps = _props$form.getFieldProps,
	        getFieldError = _props$form.getFieldError;
	
	    var errors = getFieldError('upper');
	    return _react2.default.createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2.default.createElement(
	        'div',
	        null,
	        'upper normalize'
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('input', getFieldProps('upper', {
	          normalize: this.toUpper,
	          rules: [{
	            validator: this.checkUpper
	          }]
	        }))
	      ),
	      _react2.default.createElement(
	        'div',
	        { style: _styles.errorStyle },
	        errors ? errors.join(',') : null
	      )
	    );
	  }
	});
	
	var MaxMin = _react2.default.createClass({
	  displayName: 'MaxMin',
	
	  propTypes: {
	    form: _react.PropTypes.object
	  },
	  normalizeMin: function normalizeMin(value, prevValue, allValues) {
	    console.log('normalizeMin', allValues.min, allValues.max);
	    var previousAllValues = this.props.form.getFieldsValue();
	    if (allValues.max !== previousAllValues.max) {
	      // max changed
	      if (value === '' || Number(allValues.max) < Number(value)) {
	        return allValues.max;
	      }
	    }
	    return value;
	  },
	  normalizeMax: function normalizeMax(value, prevValue, allValues) {
	    console.log('normalizeMax', allValues.min, allValues.max);
	    var previousAllValues = this.props.form.getFieldsValue();
	    if (allValues.min !== previousAllValues.min) {
	      // min changed
	      if (value === '' || Number(allValues.min) > Number(value)) {
	        return allValues.min;
	      }
	    }
	    return value;
	  },
	  render: function render() {
	    var getFieldProps = this.props.form.getFieldProps;
	
	    return _react2.default.createElement(
	      'div',
	      { style: _styles.regionStyle },
	      _react2.default.createElement(
	        'div',
	        null,
	        'min: ',
	        _react2.default.createElement(
	          'select',
	          getFieldProps('min', {
	            normalize: this.normalizeMin,
	            initialValue: ''
	          }),
	          _react2.default.createElement(
	            'option',
	            { value: '' },
	            'empty'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '1' },
	            '1'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '2' },
	            '2'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '3' },
	            '3'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '4' },
	            '4'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '5' },
	            '5'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        null,
	        'max: ',
	        _react2.default.createElement(
	          'select',
	          getFieldProps('max', {
	            initialValue: '',
	            normalize: this.normalizeMax
	          }),
	          _react2.default.createElement(
	            'option',
	            { value: '' },
	            'empty'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '1' },
	            '1'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '2' },
	            '2'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '3' },
	            '3'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '4' },
	            '4'
	          ),
	          _react2.default.createElement(
	            'option',
	            { value: '5' },
	            '5'
	          )
	        )
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
	      _this.props.form.validateFields(function (error, values) {
	        if (!error) {
	          console.log('ok', values);
	        } else {
	          console.log('error', error, values);
	        }
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  Form.prototype.render = function render() {
	    var form = this.props.form;
	
	    return _react2.default.createElement(
	      'div',
	      { style: { margin: 20 } },
	      _react2.default.createElement(
	        'h2',
	        null,
	        'normalize'
	      ),
	      _react2.default.createElement(
	        'form',
	        { onSubmit: this.onSubmit },
	        _react2.default.createElement(CustomInput, { form: form }),
	        _react2.default.createElement(MaxMin, { form: form }),
	        _react2.default.createElement(
	          'div',
	          { style: _styles.regionStyle },
	          _react2.default.createElement(
	            'button',
	            null,
	            'submit'
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
//# sourceMappingURL=normalize.js.map