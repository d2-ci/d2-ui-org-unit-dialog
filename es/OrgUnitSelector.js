import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _extends from 'babel-runtime/helpers/extends';
import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, Fragment } from 'react';
import { OrgUnitTree } from '@dhis2/d2-ui-org-unit-tree';
import Grid from '@material-ui/core/Grid/Grid';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import i18n from '@dhis2/d2-i18n';
import Input from '@material-ui/core/Input/Input';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select/Select';
import styles from './styles/OrgUnitDialog.style';
import UserOrgUnitsPanel from './UserOrgUnitsPanel';
import removeLastPathSegment from './util';

var OrgUnitSelector = function (_Component) {
    _inherits(OrgUnitSelector, _Component);

    function OrgUnitSelector(props) {
        _classCallCheck(this, OrgUnitSelector);

        var _this = _possibleConstructorReturn(this, (OrgUnitSelector.__proto__ || _Object$getPrototypeOf(OrgUnitSelector)).call(this, props));

        _this.onExpand = function (orgUnit) {
            _this.setState({
                initiallyExpanded: [].concat(_toConsumableArray(_this.state.initiallyExpanded), [orgUnit.path])
            });
        };

        _this.onCollapse = function (orgUnit) {
            _this.setState({
                // Clear all org units which are children of collapsed org unit
                initiallyExpanded: _this.state.initiallyExpanded.filter(function (path) {
                    return !path.includes(orgUnit.id);
                })
            });
        };

        _this.normalizeOptions = function (result, item) {
            return _extends({}, result, _defineProperty({}, item.id, item));
        };

        _this.renderGroupOptions = function (selected) {
            if (_this.props.groupOptions.length > 0) {
                var options = _this.props.groupOptions.reduce(_this.normalizeOptions, {});

                return selected.filter(function (id) {
                    return options[id];
                }).map(function (id) {
                    return options[id].displayName;
                }).join(', ');
            }

            return '';
        };

        _this.renderLevelOptions = function (selected) {
            if (_this.props.levelOptions.length > 0) {
                var options = _this.props.levelOptions.reduce(_this.normalizeOptions, {});

                return selected.filter(function (id) {
                    return options[id];
                }).map(function (id) {
                    return options[id].displayName;
                }).join(', ');
            }

            return '';
        };

        _this.renderOptionsPanel = function () {
            return React.createElement(
                Grid,
                {
                    spacing: 8,
                    style: styles.footer.index,
                    container: true
                },
                React.createElement(
                    Grid,
                    { item: true, xs: 4 },
                    React.createElement(
                        InputLabel,
                        { htmlFor: 'level' },
                        i18n.t('Level')
                    ),
                    React.createElement(
                        Select,
                        {
                            value: _this.props.level,
                            onChange: _this.props.onLevelChange,
                            input: React.createElement(Input, { name: 'level', id: 'level' }),
                            renderValue: _this.renderLevelOptions,
                            disabled: _this.props.userOrgUnits.length > 0,
                            multiple: true,
                            displayEmpty: true,
                            fullWidth: true
                        },
                        React.createElement(
                            MenuItem,
                            { value: '' },
                            React.createElement(
                                'em',
                                null,
                                i18n.t('Select a level')
                            )
                        ),
                        _this.props.levelOptions.map(function (option) {
                            return React.createElement(
                                MenuItem,
                                { key: option.id, value: option.id },
                                option.displayName
                            );
                        })
                    )
                ),
                React.createElement(
                    Grid,
                    { item: true, xs: 4 },
                    React.createElement(
                        InputLabel,
                        { htmlFor: 'group' },
                        i18n.t('Group')
                    ),
                    React.createElement(
                        Select,
                        {
                            value: _this.props.group,
                            onChange: _this.props.onGroupChange,
                            input: React.createElement(Input, { name: 'group', id: 'group' }),
                            renderValue: _this.renderGroupOptions,
                            disabled: _this.props.userOrgUnits.length > 0,
                            multiple: true,
                            displayEmpty: true,
                            fullWidth: true
                        },
                        React.createElement(
                            MenuItem,
                            { value: '' },
                            React.createElement(
                                'em',
                                null,
                                i18n.t('Select a group')
                            )
                        ),
                        _this.props.groupOptions.map(function (option) {
                            return React.createElement(
                                MenuItem,
                                { key: option.id, value: option.id },
                                option.displayName
                            );
                        })
                    )
                )
            );
        };

        _this.render = function () {
            return React.createElement(
                Fragment,
                null,
                React.createElement(
                    'div',
                    { style: styles.orgUnitsContainer },
                    React.createElement(
                        'div',
                        { style: styles.scrollableContainer.index },
                        React.createElement(
                            'div',
                            { style: styles.userOrgUnits.index },
                            React.createElement(UserOrgUnitsPanel, {
                                styles: styles.userOrgUnits,
                                userOrgUnits: _this.props.userOrgUnits,
                                handleUserOrgUnitClick: _this.props.handleUserOrgUnitClick
                            })
                        ),
                        React.createElement(
                            'div',
                            { style: styles.scrollableContainer.overlayContainer },
                            _this.props.userOrgUnits.length > 0 && React.createElement('div', { style: styles.scrollableContainer.overlay }),
                            React.createElement(OrgUnitTree, {
                                root: _this.props.root,
                                selected: _this.props.selected.map(function (orgUnit) {
                                    return orgUnit.path;
                                }),
                                initiallyExpanded: _this.state.initiallyExpanded,
                                onSelectClick: _this.props.handleOrgUnitClick,
                                onExpand: _this.onExpand,
                                onCollapse: _this.onCollapse,
                                treeStyle: styles.orgUnitTree.treeStyle,
                                labelStyle: styles.orgUnitTree.labelStyle,
                                selectedLabelStyle: styles.orgUnitTree.selectedLabelStyle,
                                showFolderIcon: true,
                                disableSpacer: true
                            })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    _this.renderOptionsPanel()
                )
            );
        };

        _this.state = {
            initiallyExpanded: _this.props.selected.map(function (ou) {
                return removeLastPathSegment(ou.path);
            })
        };
        return _this;
    }

    _createClass(OrgUnitSelector, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            // if props.selected.length changed by more than 1, then another analytic object was selected
            if (Math.abs(prevProps.selected.length - this.props.selected.length) > 1) {
                // In this case refresh expanded org units
                this.setState({
                    initiallyExpanded: this.props.selected.map(function (ou) {
                        return removeLastPathSegment(ou.path);
                    })
                });
            } else {
                // If props.selected.length changed by 1 or didnt change
                // then check if analytic object was changed by comparing ids
                // if more than 1 ids are different, then and we should refresh expanded org units
                var counter = 0;

                var orgUnits = prevProps.selected.length < this.props.selected.length ? prevProps.selected : this.props.selected;

                for (var i = 0; i < orgUnits.length; ++i) {
                    if (prevProps.selected[i].id !== this.props.selected[i].id) {
                        counter += 1;

                        if (counter > 1) {
                            this.setState({
                                initiallyExpanded: this.props.selected.map(function (ou) {
                                    return removeLastPathSegment(ou.path);
                                })
                            });

                            break;
                        }
                    }
                }
            }
        }
    }]);

    return OrgUnitSelector;
}(Component);

OrgUnitSelector.propTypes = {
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
    root: PropTypes.object.isRequired
};

OrgUnitSelector.defaultProps = {
    selected: [],
    userOrgUnits: [],
    level: [],
    group: [],
    levelOptions: [],
    groupOptions: []
};

export default OrgUnitSelector;