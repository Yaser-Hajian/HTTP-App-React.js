import React, {useState} from 'react';
import styles from './NewCommentStyle.module.css'
import axios from "axios";

const NewComment = ({addNewCommentHandler}) => {
    const [newComment, setNewComment] = useState({name: "", email: "", body: ""});
    const changeHandler = (event)=>{
        setNewComment({...newComment , [event.target.name] : event.target.value});
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        if (newComment.name === ""){
            alert("please enter your name");
        }else if (newComment.email === ""){
            alert("please enter your email");
        }else if (newComment.body === ""){
            alert("please enter the body of new comment");
        }else {
            axios.post("http://localhost:3001/comments" , newComment)
                .then(response => addNewCommentHandler())
                .catch(error => console.log(error))
            setNewComment({name: "" ,email: "",body: ""})

        }
    }
    return (
        <div className={styles.container}>
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
                    <input type="text"
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
