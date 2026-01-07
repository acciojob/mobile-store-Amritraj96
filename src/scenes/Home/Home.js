import React from 'react';
import {Route} from "react-router-dom";
import ProductLink from "../../components/ProductLink/ProductLink";

import { Container, Row, Col } from 'reactstrap';


export const Home = ({productList, match}) => (
    <Container>
        <Row>
            <Route
                path={match.path}
                render={() => productList.map(({title, id, image, price}) =>
                    <ProductLink key={id} id={id} title={title} image={image} price={price} typeShow={'user'}/>)}
            />
        </Row>

    </Container>
);

