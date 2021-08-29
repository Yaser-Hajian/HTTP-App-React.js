import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";
import FullComment from "../FullComment/FullComment";
import NewComment from "../NewComment/NewComment";
import styles from './DiscussionStyle.module.css'
import http from "../../Services/httpService";
const Discussion = () => {
    const [comments, setComments] = useState(null);
    const [clickedComment, setClickedComment] = useState("");
    useEffect(() => {
        http.get("/comments")
            .then((response) => {
                setComments(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    const changeCommentsHandler=()=>{
        http.get("/comments")
            .then((response) => {
                setComments(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const reloadAfterDeleteHandler=()=>{
        setClickedComment("");
        http.get("/comments")
            .then((response) => {
                setComments(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className={styles.container}>
            <div className={styles.comments}>
                {
                    comments ?
                        (comments.map(c => {
                            return <Comment
                                name={c.name}
                                email={c.email}
                                key={c.id}
                                clickHandler={() => setClickedComment(c)}
                            />
                        }))
                        :
                        (<p>loading comments ...</p>)
                }
            </div>
            <div>
                {
                    clickedComment ?
                        (<FullComment clickedComment={clickedComment} reloadHandler={reloadAfterDeleteHandler}/>)
                        :
                        (<p>choose one of the comments</p>)
                }

            </div>
            <div>
                <NewComment addNewCommentHandler={changeCommentsHandler}/>
            </div>
        </div>
    );
};

export default Discussion;
