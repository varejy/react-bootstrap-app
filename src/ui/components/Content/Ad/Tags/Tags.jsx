import React, { Component } from 'react';

import { tags } from '../tags';
import OpenImage from '../OpenImage/OpenImage.jsx';

import styles from './tags.css';

class Tags extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isShowItem: false,
            image: 'https://materializecss.com/images/sample-1.jpg',
            avatar: 'http://grampages.com/img/gpib.png',
            users: 'User',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        };
    }

    hendleItemClick = () => {
        this.setState({ isShowItem: !this.state.isShowItem });
    };
    render () {
        const { isShowItem, image, avatar, users, text } = this.state;
        return (<div>
            <ul id={styles.AdContentWrapp}>
                {
                    tags.map((item) =>
                        <li key={item.id} onClick={this.hendleItemClick} className={styles.item}>
                            <img className={styles.itemImage} src={item.imgUrl} />
                            <div className={styles.itemInfo}>
                                <div className={styles.itemsInfo}><span id={styles.itemLikeImg}></span><h2>{item.imgLike}</h2></div>
                                <div className={styles.itemsInfo}><span id={styles.itemCommentsImg}></span><h2>{item.comments.length}</h2></div>
                            </div>
                        </li>
                    )
                }
            </ul>
            {
                isShowItem
                    ? <OpenImage commentsUsersAvatar={avatar} image={image} usersNames={users} comment={text} />
                    : <div></div>
            }
        </div>);
    }
}

export default Tags;
