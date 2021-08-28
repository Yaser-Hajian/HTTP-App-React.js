import React from 'react';
import styles from './CommentStyle.module.css'
const Comment = ({name , email , clickHandler}) => {
    return (
        <div className={styles.container} onClick={clickHandler}>
            <p>name: {name}</p>
            <p>email: {email}</p>
        </div>
    );
};

export default Comment;
