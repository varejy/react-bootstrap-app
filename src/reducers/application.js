import {
    SET_POINTS
} from '../types/types';

const initialState = {
    points: []
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_POINTS:
        return { ...state, points: action.payload };
    default:
        return state;
    }
}
