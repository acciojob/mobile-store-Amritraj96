import React from 'react';
import {Link} from "react-router-dom";
import ReactModal from 'react-modal';
import s from "./Modal.module.css";
import {routes} from "../routes";
import {Form, Col, Row, Container, Button, FormGroup, Input, Label} from 'reactstrap';



const ModalRender = ({value, id, title, description, price, image, handleChange, onSubmit}) =>(
    <Container>
        <Form onSubmit={onSubmit}>
            <Row>
                <Col sm={12} className={s.boxInput}>
                    <Label for={title}>Title</Label>
                    <Input name='title' value={title} onChange={event => handleChange(event)}/>
                </Col>
                <Col sm={12} className={s.boxInput}>
                    <Label for={description}>Description</Label>
                    <Input type='textarea' rows={4} name='description' value={description} onChange={event => handleChange(event)}/>
                </Col>
                <Col sm={12} className={s.boxInput}>
                    <Label for={image}>Image</Label>
                    <Row className={s.imageDiv}>
                        <Col sm={10}>
                            <Input  name='image' value={image} onChange={event => handleChange(event)}/>
                        </Col>
                        <Col sm={2}>
                            <img src={image} alt={title} style={{height: 100}}/>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} className={s.boxInput}>
                    <Label for={price}>Price</Label>
                    <Row>
                        <Col sm={4}>
                        <Input name='price' type='number' value={price} onChange={event => handleChange(event)}/>
                        </Col>
                        <Col sm={2}>
                            <Button  type='submit' >Add</Button>
                        </Col>
                    </Row>
                </Col>

                <div>

                </div>
            </Row>
        </Form>
    </Container>
);




export class Modal extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            image: '',
            price: '',
            id: this.props.data[this.props.data.length-1].id + 1
        };

    }

    onSubmit = (e) => {

        e.preventDefault();
        this.props.addProduct(this.state);
        this.props.history.push(routes.admin);
    };


    handleChange = (e) => {
        switch (e.target.name) {
            case 'price':
                this.setState({
                    price: Number(e.target.value),
                });
                break;

            default:
                this.setState({
                    [e.target.name]: e.target.value,
                });
        }
    };


    render(){
        return(
            <ModalRender
                {...this.state}
                handleChange={this.handleChange}
                onSubmit={this.onSubmit}
            />
        );
    }
}




/*
export const Modal = ({match, history}, addProduct) => {

    console.log({match});
    return (
        <ReactModal
            isOpen='true'
            ariaHideApp={false}
        >
            <form>

            </form>
        </ReactModal>

    );
};
*/
/*
<div className={modal ? "modal" : undefined}>
            {modal && <Link to="/">Close</Link>}
            <form>

            </form>
        </div>
 */
