import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Pop-up.css';

import user from '../../../shared/user';

import Comments from './Comments/Comments.jsx';
import AddComments from './AddComments/AddComments.jsx';

class PopUp extends Component {
    constructor (props) {
        super(props);

        this.state = {
            image: '',
            imageLike: 0,
            comments: []
        };
    }
    componentDidMount = () => {
        this.setState((state, props) => {
            return {
                image: props.image,
                imageLike: props.imageLike,
                comments: props.comments
            };
        });
    }
    render (props) {
        const { image, comments } = this.state;
        const { outPopUp } = this.props;
        comments.reverse();
        return (<div className={classNames(styles.PopUpActive, styles.ShowItemWrapp)}>
            <div className={styles.screen} onClick={() => outPopUp()}></div>
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
                    <div className={styles.itemOptions}>
                        <div className={styles.sharesButtons}>
                            <div className={classNames(styles.likesIcon, styles.optionsIcons)}></div>
                            <div className={classNames(styles.commentsIcon, styles.optionsIcons)}></div>
                            <div className={classNames(styles.shareIcon, styles.optionsIcons)}></div>
                        </div>
                        <div className={classNames(styles.savesImage, styles.optionsIcons)}></div>
                    </div>
                    <AddComments/>
                </div>
            </div>
        </div>);
    };
};

export default PopUp;
