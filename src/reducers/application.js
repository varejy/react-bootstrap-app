import {
    SET_MEDIA_INFO,
    SET_POST_INFO
} from '../types/types';

const initialState = {
    media: {
        width: 0,
        height: 0
    },
    tags: {
        imgUrl: '',
        imgLikes: 0,
        imgComments: [],
        id: 0
    },
    posts: {
        imgUrl: '',
        imgLikes: 0,
        imgComments: [],
        id: 0
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_MEDIA_INFO:
        return { ...state, media: action.payload };
    case SET_POST_INFO:
        return {
            ...state,
            posts: {
                imgComments: [...state, action.payload]
            }
        };
    default:
        return state;
    }
}
