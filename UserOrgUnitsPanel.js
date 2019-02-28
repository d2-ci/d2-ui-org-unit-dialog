'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = require('@material-ui/core/Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Checkbox = require('@material-ui/core/Checkbox/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _CheckBoxOutlineBlank = require('@material-ui/icons/CheckBoxOutlineBlank');

var _CheckBoxOutlineBlank2 = _interopRequireDefault(_CheckBoxOutlineBlank);

var _CheckBox = require('@material-ui/icons/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _InputLabel = require('@material-ui/core/InputLabel/InputLabel');

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _Stop = require('@material-ui/icons/Stop');

var _Stop2 = _interopRequireDefault(_Stop);

var _userOrgUnits = require('./userOrgUnits');

var _userOrgUnits2 = _interopRequireDefault(_userOrgUnits);

var _UserOrgUnitsPanel = require('./styles/UserOrgUnitsPanel');

var _UserOrgUnitsPanel2 = _interopRequireDefault(_UserOrgUnitsPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserOrgUnitsPanel = function UserOrgUnitsPanel(props) {
    return _react2.default.createElement(
        'div',
        { style: _UserOrgUnitsPanel2.default.container },
        _react2.default.createElement(
            _Grid2.default,
            {
                container: true,
                direction: 'row',
                alignItems: 'center'
            },
            _userOrgUnits2.default.map(function (orgUnitType) {
                return _react2.default.createElement(
                    _Grid2.default,
                    {
                        key: orgUnitType.id,
                        style: _UserOrgUnitsPanel2.default.gridItem,
                        item: true
                    },
                    _react2.default.createElement(_Checkbox2.default, {
                        checked: props.userOrgUnits.some(function (ouType) {
                            return ouType.id === orgUnitType.id;
                        }),
                        onChange: props.handleUserOrgUnitClick,
                        inputProps: {
                            id: orgUnitType.id,
                            name: orgUnitType.id
                        },
                        icon: _react2.default.createElement(_CheckBoxOutlineBlank2.default, { style: _UserOrgUnitsPanel2.default.checkbox }),
                        checkedIcon: _react2.default.createElement(_CheckBox2.default, { style: _UserOrgUnitsPanel2.default.checkboxChecked }),
                        color: props.checkboxColor
                    }),
                    _react2.default.createElement(
                        _InputLabel2.default,
                        { htmlFor: orgUnitType.id },
                        _react2.default.createElement(_Stop2.default, { style: _UserOrgUnitsPanel2.default.stopIcon }),
                        _react2.default.createElement(
                            'span',
                            { style: _UserOrgUnitsPanel2.default.text },
                            orgUnitType.displayName
                        )
                    )
                );
            })
        )
    );
};

UserOrgUnitsPanel.propTypes = {
    checkboxColor: _propTypes2.default.string.isRequired,
    selected: _propTypes2.default.array.isRequired,
    userOrgUnits: _propTypes2.default.array.isRequired,
    handleUserOrgUnitClick: _propTypes2.default.func.isRequired
};

exports.default = UserOrgUnitsPanel;