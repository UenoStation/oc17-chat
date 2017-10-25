import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';


const TextInput = ({name, label, onChange, placeholder, value, error}) => {
    return (
        <FormControl margin="dense">
            <Input 
                id={name} 
                placeholder={placeholder}
                value={value} 
                onChange={onChange} />
        </FormControl>
    )
}


// ============================================================
// -- PropTypes -- 
TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
}

export default TextInput;