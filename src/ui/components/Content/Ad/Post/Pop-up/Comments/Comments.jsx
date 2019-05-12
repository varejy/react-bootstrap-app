import React, { Component } from 'react';

import styles from './comments.css';

class Comments extends Component {
    render () {
        const { commentsUsersAvatar, usersNames, comment, commentLike } = this.props;
        return (
            <li className={styles.commentsWrapper}>
                <div className={styles.InfoAvatar}>
                    <img className={styles.InfoAvatarImg} src={commentsUsersAvatar}></img>
                </div>
                <div className={styles.commentWrapp}>
                    <div className={styles.comment}>
                        <p className={styles.comments}><div className={styles.usersNames}>{usersNames}</div>{comment}</p>
                    </div>
                    <div className={styles.commentsInfo}>
                        <p className={styles.commentTime}>41 мин.</p>
                        <div className={styles.commentLikesWrapp}>
                            <a className={styles.commentLink} href="/">"Нравиться": {commentLike}</a>
                        </div>
                        <div className={styles.commentAnswer}>
                            <a className={styles.commentLink} href="/">Ответить</a>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Comments;
