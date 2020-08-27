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
        /*only when the server response.ok (adding the 
            new comment on the server side)  then we 
            we added to our  redux store (contaisn the javascript object with the comments)
        */
      case ActionTypes.ADD_COMMENT:
          var comment = action.payload;
          return { ...state, comments: state.comments.concat(comment)};
  
      default:
        return state;
    }
        //the two "return" will return objects
  };
      