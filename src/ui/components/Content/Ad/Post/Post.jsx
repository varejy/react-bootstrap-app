import React, { Component } from 'react';

import styles from './post.css';

import PopUp from './Pop-up/Pop-up.jsx';

class Post extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isShowPopUp: false
        };
    }
    hendleClickItem = () => {
        this.setState({
            isShowPopUp: !this.state.isShowPopUp
        });
    }
    hendleClickPopUp = (isClick) => {
        this.setState({
            isShowPopUp: isClick
        });
    }
    render (props) {
        const { imgUrl, imgLike, comments } = this.props;
        return (<li className={styles.item}>
            <img className={styles.itemImage} src={imgUrl} />
            <div className={styles.itemInfo} onClick={this.hendleClickItem}>
                <div className={styles.itemsInfo}><span id={styles.itemLikeImg}></span><h2>{imgLike}</h2></div>
                <div className={styles.itemsInfo}><span id={styles.itemCommentsImg}></span><h2>{comments.length}</h2></div>
            </div>
            {
                this.state.isShowPopUp
                    ? <PopUp
                        image={imgUrl}
                        comments={comments}
                        OutPopUp={this.hendleClickPopUp}
                    />
                    : <span></span>
            }
        </li>);
    }
}

export default Post;
