import React, { Component } from 'react';

import { posts } from '../posts';

import styles from './posters.css';

class Posters extends Component {
    render () {
        return (<ul id={styles.AdContentWrapp}>
            {
                posts.map((item) =>
                    <li key={item.id} className={styles.item}>
                        <img className={styles.itemImage} src={item.imgUrl} />
                        <div className={styles.itemInfo}>
                            <div className={styles.itemsInfo}><span id={styles.itemLikeImg}></span><h2>{item.imgLike}</h2></div>
                            <div className={styles.itemsInfo}><span id={styles.itemCommentsImg}></span><h2>{item.comments.length}</h2></div>
                        </div>
                    </li>
                )
            }
        </ul>);
    }
}

export default Posters;
