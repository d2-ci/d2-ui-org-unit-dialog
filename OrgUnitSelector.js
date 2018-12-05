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
import i18n from '@dhis2/d2-i18n';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './styles/OrgUnitSelector.style';
import UserOrgUnitsPanel from './UserOrgUnitsPanel';
import removeLastPathSegment from './util';
import GridControl from './GridControl';

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

        _this.onContextMenuClick = function (event, orgUnit, hasChildren, loadChildren) {
            if (!hasChildren) {
                return;
            }

            _this.setState({
                menuAnchorElement: event.currentTarget,
                loadingChildren: true
            }, function () {
                loadChildren().then(function (children) {
                    _this.setState({
                        children: Array.isArray(children) ? children : children.toArray(),
                        loadingChildren: false
                    });
                });
            });
        };

        _this.normalizeOptions = function (result, item) {
            return _extends({}, result, _defineProperty({}, item.id, item));
        };

        _this.selectChildren = function () {
            _this.closeContextMenu();

            _this.props.handleMultipleOrgUnitsSelect(_this.state.children);
        };

        _this.closeContextMenu = function () {
            _this.setState({ menuAnchorElement: null });
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
                'div',
                { style: styles.footer },
                React.createElement(
                    Grid,
                    { container: true },
                    React.createElement(GridControl, {
                        label: i18n.t('Level'),
                        placeholder: i18n.t('Select a level'),
                        value: _this.props.level,
                        onChange: _this.props.onLevelChange,
                        options: _this.props.levelOptions,
                        disabled: _this.props.userOrgUnits.length > 0,
                        renderValue: _this.renderLevelOptions,
                        multiple: true
                    }),
                    React.createElement(GridControl, {
                        label: i18n.t('Group'),
                        placeholder: i18n.t('Select a group'),
                        value: _this.props.group,
                        onChange: _this.props.onGroupChange,
                        options: _this.props.groupOptions,
                        disabled: _this.props.userOrgUnits.length > 0,
                        renderValue: _this.renderGroupOptions,
                        multiple: true
                    })
                )
            );
        };

        _this.render = function () {
            var tooltipStyles = _extends({}, styles.orgUnitsContainer.tooltip, {
                backgroundColor: _this.props.deselectAllTooltipBackgroundColor,
                color: _this.props.deselectAllTooltipFontColor
            });

            return React.createElement(
                Fragment,
                null,
                React.createElement(
                    'div',
                    { style: styles.orgUnitsContainer },
                    React.createElement(
                        'div',
                        { style: styles.scrollableContainer.index },
                        React.createElement(UserOrgUnitsPanel, {
                            selected: _this.props.selected,
                            styles: styles.userOrgUnits,
                            userOrgUnits: _this.props.userOrgUnits,
                            handleUserOrgUnitClick: _this.props.handleUserOrgUnitClick,
                            checkboxColor: _this.props.checkboxColor
                        }),
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
                                onContextMenuClick: _this.onContextMenuClick,
                                treeStyle: styles.orgUnitTree.treeStyle,
                                labelStyle: styles.orgUnitTree.labelStyle,
                                selectedLabelStyle: styles.orgUnitTree.selectedLabelStyle,
                                checkboxColor: _this.props.checkboxColor,
                                displayNameProperty: _this.props.displayNameProperty,
                                showFolderIcon: true,
                                disableSpacer: true
                            }),
                            React.createElement(
                                Menu,
                                {
                                    anchorEl: _this.state.menuAnchorElement,
                                    open: Boolean(_this.state.menuAnchorElement),
                                    onClose: _this.closeContextMenu
                                },
                                React.createElement(
                                    MenuItem,
                                    {
                                        onClick: _this.selectChildren,
                                        disabled: _this.state.loadingChildren,
                                        dense: true
                                    },
                                    i18n.t('Select children')
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { style: styles.orgUnitsContainer.tooltipContainer },
                        _this.props.selected.length > 0 && React.createElement(
                            'div',
                            { style: tooltipStyles },
                            _this.props.selected.length,
                            ' ',
                            i18n.t('selected'),
                            ' -',
                            React.createElement(
                                'button',
                                {
                                    onClick: _this.props.onDeselectAllClick,
                                    style: styles.orgUnitsContainer.tooltip.link
                                },
                                i18n.t('Deselect all')
                            )
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
            menuAnchorElement: null,
            children: null,
            loadingChildren: false,
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
                // eslint-disable-next-line
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
                            // eslint-disable-next-line
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
     * Display name property taken from user settings
     */
    displayNameProperty: PropTypes.string,

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
     * On deselect all click handler
     */
    onDeselectAllClick: PropTypes.func.isRequired,

    /**
     * Function for handling multiple org units select
     */
    handleMultipleOrgUnitsSelect: PropTypes.func.isRequired,

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

    /**
     * Font color for text in deselect all tooltip
     */
    deselectAllTooltipFontColor: PropTypes.string,

    /**
     * Font color for background in deselect all tooltip
     */
    deselectAllTooltipBackgroundColor: PropTypes.string,

    /**
     * Checkbox color in org unit tree
     */
    checkboxColor: PropTypes.string
};

OrgUnitSelector.defaultProps = {
    displayNameProperty: 'displayName',
    selected: [],
    userOrgUnits: [],
    level: [],
    group: [],
    levelOptions: [],
    groupOptions: [],
    checkboxColor: 'primary',
    deselectAllTooltipFontColor: 'white',
    deselectAllTooltipBackgroundColor: 'gray'
};

export default OrgUnitSelector;