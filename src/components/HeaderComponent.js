import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    /**
     * <React.Fragment> permite retornar elementos múltiples en un método de 
     *render() sin crear un elemento DOM adicional 
     */
    <React.Fragment>
      <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Restaurant Jonas</NavbarBrand>
        </div>
      </Navbar>

      {/** A jumbotron indicates a big grey box for calling 
       * extra attention to some special content or information. */}
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Restaurant Jonas</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;