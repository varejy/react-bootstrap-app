import React, { Component } from 'react';

import styles from './openImage.css';

import user from '../../shared/user';

class OpenImage extends Component {
    constructor (props) {
        super(props);

        this.state = {};
    }
    render (props) {
        const { image, commentsUsersAvatar, usersNames, comment } = this.props;
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
                            <li className={styles.commentsWrapper}>
                                <div className={styles.InfoHeaderAvatar}>
                                    <img className={styles.InfoHeaderAvatarImg} src={commentsUsersAvatar}></img>
                                </div>
                                <div className={styles.commentWrapp}>
                                    <div className={styles.comment}>
                                        <p className={styles.comments}><div className={styles.usersNames}>{usersNames}</div>{comment}</p>
                                    </div>
                                    <div className={styles.commentsInfo}>
                                        <p className={styles.commentTime}>41 мин.</p>
                                        <div className={styles.commentLikesWrapp}>
                                            <a className={styles.commentLink} href="/">"Нравиться":12</a>
                                        </div>
                                        <div className={styles.commentAnswer}>
                                            <a className={styles.commentLink} href="/">Ответить</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>);
    };
};

export default OpenImage;
