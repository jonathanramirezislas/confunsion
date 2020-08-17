import React, { Component } from 'react';
import Menu from './MenuComponent' ;
import DishDetail from './DishDetailComponent' ;
import { DISHES } from '../shared/dishes' ;
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

//function App() 
class Main extends Component {

    constructor(props) {
      super(props) ;

      this.state = {
        // this dishes object will be passed child component "Menu"
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
  
      };
    }

 
  render() {

/**
 * dish.featured is True will return objets of dishes but we will pass only first element using dish.featured)[0]
 * 
 */
    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
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
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };


      return (
        <div>
          <Header/>
          <Switch>
              {/** when you have localhost:300/home will redirect to HomePage=>Home */}
              <Route path='/home' component={HomePage} />
                                  {/**We will pass the dishes  to Menu */}
             <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}  />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Contact}  />
              <Redirect to="/home" />
            <Redirect to="/home" />
          </Switch>
        <Footer/>
        </div>
      );
   }
}

export default Main;
