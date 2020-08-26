import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

/*sate por defecto tiene los comentarios del archivo../shared/comments
pero si le agregamos un comentario a commments le agregaremos el nuevo comentario


*/

export const Comments = (state = COMMENTS, action) => {

    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            //action.payload has the data 
            var comment = action.payload;
            comment.id = state.length;// assign EL ID DE COMMENT 
            comment.date = new Date().toISOString();//date 
            console.log("Comment added: ", comment);//print in console 
            return state.concat(comment);//to the previous comments we add the new comment  NOTA will return a object

        default:
            console.log("default comments were rendered")
          return state;
      }


      //the two return will return objects
};