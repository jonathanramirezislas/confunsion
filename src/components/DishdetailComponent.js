import React from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


//function components
function  RenderDish({dish}){
    if(dish){
        return (
                    <Card>
                        <CardImg src={ dish.image } alt={ dish.name } width='100%'/>
                        <CardBody>
                            <CardTitle>{ dish.name }</CardTitle>
                            <CardText>{ dish.description }</CardText>
                        </CardBody>
                    </Card>    
        );
    } else {
        return (
            <div></div>
        )
    }
}


    function RenderComments({comments}){
        const listComments = comments.map(comment=> {
            return (
                <li key={comment.id}>
                    {comment.comment} <br/> -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} <br/><br/>
                </li>
            ); })
        if(comments){
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {listComments}
                    </ul> 
                </div>
            );   
        } else {
            return (
                <div></div>
            );
        }
    }

    const DishDetails = (props) =>{
        if(props.dish){
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                            </div>                
                        </div>
                        <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
                        </div>
                    </div>
                </div>
            );
    }else{
        return(
            <div></div>
        );
        }
    }
 

export default DishDetails;