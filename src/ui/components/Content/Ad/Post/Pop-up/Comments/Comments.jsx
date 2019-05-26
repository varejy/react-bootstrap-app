import React, { Component } from 'react';

import styles from './comments.css';

class Comments extends Component {
    constructor (props) {
        super(props);

        this.state = {
            image: '',
            userNames: '',
            commentLike: 0,
            comment: ''
        };
    }

    render () {
        const { image, userNames, comment, commentLike } = this.props;
        return (
            <li className={styles.commentsWrapper}>
                <div className={styles.InfoAvatar}>
                    <img className={styles.InfoAvatarImg} src={image}></img>
                </div>
                <div className={styles.commentWrapp}>
                    <div className={styles.comment}>
                        <span className={styles.comments}><div className={styles.usersNames}>{userNames}</div>{comment}</span>
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
