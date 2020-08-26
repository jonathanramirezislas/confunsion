import * as ActionTypes from './ActionTypes';


/*

 action.payload contain the data

dishes:[] will contain the dishes when action.type=ActionTypes.ADD_DISHES


...state, isLoading: false, errMess: null, dishes: action.payload 
this take the original state but we don't modificate it, so we create
another one with the same variable and modificate those variables
*/
export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};