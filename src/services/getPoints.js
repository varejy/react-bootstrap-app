import setPoints from '../actions/setPoints';

import prop from '@tinkoff/utils/object/prop';

import request from 'superagent';

export default function getPoints () {
    return dispatch => request
        .get('/api/example/get-points')
        .then(payload => {
            const points = prop('body', payload);

            return dispatch(setPoints(points));
        })
        .catch(err => console.log(err))
}
