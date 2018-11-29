import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import Checkbox from '@material-ui/core/Checkbox/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import StopIcon from '@material-ui/icons/Stop';
import userOrgUnits from './userOrgUnits';
import styles from './styles/UserOrgUnitsPanel';

var UserOrgUnitsPanel = function UserOrgUnitsPanel(props) {
    return React.createElement(
        'div',
        { style: styles.container },
        React.createElement(
            Grid,
            {
                container: true,
                direction: 'row',
                alignItems: 'center'
            },
            userOrgUnits.map(function (orgUnitType) {
                return React.createElement(
                    Grid,
                    {
                        key: orgUnitType.id,
                        item: true
                    },
                    React.createElement(Checkbox, {
                        checked: props.userOrgUnits.some(function (ouType) {
                            return ouType.id === orgUnitType.id;
                        }),
                        onChange: props.handleUserOrgUnitClick,
                        inputProps: {
                            id: orgUnitType.id,
                            name: orgUnitType.id
                        },
                        checkedIcon: React.createElement(CheckBoxIcon, { style: styles.checkbox }),
                        icon: React.createElement(CheckBoxOutlineBlankIcon, { style: styles.checkbox }),
                        color: 'primary'
                    }),
                    React.createElement(
                        InputLabel,
                        { htmlFor: orgUnitType.id },
                        React.createElement(StopIcon, { style: styles.stopIcon }),
                        React.createElement(
                            'span',
                            { style: styles.text },
                            orgUnitType.displayName
                        )
                    )
                );
            })
        )
    );
};

UserOrgUnitsPanel.propTypes = {
    selected: PropTypes.array.isRequired,
    userOrgUnits: PropTypes.array.isRequired,
    handleUserOrgUnitClick: PropTypes.func.isRequired
};

export default UserOrgUnitsPanel;