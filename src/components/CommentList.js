import React, { Component } from 'react';

import PropTypes from 'prop-types';


const Comment = (props) => {
    const { comment } = props;
    return (
        <li>
            <span><b>{comment.user}</b></span><br />
            {comment.message}
        </li>
    );
}


class CommentList extends Component {

    renderMessageList = () => {
        return (
            (this.props.comments)
                ? this.props.comments.map( (comment, index) => {
                    return <Comment key={index} comment={comment} />
                })
                : <li>No comments to display</li>
        );
    }

    render () {
        return (
            <ul>{this.renderMessageList()}</ul>
        );
    }
}


// ============================================================
// -- PropTypes -- 
CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}


export default CommentList;