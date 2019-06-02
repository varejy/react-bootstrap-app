import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './mobilePopUp.css';

import Comments from '../Comments/Comments.jsx';
import AddComments from '../AddComments/AddComments.jsx';
import setPosts from '../../../actions/setPosts';
import setTags from '../../../actions/setTags';

class MobilePopUp extends Component {
    static propTypes = {
        image: PropTypes.string,
        howMarked: PropTypes.string,
        outPopUp: PropTypes.func.isRequired,
        id: PropTypes.number,
        posts: PropTypes.object,
        user: PropTypes.object,
        setPosts: PropTypes.func.isRequired,
        setTags: PropTypes.func.isRequired
    };

    static defaultProps = {
        image: '',
        howMarked: '',
        id: 0,
        posts: {},
        user: {}
    };
    state = {
        itemId: this.props.id
    }
    hendleClickLeftButton = () => {
        this.setState({
            itemId: this.state.itemId - 1
        });
    }
    hendleClickRightButton = () => {
        this.setState({
            itemId: this.state.itemId + 1
        });
    }
    hendleClickLike = (howMarked) => () => {
        const { posts, tags } = this.props.posts;
        const { itemId } = this.state;
        if (howMarked === 'postsArray') {
            if (!posts[itemId].isLike) {
                posts[itemId].imgLike = posts[itemId].imgLike + 1;
                posts[itemId].isLike = !posts[itemId].isLike;

                this.props.setPosts({
                    ...this.props.posts,
                    posts
                });
            } else if (posts[itemId].isLike) {
                posts[itemId].imgLike = posts[itemId].imgLike - 1;
                posts[itemId].isLike = !posts[itemId].isLike;

                this.props.setPosts({
                    ...this.props.posts,
                    posts
                });
            }
        } else if (howMarked === 'tagsArray') {
            if (!tags[itemId].isLike) {
                tags[itemId].imgLike = tags[itemId].imgLike + 1;
                tags[itemId].isLike = !tags[itemId].isLike;

                this.props.setTags({
                    ...this.props.posts,
                    tags
                });
            } else if (tags[itemId].isLike) {
                tags[itemId].imgLike = tags[itemId].imgLike - 1;
                tags[itemId].isLike = !tags[itemId].isLike;

                this.props.setTags({
                    ...this.props.posts,
                    tags
                });
            }
        }
    };
    render (props) {
        const { howMarked, user, outPopUp } = this.props;
        const { itemId } = this.state;
        const { imgUrl, comments, imgLike, isLike } = howMarked === 'postsArray' ? this.props.posts.posts[itemId] : this.props.posts.tags[itemId];
        return (<div className={classNames(styles.PopUpActive, styles.ShowItemWrapp)}>
            <div className={styles.screen}></div>
            <div className={styles.itemDetail}>
                <div className={styles.itemInfoWrapp}>
                    <header className={styles.exitHeader}>
                        <div className={styles.exitHeaderButton} onClick={() => outPopUp()}></div>
                        <div className={styles.exitHeaderUserLogin}>Фото</div>
                    </header>
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
                    <div className={styles.itemImageDetail}>
                        <img className={styles.itemImg} src={imgUrl} />
                    </div>
                    <div className={styles.itemOptions}>
                        <div className={styles.iconWrapp}>
                            <div className={styles.sharesButtons}>
                                <div
                                    className={classNames(styles.likesIcon, styles.optionsIcons, { [styles.likesIconActive]: isLike })}
                                    onClick={this.hendleClickLike(howMarked)}
                                ></div>
                                <div className={classNames(styles.commentsIcon, styles.optionsIcons)}></div>
                                <div className={classNames(styles.shareIcon, styles.optionsIcons)}></div>
                            </div>
                            <div className={classNames(styles.savesImage, styles.optionsIcons)}></div>
                        </div>
                        <div className={styles.likes}><span>{imgLike}</span> { imgLike === 1 ? 'отметка' : 'отметок' } "Нравится"</div>
                    </div>
                    <AddComments id={itemId} howMarked={howMarked}/>
                    <div className={styles.commentsWrapp}>
                        <div className={styles.comments}>
                            <ul>
                                {
                                    comments.map((comment) =>
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
                    </div>
                </div>
            </div>
        </div>);
    };
};
const mapStateToProps = ({ posts, user }) => {
    return {
        posts: posts.posts,
        user: user.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    setPosts: (payload) => dispatch(setPosts(payload)),
    setTags: (payload) => dispatch(setTags(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(MobilePopUp);
