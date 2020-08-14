import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent' ;
import DishDetail from './DishDetailComponent' ;
import { DISHES } from '../shared/dishes' ;

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
      // if(this.state.selectedDish){
      //      console.log(this.state.selectedDish)
      // }
  }  

  render() {
      return (
        <div>
         <Navbar dark color="primary">
           <div className="container">
               <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
           </div>
         </Navbar>

         <Menu  dishes={this.state.dishes} 
                   onClick={ (dishId) => this.onDishSelect(dishId)}/>
         <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
        </div>
      );
   }
}

export default Main;