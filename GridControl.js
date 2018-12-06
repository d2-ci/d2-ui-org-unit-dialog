import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select/Select';
import styles from './styles/GridControl.style';

var GridControl = function GridControl(_ref) {
    var label = _ref.label,
        placeholder = _ref.placeholder,
        options = _ref.options,
        selectProps = _objectWithoutProperties(_ref, ['label', 'placeholder', 'options']);

    var renderValue = function renderValue(selected) {
        if (selected.length === 0) {
            return React.createElement(
                'span',
                { style: styles.placeholder },
                placeholder
            );
        }

        return selectProps.renderValue(selected);
    };

    return React.createElement(
        Grid,
        {
            style: styles.gridItem,
            xs: 4,
            item: true
        },
        React.createElement(
            FormControl,
            { style: { width: '100%' } },
            React.createElement(
                'span',
                { style: styles.label },
                label
            ),
            React.createElement(
                Select,
                _extends({}, selectProps, {
                    renderValue: renderValue,
                    displayEmpty: true,
                    fullWidth: true
                }),
                options.map(function (option) {
                    return React.createElement(
                        MenuItem,
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

export default GridControl;