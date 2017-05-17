//CommentList.js
import React, { Component } from 'react';
import Comment from './Comment';
import style from './style';
class CommentList extends Component {
    render() {
        let commentNodes = this.props.data.map(comment => {
            return (
                <Comment key={ comment['_id'] } author={ comment.author }>
                    { comment.text}
                </Comment>
            )
        })
        return (
            <div style={ style.commentList }>
                { commentNodes }
            </div>
        )
    }
}
export default CommentList;
