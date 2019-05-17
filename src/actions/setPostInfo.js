import { SET_POST_INFO } from '../types/types';

const setPostInfo = newComment => ({
    type: SET_POST_INFO,
    payload: newComment
});

export default setPostInfo;
