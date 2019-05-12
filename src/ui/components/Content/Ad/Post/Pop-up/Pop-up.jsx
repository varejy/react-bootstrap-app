import React, { Component } from 'react';

import styles from './Pop-up.css';

import user from '../../../shared/user';

import Comments from './Comments/Comments.jsx';

class PopUp extends Component {
    render (props) {
        const { image, comments } = this.props;
        return (<div className={styles.ShowItemWrapp}>
            <div className={styles.itemDetail}>
                <div className={styles.itemImageDetail}>
                    <img className={styles.itemImg} src={image} />
                </div>
                <div className={styles.itemInfoWrapp}>
                    <header className={styles.itemInfoHeader}>
                        <div className={styles.itemInfoHeaderUser}>
                            <div className={styles.InfoHeaderAvatar}>
                                <img className={styles.InfoHeaderAvatarImg} src={user.userAvatar}></img>
                            </div>
                            <div className={styles.InfoHeaderUserInfo}>
                                {user.userLogin}
                            </div>
                        </div>
                        <div className={styles.InfoHeaderOptions}></div>
                    </header>
                    <div className={styles.commentsWrapp}>
                        <ul>
                            {
                                comments.map((comment) =>
                                    <Comments
                                        commentsUsersAvatar={comment.avatar}
                                        usersNames={comment.users}
                                        comment={comment.text}
                                        commentLike={comment.commentLike}
                                    />
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>);
    };
};

export default PopUp;
