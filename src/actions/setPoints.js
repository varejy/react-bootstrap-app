import { SET_POINTS } from '../types/types';

const setPoints = payload => ({
    type: SET_POINTS,
    payload
});

export default setPoints;