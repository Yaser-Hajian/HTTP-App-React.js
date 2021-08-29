import React from 'react';
import styles from './FullCommentStyle.module.css'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from "../../Services/httpService";
const FullComment = ({clickedComment , reloadHandler}) => {
    const deleteHandler =()=>{
        http.delete("/comments/"+clickedComment.id)
            .then(res => {
                reloadHandler();
                toast.info("the comment has been deleted");
            })
            .catch(error => console.log(error))

    }
    return (
        <div className={styles.container}>
            <p>name: {clickedComment.name}</p>
            <p>email: {clickedComment.email}</p>
            <p>body: {clickedComment.body}</p>
            <button onClick={deleteHandler} className={styles.delete}>Delete</button>
        </div>
    );
};

export default FullComment;
