import {
    SET_POST
} from '../types/types';

const initialState = {
    posts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_POST:
        return {
            ...state,
            posts: action.payload
        };
    default:
        return state;
    }
}
