import React, {useState} from 'react';
import styles from './NewCommentStyle.module.css'
import axios from "axios";

const NewComment = () => {
    const [newComment, setNewComment] = useState({name: "", email: "", content: ""});
    const changeHandler = (event)=>{
        setNewComment({...newComment , [event.target.name] : event.target.value});
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        if (newComment.name === ""){
            alert("please enter your name");
        }else if (newComment.email === ""){
            alert("please enter your email");
        }else if (newComment.content === ""){
            alert("please enter the content on new comment");
        }else {
            axios.post("https://jsonplaceholder.typicode.com/comments" , newComment)
                .then(response => console.log(response))
                .catch(error => console.log(error))
            setNewComment({name: "" ,email: "",content: ""})
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
                           name={"content"}
                           onChange={changeHandler}
                           value={newComment.content}/>
                </span>
                <button className={styles.add} type={"submit"}>ADD</button>
            </form>

        </div>
    );
};

export default NewComment;
