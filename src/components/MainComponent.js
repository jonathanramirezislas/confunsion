import React, { Component } from 'react';

import Menu from './MenuComponent' ;
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent' ;
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


/***Get state from redux  */
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
                        //parameter
const mapDispatchToProps = dispatch => ({
//object      parameteres                         //dispatch the action to add coments (ActionCrators)
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  
  /*
  fetchDishes is a thunk and we will dispatch it
  so will availble in the Main(function app)
  
  */
  fetchDishes: () => { dispatch(fetchDishes())},

    //the form named as feedback reset with this function
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}


});

//function App() 
class Main extends Component {

    constructor(props) {
      super(props) ;

    
    }


    componentDidMount() {
      this.props.fetchDishes();
    }
    

 
  render() {

/**
 * dish.featured is True will return objets of dishes but we will pass only first element using dish.featured)[0]
 
 functions from ActionCreatos
 dishesLoading,dishesErrMess,..
 */
const HomePage = () => {
  return(
      <Home 
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />
  );
}

    /*
     *  match.params.dishId,10)  , (,10) is the base 0,1,2,3..9
      [0] first element 
     
     *  comments={this.state.c .... will extract all the comments match with DishId
  
     *   addComment={this.props.addComment} this function that is declare above will use in Dishdtail to add a coment 
         so DishDatil will have this fuction (addComment)
    
    */
   const DishWithId = ({match}) => {
    return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          addComment={this.props.addComment}
        />
    );
  };
  
   
    
    const AboutPage = () => {
      return(
          <About  leaders={this.state.leaders} />
      );
    };




      return (
        <div>
          <Header/>
          <Switch>
              {/** when you have localhost:300/home will redirect to HomePage (Home) */}
              <Route path='/home' component={HomePage} />
                                  {/**We will pass the dishes  to Menu */}
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}  />} />
              <Route path='/menu/:dishId' component={DishWithId} />

              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm=
              {this.props.resetFeedbackForm} />} />

              <Route exact path='/aboutus'  component={AboutPage}  />
              <Redirect to="/home" />
          
          </Switch>
        <Footer/>
        </div>
      );
   }
}

/*withRouter() to inject params provided by React Router into connected components 
deep in the tree without passing them down all the way down as props 

mapStateToProps  mapDispatchToProps functions that will be available in maincomponent
*/
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));