import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';

      /** Card ..
                    * we recbe from Main Component the props function  this.onDishSelect(dishId)
                    *  this.props.onClick(dish.id) call the function and send the dish.Id taht we click  */
     //   <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>


  //Functional components
function RenderMenuItem({dish, onClick}) {
    return(
                 
     <Card
     onClick={() => onClick(dish.id)}>
     <CardImg width="100%" src={dish.image} alt={dish.name} />
     <CardImgOverlay>
         <CardTitle>{dish.name}</CardTitle>
     </CardImgOverlay>
 </Card>
    );
}

    const Menu = (props) => {

       
        const menu = props.dishes.map((dish) => {

            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/** dish first parameter , onClik second parameter (props) */}
                      <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            );

        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
  
  

export default Menu;