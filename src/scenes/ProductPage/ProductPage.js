import React, { Component } from "react";
import s from "./ProductPage.module.css";
import { routes } from "../../routes";
import { Container, Row, Col, Button } from "reactstrap";

export class ProductPage extends Component {
  constructor(props) {
    super(props);
    const {
      match: { params },
      productList
    } = props;
    const product = productList.find(({ id }) => Number(params.id) === id);
    this.state = {
      ...product
    };
  }

  backToAllProducts = () => {
    this.props.history.push(routes.home);
  };

  render() {
    return (
      <div>
        <ProductPageContainer
          product={this.state}
          backToAllProducts={this.backToAllProducts}
        />
      </div>
    );
  }
}

export const ProductPageContainer = ({
  product: { id, title, description, price, image },
  backToAllProducts
}) => (
  <Container className={s.container}>
    <Row className={s.content}>
      <Col sm={5}>
        <img
          src={image}
          className={s.img}
          alt={title}
          style={{ maxWidth: 250 }}
        />
      </Col>
      <Col sm={7}>
        <div className={s.title}>
          <h2>{title}</h2>
        </div>
        <div className={s.price} style={{ paddingTop: 10 }}>
          <h4>
            <p>Price: {price} Rs</p>{" "}
          </h4>
        </div>
        <div className={s.description}>
          <h4>
            <p>Desc:</p>
          </h4>
          <p>{description}</p>
        </div>
        <div className={s.divBtn}>
          <Button
            style={{ marginBottom: 10 }}
            onClick={() => backToAllProducts()}
          >
            Other products
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
);
