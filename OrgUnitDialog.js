import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import i18n from '@dhis2/d2-i18n';
import PropTypes from 'prop-types';
import OrgUnitSelector from './OrgUnitSelector';

var OrgUnitDialog = function (_React$PureComponent) {
    _inherits(OrgUnitDialog, _React$PureComponent);

    function OrgUnitDialog() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, OrgUnitDialog);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrgUnitDialog.__proto__ || _Object$getPrototypeOf(OrgUnitDialog)).call.apply(_ref, [this].concat(args))), _this), _this.onUpdateClick = function () {
            _this.props.onUpdate();
        }, _this.render = function () {
            return React.createElement(
                Dialog,
                {
                    open: _this.props.open,
                    onClose: _this.props.onClose,
                    fullWidth: _this.props.fullWidth,
                    maxWidth: _this.props.maxWidth
                },
                React.createElement(
                    DialogTitle,
                    null,
                    i18n.t('Organisation units')
                ),
                React.createElement(
                    DialogContent,
                    null,
                    React.createElement(OrgUnitSelector, {
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
                React.createElement(
                    DialogActions,
                    { style: { padding: '24px' } },
                    React.createElement(
                        Button,
                        { onClick: _this.props.onClose },
                        i18n.t('Hide')
                    ),
                    React.createElement(
                        Button,
                        { color: 'primary', onClick: _this.onUpdateClick },
                        i18n.t('Update')
                    )
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return OrgUnitDialog;
}(React.PureComponent);

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
    selected: PropTypes.array,

    /**
    * Array of user organisation units
    * See userOrgUnits.js for static options
    */
    userOrgUnits: PropTypes.array,

    /**
    * Level multiselect array of ids
    */
    level: PropTypes.array,

    /**
    * Group multiselect array of ids
    */
    group: PropTypes.array,

    /**
    * Org unit level options.
    */
    levelOptions: PropTypes.array,

    /**
    * Org unit groups options.
    */
    groupOptions: PropTypes.array,

    /**
    * Setter function for level multiselect value
    */
    onLevelChange: PropTypes.func.isRequired,

    /**
    * Setter for group multiselect value
    */
    onGroupChange: PropTypes.func.isRequired,

    /**
    * Callback handler for selecting orgunit
    * Arguments supplied in callback: event, orgunit
    */
    handleOrgUnitClick: PropTypes.func.isRequired,

    /**
    * Callback handler for selecting user orgunit
    * Arguments supplied in callback: event, checked
    */
    handleUserOrgUnitClick: PropTypes.func.isRequired,

    /**
    * Root organisation unit
    */
    root: PropTypes.object.isRequired,

    // Dialog related props
    onClose: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    open: PropTypes.bool,
    fullWidth: PropTypes.bool,
    maxWidth: PropTypes.string
};

export default OrgUnitDialog;