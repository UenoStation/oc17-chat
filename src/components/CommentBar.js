import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../common/TextInput';

import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';


class CommentBar extends Component {

    state = {
        comment: ''
    }

    onChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    }

    onSave = () => {
        this.props.submitHandler(this.state.comment);
        this.setState({comment: ''});
    }

    render () {
        const placeholder = `Write something ${this.props.user}`;
        return (
            <div>
                <TextInput 
                    name="cmmt"
                    placeholder={placeholder}
                    value={this.state.comment}
                    onChange={this.onChange}
                />
                <Button onClick={this.onSave}>Submit</Button>
            </div>
        );
    }
}


// ============================================================
// -- PropTypes -- 
CommentBar.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired
}

export default CommentBar;