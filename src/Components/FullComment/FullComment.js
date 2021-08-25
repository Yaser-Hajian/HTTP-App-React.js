import React from 'react';
import styles from './FullCommentStyle.module.css'
const FullComment = ({name , email , body}) => {
    return (
        <div className={styles.container}>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default FullComment;
