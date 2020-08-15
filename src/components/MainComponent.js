import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent' ;
import DishDetail from './DishDetailComponent' ;
import { DISHES } from '../shared/dishes' ;
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

//function App() 
class Main extends Component {

    constructor(props) {
      super(props) ;

      this.state = {
        // this dishes object will be passed child component "Menu"
        dishes: DISHES,
  
      };
    }

 
  render() {


      const HomePage = () => {
        return(
            <Home/> 
            );
      }

      return (
        <div>
          <Header/>
          <Switch>
              {/** when you have localhost:300/home will redirect to HomePage=>Home */}
              <Route path='/home' component={HomePage} />
                                  {/**We will pass the dishes  to Menu */}
              <Route exact path='/menu' component={() => 
              <Menu dishes={this.state.dishes} />} />
           
            <Redirect to="/home" />
          </Switch>
        <Footer/>
        </div>
      );
   }
}

export default Main;
