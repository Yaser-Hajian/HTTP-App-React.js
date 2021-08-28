import React, {useEffect, useState} from 'react';
import Comment from "../Comment/Comment";
import FullComment from "../FullComment/FullComment";
import NewComment from "../NewComment/NewComment";
import styles from './DiscussionStyle.module.css'
import axios from "axios";

const Discussion = () => {
    const [comments, setComments] = useState(null);
    const [clickedComment, setClickedComment] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setComments(response.data.slice(0, 4))
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
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
                        (<FullComment clickedComment={clickedComment}/>)
                        :
                        (<p>choose one of the comments</p>)
                }

            </div>
            <div>
                <NewComment/>
            </div>
        </div>
    );
};

export default Discussion;
