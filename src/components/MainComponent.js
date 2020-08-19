import React, { Component } from 'react';

import { DISHES } from '../shared/dishes' ;
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import Menu from './MenuComponent' ;
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent' ;

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


/***Get state from redux  */
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

//function App() 
class Main extends Component {

    constructor(props) {
      super(props) ;

    
    }


  

 
  render() {

/**
 * dish.featured is True will return objets of dishes but we will pass only first element using dish.featured)[0]
 * 
 */
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    /**
     * match.params.dishId,10)  , (,10) is the base 0,1,2,3..9
     * [0] first element 
     *  comments={this.state.c .... will extract all the comments match with DishId
     */

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
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
              {/** when you have localhost:300/home will redirect to HomePage=>Home */}
              <Route path='/home' component={HomePage} />
                                  {/**We will pass the dishes  to Menu */}
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}  />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Contact}  />
              <Route exact path='/aboutus'  component={AboutPage}  />
              <Redirect to="/home" />
          
          </Switch>
        <Footer/>
        </div>
      );
   }
}

/*withRouter() to inject params provided by React Router into connected components 
deep in the tree without passing them down all the way down as props */
export default withRouter(connect(mapStateToProps)(Main));
