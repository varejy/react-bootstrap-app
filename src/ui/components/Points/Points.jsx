import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import getPoints from '../../../services/getPoints';

import styles from './Points.css';

const mapStateToProps = ({ application }) => {
    return {
        points: application.points
    };
};

const mapDispatchToProps = (dispatch) => ({
    getPoints: () => dispatch(getPoints())
});

class Points extends Component {
    static propTypes = {
        points: PropTypes.array
    };

    static defaultProps = {
        points: []
    };

    componentDidMount() {
        this.props.getPoints();
    }

    render () {
        const { points } = this.props;

        return <section className={styles.container}>
            <ul>
                { points.map((point, i) => <li className={styles.point} key={i}>{point}</li>) }
            </ul>
            <hr/>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </section>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Points);
