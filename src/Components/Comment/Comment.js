import React from 'react';
import styles from './CommentStyle.module.css'
const Comment = ({name , email}) => {
    return (
        <div className={styles.container}>
            <p>name: {name}</p>
            <p>email: {email}</p>
        </div>
    );
};

export default Comment;
