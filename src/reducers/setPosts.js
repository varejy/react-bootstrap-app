import {
    SET_POST,
    SET_TAGS
} from '../types/types';

const initialState = {
    posts: [],
    tags: []
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_POST:
        return {
            ...state,
            posts: action.payload
        };
    case SET_TAGS:
        return {
            ...state,
            tags: action.payload
        };
    default:
        return state;
    }
}
