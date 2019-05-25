import {
    SET_USER_SUBSCRIBE
} from '../types/types';

const initialState = {
    user: {
        userLogin: 'leonardodicaprio',
        userAvatar: 'https://pbs.twimg.com/profile_images/694662257586892802/mdc5ELjj.jpg',
        subscribers: 123,
        publication: 23,
        subscriptions: 31,
        isSubscribe: false,
        descriptionUserName: 'Leonardo DiCaprio',
        descriptionAboutYourself: 'Actor and Environmentalist',
        descriptionLink: {
            descriptionLinkUrl: 'https://www.globaldealfornature.org/',
            descriptionLinkTxt: 'globaldealfornature.org'
        }
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_USER_SUBSCRIBE:
        return {
            ...state,
            user: action.payload
        };
    default:
        return state;
    }
}
