import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
         CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader,
         ModalBody, ModalFooter, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleSubmit(values){
        /*
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));

        */
       this.toggle();
       //this fuction is that we get from props and is located in actioncreators.js (redux)
       this.props.postComment(this.props.dishId, values.rating, values.author, values.message);
    }

    render() {
        return (
            <div>
                <Button color="default" onClick={this.toggle}><span className="fa fa-pencil fa-lg">Submit Comment</span></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating" name="rating">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={12}>Your Feedback</Label>
                                <Col md={12}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter> 
                </Modal>
            </div>
        );
    }
}



//function components
function  RenderDish({dish}){
    if(dish){
        return (
                    <Card>
                        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
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

function RenderComments({comments, postComment, dishId}) {

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
                                {/* parmas = DishId and the function to post commmets          */}
                    <CommentForm dishId={dishId} postComment={postComment} />
                </div>
            );   
        } else {
            return (
                <div></div>
            );
        }
    }

    const DishDetails = (props) =>{

        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.dish != null) {
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
                            <RenderComments comments={props.comments} 
                            postComment={props.postComment}
                            dishId={props.dish.id}
                            />
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