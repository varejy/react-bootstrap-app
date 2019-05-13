import React, { Component } from 'react';

import styles from './addComments.css';

class AddComments extends Component {
    constructor (props) {
        super(props);

        this.state = {
            inputText: ''
        };
    }

    hendlePushInput = (elem) => {
        if (elem.key === 'Enter') {
            elem.preventDefault();
        }
    }

    hendleClickButton = (elem) => {
        elem.preventDefault();
    }

    hendleChangeInputText = (value) => {
        this.setState({
            inputText: value.target.value
        });
    }
    render () {
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
