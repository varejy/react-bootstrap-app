import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import styles from './Pop-up.css';

import Comments from './Comments/Comments.jsx';
import AddComments from './AddComments/AddComments.jsx';
import setPosts from '../../../../../../actions/setPosts';

class PopUp extends Component {
    constructor (props) {
        super(props);

        this.state = {
            posts: [],
            image: '',
            imageLike: 0,
            imageComments: 0
        };
    }
    componentDidMount = () => {
        this.setState((state, props) => {
            return {
                posts: props.posts,
                image: this.props.image,
                imageLike: this.props.imageLike,
                imageComments: this.props.comments
            };
        });
    }
    render (props) {
        const { image, imageComments, imageLike } = this.state;
        const { user } = this.props;
        const { outPopUp } = this.props;
        console.log(imageComments);
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
                                imageComments.map((comment) =>
                                    <Comments
                                        key={comment.id}
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
const mapStateToProps = ({ setPosts, user }) => {
    return {
        posts: setPosts.posts,
        user: user.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    setPosts: () => dispatch(setPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
