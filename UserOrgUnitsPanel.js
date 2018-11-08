import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import StopIcon from '@material-ui/icons/Stop';
import userOrgUnits from './userOrgUnits';

var UserOrgUnitsPanel = function UserOrgUnitsPanel(props) {
    return React.createElement(
        Grid,
        {
            container: true,
            direction: 'row',
            justify: 'center',
            alignItems: 'center'
        },
        userOrgUnits.map(function (orgUnitType) {
            return React.createElement(
                Grid,
                { key: orgUnitType.id, item: true },
                React.createElement(Checkbox, {
                    checked: props.userOrgUnits.some(function (ouType) {
                        return ouType.id === orgUnitType.id;
                    }),
                    onChange: props.handleUserOrgUnitClick,
                    inputProps: {
                        id: orgUnitType.id,
                        name: orgUnitType.id
                    },
                    checkedIcon: React.createElement(CheckBoxIcon, { style: props.styles.checkbox }),
                    icon: React.createElement(CheckBoxOutlineBlankIcon, { style: props.styles.checkbox }),
                    color: 'primary'
                }),
                React.createElement(
                    InputLabel,
                    { htmlFor: orgUnitType.id },
                    React.createElement(StopIcon, { style: props.styles.stopIcon }),
                    React.createElement(
                        'span',
                        { style: props.styles.text },
                        orgUnitType.displayName
                    )
                )
            );
        })
    );
};

UserOrgUnitsPanel.defaultProps = {
    styles: undefined
};

UserOrgUnitsPanel.propTypes = {
    styles: PropTypes.object,
    userOrgUnits: PropTypes.array.isRequired,
    handleUserOrgUnitClick: PropTypes.func.isRequired
};

export default UserOrgUnitsPanel;