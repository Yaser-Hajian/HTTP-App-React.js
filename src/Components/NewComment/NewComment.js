import React from 'react';
import styles from './NewCommentStyle.module.css'
const NewComment = () => {
    return (
        <div className={styles.container}>
            <form>
                <span>name: <input type="text" placeholder={"name"}/></span>
                <span>email: <input type="text" placeholder={"email"}/></span>
                <span>context: <input type="text" placeholder={"context"}/></span>
                <button className={styles.add} type={"submit"}>ADD</button>
            </form>

        </div>
    );
};

export default NewComment;
