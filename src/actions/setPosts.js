import { SET_POST } from '../types/types';

const setPosts = newComment => ({
    type: SET_POST,
    payload: newComment
});

export default setPosts;
