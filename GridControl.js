'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormControl = require('@material-ui/core/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Select = require('@material-ui/core/Select/Select');

var _Select2 = _interopRequireDefault(_Select);

var _GridControl = require('./styles/GridControl.style');

var _GridControl2 = _interopRequireDefault(_GridControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridControl = function GridControl(_ref) {
    var label = _ref.label,
        placeholder = _ref.placeholder,
        options = _ref.options,
        selectProps = (0, _objectWithoutProperties3.default)(_ref, ['label', 'placeholder', 'options']);

    var renderValue = function renderValue(selected) {
        if (selected.length === 0) {
            return _react2.default.createElement(
                'span',
                { style: _GridControl2.default.placeholder },
                placeholder
            );
        }

        return selectProps.renderValue(selected);
    };

    return _react2.default.createElement(
        _Grid2.default,
        {
            style: _GridControl2.default.gridItem,
            xs: 4,
            item: true
        },
        _react2.default.createElement(
            _FormControl2.default,
            { style: { width: '100%' } },
            _react2.default.createElement(
                'span',
                { style: _GridControl2.default.label },
                label
            ),
            _react2.default.createElement(
                _Select2.default,
                (0, _extends3.default)({}, selectProps, {
                    renderValue: renderValue,
                    displayEmpty: true,
                    fullWidth: true,
                    MenuProps: {
                        style: { zIndex: 3100 }
                    }
                }),
                options.map(function (option) {
                    return _react2.default.createElement(
                        _MenuItem2.default,
                        {
                            key: option.id,
                            value: option.id
                        },
                        option.displayName
                    );
                })
            )
        )
    );
};

exports.default = GridControl;