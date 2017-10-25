import React, { Component } from 'react';

import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';


class CommentBar extends Component {

    state = {
        comment: ''
    }

    onChange = () => {

    }

    onSave = () => {

    }

    render () {
        return (
            <div>
                <FormControl margin="dense">
                    <Input 
                        id="cmmt" 
                        placeholder="Write something User1234"
                        value={this.state.comment} 
                        onChange={this.onChange} />
                </FormControl>
                <Button onClick={this.onSave}>Add</Button>
            </div>
        );
    }
}

export default CommentBar;