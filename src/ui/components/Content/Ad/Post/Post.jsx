import React, { Component } from 'react';

import styles from './post.css';

import PopUp from './Pop-up/Pop-up.jsx';

class Post extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isShowPopUp: false,
            image: '',
            imageLike: 0,
            comments: [],
            id: 0
        };
    }
    hendleClickItem = () => {
        this.setState({
            isShowPopUp: !this.state.isShowPopUp,
        });
    }
    hendleClickPopUp = () => {
        this.setState({
            isShowPopUp: false
        });
    }

    componentWillMount = () => {
        this.setState((state, props) => {
            return {
                image: props.imgUrl,
                imageLike: props.imgLike,
                comments: props.comments,
                id: props.id
            };
        });
    }

    render (props) {
        const { image, imageLike, comments, id } = this.state;
        return (<li className={styles.item}>
            <img className={styles.itemImage} src={image} />
            <div className={styles.itemInfo} onClick={this.hendleClickItem}>
                <div className={styles.itemsInfo}><span id={styles.itemLikeImg}></span><h2>{imageLike}</h2></div>
                <div className={styles.itemsInfo}><span id={styles.itemCommentsImg}></span><h2>{comments.length}</h2></div>
            </div>
            {
                this.state.isShowPopUp
                    ? <PopUp
                        outPopUp={this.hendleClickPopUp}
                        image={image}
                        comments={comments}
                        imageLike={imageLike}
                        id={id}
                    />
                    : <span></span>
            }
        </li>);
    }
}
export default Post;
