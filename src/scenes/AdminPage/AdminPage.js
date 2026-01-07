import React from 'react';
import {arrayOf} from 'prop-types';
import {productPropTypes} from "../../common/propTypes";
import ProductLink from "../../components/ProductLink/ProductLink";
import {Route, Link} from "react-router-dom";
import {routes} from "../../routes";
import {ProductContainer} from "../../components/ProductComponent/ProductComponent";
import s from './AdminPage.module.css';
import ReactModal from 'react-modal';
import {Container, Row, Col, Button} from 'reactstrap'



const AdminPage = ({productList, match, updateProduct, deleteProduct, showAddProductModal, image}) =>(

    <Container className={s.container}>
        <Row>


            <Col xs='12' className={s.listProduct} >
                <Route
                    exact
                    path={match.path}
                    render={() => {
                        return(
                            <Row>
                                <Col xs='12' className={s.addBtn}>
                                    <Link to={'/add'}>
                                        <Button onClick={showAddProductModal}>Add Product</Button>
                                    </Link>
                                </Col>
                                <Col xs='12'>
                                    {productList.map(({title, id, image}) =>
                                        <ProductLink
                                            key={id}
                                            id={id}
                                            title={title}
                                            updateProduct={updateProduct}
                                            deleteProduct={deleteProduct}
                                            image={image}
                                            typeShow={'admin'}
                                        />)
                                    }
                                </Col>

                            </Row>

                        );
                    }}
                />


                <Route
                    path={routes.adminProduct}
                    render={
                        (renderProps) =>
                            <ProductContainer
                                productList={productList}
                                updateProduct={updateProduct}
                                deleteProduct={deleteProduct}
                                {...renderProps}/>}
                />
            </Col>
        </Row>
    </Container>
);


AdminPage.propTypes = {
    productList: arrayOf(productPropTypes).isRequired
};


export default AdminPage;
