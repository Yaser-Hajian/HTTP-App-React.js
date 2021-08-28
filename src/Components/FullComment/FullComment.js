import React from 'react';
import styles from './FullCommentStyle.module.css'
const FullComment = ({clickedComment}) => {
    return (
        <div className={styles.container}>
            <p>name: {clickedComment.name}</p>
            <p>email: {clickedComment.email}</p>
            <p>body: {clickedComment.body}</p>
        </div>
    );
};

export default FullComment;
