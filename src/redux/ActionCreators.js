import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';



                           //return a fuction   
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    //after the 2000 milisecond fill put the dishes in our store
    setTimeout(() => {
        //we dispatch the funcyion that is down
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


/*  addcommetn function will return a javascript object with:
type is like a description that we imported from ActionTypes.js
pyload will contain the data(new comment)

NOTE THIS OBJECT WILL USE IN comments.js
*/                             // (params)
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
}
);
