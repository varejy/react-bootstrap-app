import { SET_TAGS } from '../types/types';

const setTags = newComment => ({
    type: SET_TAGS,
    payload: newComment
});

export default setTags;
