import React from 'react';
import styles from './NewCommentStyle.module.css'
const NewComment = () => {
    return (
        <div className={styles.container}>
            <form>
                <span><label>name:</label> <input type="text" placeholder={"name"}/></span>
                <span><label>email:</label> <input type="email" placeholder={"email"}/></span>
                <span><label>context:</label> <input type="text" placeholder={"context"}/></span>
                <button className={styles.add} type={"submit"}>ADD</button>
            </form>

        </div>
    );
};

export default NewComment;
