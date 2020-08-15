import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent' ;
import DishDetail from './DishDetailComponent' ;
import { DISHES } from '../shared/dishes' ;
import Header from './HeaderComponent' ;
import Footer from './FooterComponent' ;

//function App() 
class Main extends Component {

    constructor(props) {
      super(props) ;

      this.state = {
        // this dishes object will be passed child component "Menu"
        dishes: DISHES,
        selectedDish: null
      }

    }

    onDishSelect(dishId) {
      //when user chooses a dish update state to "selectedDish to currebt dish"
      this.setState({ selectedDish: dishId })
   console.log("DishId selected:",dishId);
  }  

  render() {
      return (
        <div>
          <Header/>
          
          {/** Send only the dishId as parameters to onDishSelect */}
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />        
          {/**
           * filter() creates a new array with elements that fall under a given criteria from an existing array
           * (dish) => dish.id === this.state.selectedDish this helps us to get dish is seleected with onDishSelect
           *
           * [0] get the firts element that matches with the criteria , but here doshId is unique
          */}
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />        
        
        <Footer/>
        </div>
      );
   }
}

export default Main;
