import * as actions from './actionTypes';

export const addProduct = (data) => ({
    type: actions.ADD_PRODUCT,
    payload: data
});

