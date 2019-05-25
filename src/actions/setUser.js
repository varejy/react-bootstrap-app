import { SET_USER_SUBSCRIBE } from '../types/types';

const setUser = setSubscribe => ({
    type: SET_USER_SUBSCRIBE,
    payload: setSubscribe
});

export default setUser;
