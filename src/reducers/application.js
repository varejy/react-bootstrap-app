import {
    SET_MEDIA_INFO,
    SET_POINTS
} from '../types/types';

const initialState = {
    media: {
        width: 0,
        height: 0
    },
    points: []
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_MEDIA_INFO:
        return { ...state, media: action.payload };
    case SET_POINTS:
        return { ...state, points: action.payload };
    default:
        return state;
    }
}
