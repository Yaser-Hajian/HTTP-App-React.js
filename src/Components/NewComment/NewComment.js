import React, {useState} from 'react';
import styles from './NewCommentStyle.module.css'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from "../../Services/httpService";

const NewComment = ({addNewCommentHandler}) => {
    const [newComment, setNewComment] = useState({name: "", email: "", body: ""});
    const changeHandler = (event)=>{
        setNewComment({...newComment , [event.target.name] : event.target.value});
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        if (newComment.name === ""){
            toast.warning("please enter your name");
            console.log("warning")
        }else if (newComment.email === ""){
            toast.warning("please enter your email");
        }else if (newComment.body === ""){
            toast.warning("please enter the body of new comment");
        }else {
            http.post("/comments" , newComment)
                .then(response => addNewCommentHandler())
                .catch(error => console.log(error))
            toast.success("your new comment added successfully");
            setNewComment({name: "" ,email: "",body: ""})

        }
    }
    return (
        <div className={styles.container}>
            <ToastContainer
                position="top-center"
                theme="colored"
                autoClose={3500}
            />
            <form onSubmit={submitHandler}>
                <span><label>name:</label>
                    <input type="text"
                           placeholder={"name"}
                           name={"name"}
                           onChange={changeHandler}
                           value={newComment.name}/>
                </span>
                <span><label>email:</label>
                    <input type="email"
                           placeholder={"email"}
                           name={"email"}
                           onChange={changeHandler}
                           value={newComment.email}/>
                </span>
                <span><label>context:</label>
                    <textarea type="text"
                           placeholder={"context"}
                           name={"body"}
                           onChange={changeHandler}
                           value={newComment.body}/>
                </span>
                <button className={styles.add} type={"submit"}>ADD</button>
            </form>

        </div>
    );
};

export default NewComment;
