import React, { Component } from "react";
import "./App.module.css";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import AdminPage from "./scenes/AdminPage/AdminPage";
import { products } from "./data/products";
import { Home } from "./scenes/Home/Home";
import s from "./App.module.css";
import { ProductPage } from "./scenes/ProductPage/ProductPage";
import { Header } from "./scenes/Header/Header";
import { Footer } from "./scenes/Footer/Footer";
import ReactModal from "react-modal";
import { Modal } from "./Modal/Modal";
import 'regenerator-runtime/runtime'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: true,
      showModal: false,
      isAddProductModal: false
    };
  }

  async componentDidMount() {
    this.setState({
      products: products,
      loading: false
    });
  }

  updateProduct = (newProduct) =>
    this.setState({
      products: this.state.products.map((oldProduct) => {
        if (oldProduct.id === newProduct.id) {
          return newProduct;
        }
        return oldProduct;
      })
    });

  deleteProduct = (deleteId) =>
    this.setState({
      products: this.state.products
        .filter((oldProduct) => {
          console.log("deleteid", deleteId.id);
          console.log("currentid", oldProduct.id);
          if (oldProduct.id === deleteId.id) {
            return false;
          }
          return true;
        })
        .map((oldProduct) => {
          return oldProduct;
        })
    });

  addProduct = (newProduct) => {
    console.log("new", newProduct);
    console.log("data", this.state.products[1]);

    this.setState({
      products: [...this.state.products, newProduct],
      isAddProductModal: false
    });
  };

  showAddProductModal = () => {
    this.setState({ isAddProductModal: true });
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className={s.App}>
        <Header />
        <main className={s.main}>
          <Switch>
            <Route
              exact
              path={routes.home}
              render={(renderProps) => (
                <Home productList={this.state.products} {...renderProps} />
              )}
            />

            <Route
              path={routes.admin}
              render={(renderProps) => (
                <AdminPage
                  productList={this.state.products}
                  updateProduct={this.updateProduct}
                  deleteProduct={this.deleteProduct}
                  showAddProductModal={this.showAddProductModal}
                  {...renderProps}
                />
              )}
            />

            <Route
              path={routes.productPage}
              render={(renderProps) => (
                <ProductPage
                  productList={this.state.products}
                  {...renderProps}
                />
              )}
            />

            <Route
              path={"/"}
              render={(renderProps) => (
                <ReactModal isOpen={true} ariaHideApp={false}>
                  <Modal
                    {...renderProps}
                    data={this.state.products}
                    addProduct={this.addProduct}
                  />
                </ReactModal>
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
