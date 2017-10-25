import React, { Component } from 'react';

class CommentList extends Component {
    render () {
        return (
            <ul>
                <li>
                    <span><b>User1234</b></span><br />
                    Phasellus quis tortor turpis.
                </li>
                <li>
                    <span><b>User4321</b></span><br />
                    Aenean euismod consectetur tellus eu dignissim.
                </li>
            </ul>
        );
    }
}

export default CommentList;