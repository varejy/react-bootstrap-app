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
            isShowPopUp: true
        });
    }
    render (props) {
        const { imgUrl, imgLike, comments } = this.props;
        return (<li className={styles.item} onClick={this.hendleClickItem}>
            <img className={styles.itemImage} src={imgUrl} />
            <div className={styles.itemInfo}>
                <div className={styles.itemsInfo}><span id={styles.itemLikeImg}></span><h2>{imgLike}</h2></div>
                <div className={styles.itemsInfo}><span id={styles.itemCommentsImg}></span><h2>{comments.length}</h2></div>
            </div>
            {
                this.state.isShowPopUp
                    ? <PopUp
                        className={styles.PopUp}
                        image={imgUrl}
                        comments={comments}
                    />
                    : <span></span>
            }
        </li>);
    }
}

export default Post;
