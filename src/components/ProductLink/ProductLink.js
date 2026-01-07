import React from 'react';
import {string, number} from 'prop-types';
import {Link} from 'react-router-dom';
import {formatRoute} from 'react-router-named-routes';
import {routes} from "../../routes";
import s from './ProductLink.module.css';
import { Container, Row, Col, Button } from 'reactstrap';


const ProductLink = ({id, title, image, price, typeShow}) => {
    if (typeShow === 'admin'){
        return(
            <div className={s.itemAdmin}>
                    <Link to={formatRoute(routes.adminProduct, {id})}>
                        <Row style={{alignItems: 'center',
                            justifyContent: 'center'}}>
                        <Col xs={2}>
                            <img style={{width: 50}} src={image} alt={title}/>
                        </Col>
                        <Col xs={10} className={s.titleAdmin}>
                            {title}
                        </Col>
                        </Row>
                    </Link>


            </div>
        );
    }
    if (typeShow === 'user'){
        return(
            <Col xs='12' sm="6" className={s.boxProduct} style={{paddingLeft: 0, paddingRight: 0}}>
                <Container>
                    <Link to={formatRoute(routes.productPage, {id})}>
                        <div className={s.containerUser}>
                        <Row>
                            <div className={s.content}>
                                <Col xs='4' sm='4'>
                                    <div className={s.divImage}>
                                        <img className={s.image} src={image} alt={title}/>
                                    </div>
                                </Col>
                                <Col xs='8' sm='8'>
                                    <div className={s.divText}>
                                        <div className={s.titleStyle}>
                                            <p>{title}</p>
                                        </div>
                                        <Row className={s.priceStyle}>
                                            <Col xs='6' sm='6' style={{paddingLeft: 0, paddingRight: 0}} >
                                                <p>Price: {price}</p>

                                            </Col>
                                            <Col xs='4' sm='4' className={s.btnBuy} style={{marginRight: 10, marginBottom: 5}}>
                                                <Button className={s.btnSecondary}>Buy</Button>
                                            </Col>

                                        </Row>


                                    </div>
                                </Col>
                            </div>
                        </Row>
                        </div>
                    </Link>
                </Container>
            </Col>

        );
    }
}



ProductLink.propTypes = {
    id: number.isRequired,
    title: string.isRequired,
    typeShow: string,
};

export default ProductLink;
