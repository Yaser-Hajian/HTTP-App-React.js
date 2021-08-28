import React from 'react';
import styles from './FullCommentStyle.module.css'
import axios from "axios";
const FullComment = ({clickedComment , reloadHandler}) => {
    const deleteHandler =()=>{
        axios.delete("http://localhost:3001/comments/"+clickedComment.id)
            .then(res => reloadHandler())
            .catch(error => console.log(error))
    }
    return (
        <div className={styles.container}>
            <p>name: {clickedComment.name}</p>
            <p>email: {clickedComment.email}</p>
            <p>body: {clickedComment.body}</p>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
};

export default FullComment;
