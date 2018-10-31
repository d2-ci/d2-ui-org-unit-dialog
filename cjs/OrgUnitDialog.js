'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('@material-ui/core/Dialog/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = require('@material-ui/core/DialogTitle/DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogContent = require('@material-ui/core/DialogContent/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _DialogActions = require('@material-ui/core/DialogActions/DialogActions');

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _d2I18n = require('@dhis2/d2-i18n');

var _d2I18n2 = _interopRequireDefault(_d2I18n);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _OrgUnitSelector = require('./OrgUnitSelector');

var _OrgUnitSelector2 = _interopRequireDefault(_OrgUnitSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrgUnitDialog = function (_React$PureComponent) {
    (0, _inherits3.default)(OrgUnitDialog, _React$PureComponent);

    function OrgUnitDialog() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, OrgUnitDialog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = OrgUnitDialog.__proto__ || (0, _getPrototypeOf2.default)(OrgUnitDialog)).call.apply(_ref, [this].concat(args))), _this), _this.onUpdateClick = function () {
            _this.props.onUpdate();
        }, _this.render = function () {
            return _react2.default.createElement(
                _Dialog2.default,
                {
                    open: _this.props.open,
                    onClose: _this.props.onClose,
                    fullWidth: _this.props.fullWidth,
                    maxWidth: _this.props.maxWidth
                },
                _react2.default.createElement(
                    _DialogTitle2.default,
                    null,
                    _d2I18n2.default.t('Organisation units')
                ),
                _react2.default.createElement(
                    _DialogContent2.default,
                    null,
                    _react2.default.createElement(_OrgUnitSelector2.default, {
                        root: _this.props.root,
                        selected: _this.props.selected,
                        userOrgUnits: _this.props.userOrgUnits,
                        onLevelChange: _this.props.onLevelChange,
                        onGroupChange: _this.props.onGroupChange,
                        level: _this.props.level,
                        group: _this.props.group,
                        levelOptions: _this.props.levelOptions,
                        groupOptions: _this.props.groupOptions,
                        handleOrgUnitClick: _this.props.handleOrgUnitClick,
                        handleUserOrgUnitClick: _this.props.handleUserOrgUnitClick
                    })
                ),
                _react2.default.createElement(
                    _DialogActions2.default,
                    { style: { padding: '24px' } },
                    _react2.default.createElement(
                        _Button2.default,
                        { onClick: _this.props.onClose },
                        _d2I18n2.default.t('Hide')
                    ),
                    _react2.default.createElement(
                        _Button2.default,
                        { color: 'primary', onClick: _this.onUpdateClick },
                        _d2I18n2.default.t('Update')
                    )
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return OrgUnitDialog;
}(_react2.default.PureComponent);

OrgUnitDialog.defaultProps = {
    selected: [],
    userOrgUnits: [],
    level: [],
    group: [],
    levelOptions: [],
    groupOptions: [],

    // dialog related props
    open: false,
    fullWidth: true,
    maxWidth: 'md'
};

OrgUnitDialog.propTypes = {
    /**
    * Array of objects with required param id
    */
    selected: _propTypes2.default.array,

    /**
    * Array of user organisation units
    * See userOrgUnits.js for static options
    */
    userOrgUnits: _propTypes2.default.array,

    /**
    * Level multiselect array of ids
    */
    level: _propTypes2.default.array,

    /**
    * Group multiselect array of ids
    */
    group: _propTypes2.default.array,

    /**
    * Org unit level options.
    */
    levelOptions: _propTypes2.default.array,

    /**
    * Org unit groups options.
    */
    groupOptions: _propTypes2.default.array,

    /**
    * Setter function for level multiselect value
    */
    onLevelChange: _propTypes2.default.func.isRequired,

    /**
    * Setter for group multiselect value
    */
    onGroupChange: _propTypes2.default.func.isRequired,

    /**
    * Callback handler for selecting orgunit
    * Arguments supplied in callback: event, orgunit
    */
    handleOrgUnitClick: _propTypes2.default.func.isRequired,

    /**
    * Callback handler for selecting user orgunit
    * Arguments supplied in callback: event, checked
    */
    handleUserOrgUnitClick: _propTypes2.default.func.isRequired,

    /**
    * Root organisation unit
    */
    root: _propTypes2.default.object.isRequired,

    // Dialog related props
    onClose: _propTypes2.default.func.isRequired,
    onUpdate: _propTypes2.default.func.isRequired,
    open: _propTypes2.default.bool,
    fullWidth: _propTypes2.default.bool,
    maxWidth: _propTypes2.default.string
};

exports.default = OrgUnitDialog;