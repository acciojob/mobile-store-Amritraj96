import React, {Component} from 'react';
import {productPropTypes} from "../../common/propTypes";
import s from './ProductComponent.module.css';
import {routes} from "../../routes";
import {Form, Col, Row, Container, Button, FormGroup, Input, Label} from 'reactstrap';


export const ProductComponent = ({id, title, description, image, price, onChange, onSubmit, deleteProduct}) => (
<Container>
  <Form onSubmit={onSubmit} className={s.formStyle}>
    <FormGroup className={s.container}>
        <Row>
        <Col sm={12} className={s.boxInput}>
            <Label for={title}>Title</Label>
            <Input name='title' value={title} onChange={onChange('title')}/>
        </Col>
        <Col sm={12} className={s.boxInput}>
            <Label for={description}>Description</Label>
            <Input type="textarea"  rows={4} name='description' value={description} onChange={onChange('description')}/>
        </Col>
        <Col sm={12} className={s.boxInput}>
            <Label for={image}>Image</Label>
            <Row className={s.imageDiv}>
                <Col sm={10}>
                    <Input name='image' value={image} onChange={onChange('image')}/>
                </Col>
                <Col sm={2}>
                    <img src={image} alt={title} style={{maxHeight: 100, }}/>
                </Col>
            </Row>
        </Col>
        <Col sm={12} className={s.boxInput}>
            <Label for={price}>Price</Label>
            <Row>
                <Col sm={4}>
                    <Input name='price' value={price} onChange={onChange('price')}/>
                </Col>
                <Row>
                    <Col sm={1}>

                    </Col>
                    <Col sm={5}>
                        <Button  className="float-right" type='button' onClick={() => deleteProduct(id)}>Delete</Button>
                    </Col>
                    <Col sm={5}>
                        <Button  className="float-right" type='submit' >Save</Button>
                    </Col>
                </Row>


            </Row>
        </Col>
        </Row>
    </FormGroup>
  </Form>
</Container>
);


export class ProductContainer extends Component{
    constructor(props){
        super(props);
        const { match: {params}, productList } = props;
        const product = productList.find(({id}) => Number(params.id) === id);
        this.state = {
            ...product
        };
    }

    onChange = (item) => ({target: {value}}) => {
        this.setState({
            [item]: value,
        })
    };


    onSubmit = (e) => {
        e.preventDefault();
        this.props.updateProduct(this.state);
        this.props.history.push(routes.admin);
    };


    deleteProduct = () =>{
        this.props.deleteProduct(this.state);
        this.props.history.push(routes.admin);
    }


    render(){
        return <ProductComponent
            {...this.state}

            onChange={this.onChange}
            onSubmit={this.onSubmit}
            deleteProduct={this.deleteProduct}
        />
    }
}


ProductComponent.propTypes = productPropTypes;

