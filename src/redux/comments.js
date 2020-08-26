import * as ActionTypes from './ActionTypes';

/*sate por defecto tiene los comentarios del archivo../shared/comments
pero si le agregamos un comentario a commments le agregaremos el nuevo comentario


*/

export const Comments = (state = { errMess: null, comments:[]}, action) => {
    switch (action.type) {

        // ADD_COMMENTS es for all comments
      case ActionTypes.ADD_COMMENTS:
        return {...state, errMess: null, comments: action.payload};
  
      case ActionTypes.COMMENTS_FAILED:
        return {...state, errMess: action.payload};
  
      case ActionTypes.ADD_COMMENT:
          var comment = action.payload;
          comment.id = state.comments.length;
          comment.date = new Date().toISOString();
          return { ...state, comments: state.comments.concat(comment)};
  
      default:
        return state;
    }
        //the two "return" will return objects
  };
      