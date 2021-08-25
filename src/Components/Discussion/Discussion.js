import React from 'react';
import Comment from "../Comment/Comment";
import FullComment from "../FullComment/FullComment";
import NewComment from "../NewComment/NewComment";
import styles from './DiscussionStyle.module.css'
const Discussion = () => {
    return (
        <div className={styles.container}>
            <div className={styles.comments}>
                <Comment
                    name={"yaser"}
                    email={"yaser email"}
                />
                <Comment
                    name={"ali"}
                    email={"ali email"}
                />
                <Comment
                    name={"hasan"}
                    email={"hasan email"}
                />
            </div>
            <div>
                <FullComment
                    name={"Yaser Hajian"}
                    email={"yaser email"}
                    body={"the body of yaser`s email"}
                />
            </div>
            <div>
                <NewComment />
            </div>
        </div>
    );
};

export default Discussion;
