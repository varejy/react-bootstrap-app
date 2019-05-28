import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Pop-up.css';

import Comments from '../Comments/Comments.jsx';
import AddComments from '../AddComments/AddComments.jsx';
import setPosts from '../../../actions/setPosts';
import setTags from '../../../actions/setTags';

class PopUp extends Component {
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
    hendleClickLike = (i, howMarked) => () => {
        const { posts, tags } = this.props.posts;
        if (howMarked === 'postsArray') {
            if (!posts[i].isLike) {
                posts[i].imgLike = posts[i].imgLike + 1;
                posts[i].isLike = !posts[i].isLike;

                this.props.setPosts({
                    ...this.props.posts,
                    posts
                });
            } else if (posts[i].isLike) {
                posts[i].imgLike = posts[i].imgLike - 1;
                posts[i].isLike = !posts[i].isLike;

                this.props.setPosts({
                    ...this.props.posts,
                    posts
                });
            }
        } else if (howMarked === 'tagsArray') {
            if (!tags[i].isLike) {
                tags[i].imgLike = tags[i].imgLike + 1;
                tags[i].isLike = !tags[i].isLike;

                this.props.setTags({
                    ...this.props.posts,
                    tags
                });
            } else if (tags[i].isLike) {
                tags[i].imgLike = tags[i].imgLike - 1;
                tags[i].isLike = !tags[i].isLike;

                this.props.setTags({
                    ...this.props.posts,
                    tags
                });
            }
        }
    };
    render (props) {
        const { image, id, howMarked } = this.props;
        const { comments, imgLike } = howMarked === 'postsArray' ? this.props.posts.posts[id] : this.props.posts.tags[id];
        const { user } = this.props;
        const { outPopUp } = this.props;
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
                        <div className={styles.iconWrapp}>
                            <div className={styles.sharesButtons}>
                                <div className={classNames(styles.likesIcon, styles.optionsIcons)} onClick={this.hendleClickLike(id, howMarked)}></div>
                                <div className={classNames(styles.commentsIcon, styles.optionsIcons)}></div>
                                <div className={classNames(styles.shareIcon, styles.optionsIcons)}></div>
                            </div>
                            <div className={classNames(styles.savesImage, styles.optionsIcons)}></div>
                        </div>
                        <div className={styles.likes}><span>{imgLike}</span> { imgLike < 2 && imgLike > 0 ? 'отметка' : 'отметок' } "Нравится"</div>
                    </div>
                    <AddComments/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
