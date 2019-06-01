import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import PropTypes from 'prop-types';

import styles from './addComments.css';

import setPosts from '../../../actions/setPosts';

class AddComments extends Component {
    static propTypes = {
        posts: PropTypes.object,
        howMarked: PropTypes.string,
        id: PropTypes.number,
        user: PropTypes.object,
        setPosts: PropTypes.func.isRequired
    };

    static defaultProps = {
        posts: {},
        user: {},
        howMarked: '',
        id: 0
    };
    constructor (props) {
        super(props);

        this.state = {
            inputText: '',
            isLetterLimit: false,
            posts: []
        };
    }

    hendlePushInput = (elem) => {
        const { posts } = this.props;
        const post = this.props.howMarked === 'postsArray' ? posts.posts : posts.tags;
        const { id, user, setPosts } = this.props;
        const { inputText } = this.state;
        if (elem.key === 'Enter') {
            if (this.state.inputText !== '') {
                elem.preventDefault();
                post[id].comments.push({
                    avatar: user.userAvatar,
                    users: user.userLogin,
                    id: post[id].comments.length + 1,
                    text: inputText,
                    commentLike: 0,
                    isLike: false
                });
                setPosts({
                    ...posts,
                    post
                });
                this.setState({ inputText: '' });
            } else if (this.state.inputText === '') {
                elem.preventDefault();
                this.setState({ inputText: '' });
            }
        }
    }

    hendleClickButton = (elem) => {
        if (this.state.inputText === '') {
            elem.preventDefault();
            this.setState({ inputText: '' });
        } else {
            const { posts } = this.props;
            const post = this.props.howMarked === 'postsArray' ? posts.posts : posts.tags;
            const { id, user, setPosts } = this.props;
            const { inputText } = this.state;
            elem.preventDefault();
            post[id].comments.push({
                avatar: user.userAvatar,
                users: user.userLogin,
                id: post[id].comments.length + 1,
                text: inputText,
                commentLike: 0,
                isLike: false
            });
            setPosts({
                ...posts,
                post
            });
            this.setState({ inputText: '' });
        }
    }

    hendleChangeInputText = (value) => {
        if (this.state.inputText.length < 100) {
            this.setState({
                inputText: value.target.value
            });
        } else {
            this.setState({
                isLetterLimit: !this.state.isLetterLimit
            });
        }
    }
    render (props) {
        const { inputText, isLetterLimit } = this.state;
        return (
            <div className={styles.addComments}>
                <div className={styles.addCommentsWrapper}>
                    <form className={styles.addCommentsForm}>
                        <textarea
                            aria-label="Добавьте комментарий..."
                            placeholder="Добавьте комментарий..."
                            className={classNames(styles.addCommentsInput, { [styles.addCommentsInputValid]: isLetterLimit })}
                            autoComplete="off"
                            autoCorrect="off"
                            onKeyDown={this.hendlePushInput}
                            onChange={this.hendleChangeInputText}
                            style={{ height: '18px' }}
                            value={inputText}
                            required
                        ></textarea>
                        <button className={styles.addCommentsButton} onClick={this.hendleClickButton} type="submit">Опубликовать</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ posts, user }) => {
    return {
        posts: posts.posts,
        user: user.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    setPosts: (payload) => dispatch(setPosts(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(AddComments);
