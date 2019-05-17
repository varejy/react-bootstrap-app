import React, { Component } from 'react';

import styles from './addComments.css';
import user from '../../../../shared/user';

import setPostInfo from '../../../../../../../actions/setPostInfo';

class AddComments extends Component {
    constructor (props) {
        super(props);

        this.state = {
            inputText: '',
            setComments: []
        };
    }

    hendlePushInput = (elem) => {
        if (elem.key === 'Enter' && this.state.inputText !== '') {
            elem.preventDefault();
            this.setState((state, props) => state.setComments.push({ avatar: user.userAvatar, users: user.userLogin, text: state.inputText, commentsLike: 0 }));
            this.setState({ inputText: '' });
            setPostInfo(this.state.setComments);
            console.log(this.state.setComments);
        } else if (elem.key === 'Enter' && this.state.inputText === '') {
            elem.preventDefault();
        }
    }

    hendleClickButton = (elem) => {
        elem.preventDefault();
        this.setState((state, props) => state.setComments.push({ avatar: user.userAvatar, users: user.userLogin, text: state.inputText, commentsLike: 0 }));
        this.setState({ inputText: '' });
        setPostInfo(this.state.setComments);
        /*
        this.setState((state, props) => state.setComments.push({ avatar: user.userAvatar, users: user.userLogin, text: state.inputText, commentsLike: 0 }));
        this.setState({ inputText: '' });
        console.log(this.state.setComments);
        */
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

export default AddComments;
