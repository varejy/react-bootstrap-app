import React ,{ Component } from 'react';
import { Link } from 'react-router-dom';

import style from './Test.css';


class Test extends Component {
    render(){
        return <section>
                <h1 className={style.txtElem}>Test</h1>

                <ul>
                    <li className={style.txtElem}><Link to="/">Home</Link></li>
                </ul>
        </section>
    }
}

export default Test;