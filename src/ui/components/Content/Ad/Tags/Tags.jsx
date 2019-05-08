import React, { Component } from 'react';

import { tags } from '../tags';

import styles from './tags.css';

class Tags extends Component {
    render () {
        return (<ul id={styles.AdContentWrapp}>
            {
                tags.map((item) =>
                    <li key={item.id} className={styles.item}>
                        <img className={styles.itemImage} src={item.imgUrl} />
                        <div className={styles.itemInfo}>
                            <div className={styles.itemsInfo}><span id={styles.itemLikeImg}></span><h2>{item.imgLike}</h2></div>
                            <div className={styles.itemsInfo}><span id={styles.itemComentsImg}></span><h2>{item.coments.length}</h2></div>
                        </div>
                    </li>
                )
            }
        </ul>);
    }
}

export default Tags;
