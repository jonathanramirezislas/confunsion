import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//importamos reactstrap
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
//Importamo9s  the data .would be a better idea to create a api
import { DISHES } from './shared/dishes';


class App extends Component {
  constructor(props) {
    super(props);
    /* Al entrar tarera todos los dishes del archov dishes.js*/
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      {/* Cuado se renderice va a mandar todos el objeto de diches a MenuComponents.js*/}
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
