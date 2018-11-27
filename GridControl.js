import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select/Select';
import styles from './styles/GridControl.style';

var GridControl = function GridControl(_ref) {
    var id = _ref.id,
        title = _ref.title,
        options = _ref.options,
        selectProps = _objectWithoutProperties(_ref, ['id', 'title', 'options']);

    return React.createElement(
        Grid,
        {
            item: true,
            xs: 4,
            style: styles.gridContainer.gridItem
        },
        React.createElement(
            FormControl,
            { style: { width: '100%' } },
            React.createElement(
                InputLabel,
                { htmlFor: id },
                title
            ),
            React.createElement(
                Select,
                _extends({
                    input: React.createElement(Input, { id: id })
                }, selectProps, {
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