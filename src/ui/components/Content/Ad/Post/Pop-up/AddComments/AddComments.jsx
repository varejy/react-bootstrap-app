import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import styles from './addComments.css';

import setPosts from '../../../../../../../actions/setPosts';

class AddComments extends Component {
    static propTypes = {
        posts: PropTypes.array,
        setPosts: PropTypes.func.isRequired
    };

    static defaultProps = {
        posts: []
    };
    
    constructor (props) {
        super(props);

        this.state = {
            inputText: '',
            posts: []
        };
    }

    hendlePushInput = (elem) => {
        if (elem.key === 'Enter') {
            if (this.state.inputText !== '') {
                var setPosts = [];
                elem.preventDefault();
                this.setState((state, props) => setPosts.push({ avatar: user.userAvatar, users: user.userLogin, text: state.inputText, commentsLike: 0 }));
                this.setState({ inputText: '' });
                console.log(this.state.setComments);
            } else if (this.state.inputText === '') {
                elem.preventDefault();
            }
        }
    }

    hendleClickButton = (elem) => {
        elem.preventDefault();
        this.setState((state, props) => state.setComments.push({ avatar: user.userAvatar, users: user.userLogin, text: state.inputText, commentsLike: 0 }));
        this.setState({ inputText: '' });
        setPosts(this.state.setComments);
    }

    hendleChangeInputText = (value) => {
        this.setState({
            inputText: value.target.value
        });
    }
    render (props) {
        const { inputText } = this.state;
        return (
            <div className={styles.addComments}>
                <div className={styles.addCommentsWrapper}>
                    <form className={styles.addCommentsForm}>
                        <textarea
                            aria-label="Добавьте комментарий..."
                            placeholder="Добавьте комментарий..."
                            className={styles.addCommentsInput}
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

const mapStateToProps = ({ setPosts, user }) => {
    return {
        posts: setPosts.posts
    };
};

const mapDispatchToProps = (dispatch) => ({
    setPosts: () => dispatch(setPosts())
});
export default connect(mapStateToProps, mapDispatchToProps)(AddComments);
