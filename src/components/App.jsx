import styled from "styled-components"
import ProductsList from "./ProductsList";
import ProductsCart from "./ProductsCart";
import PRODUCTS from "../mock";
import { useState } from "react";

export default function App() {
  const [productsCart, setProductsCart] = useState([]);

  function addProdCart(item) {
    if (!productsCart.map(p => p.id).includes(item.id))
      setProductsCart([...productsCart, item]);
  }

  function removeProdCart(id) {
    const newCart = productsCart.filter(p => p.id !== id);
    setProductsCart(newCart);
  }

  function removeAllProdCart() {
    setProductsCart([]);
  }

  return (
    <ContainerApp>
      <ProductsList 
        addProdCart={addProdCart} 
        products={PRODUCTS} />
      <ProductsCart 
        removeAllProdCart = {removeAllProdCart} 
        removeProdCart={removeProdCart} 
        productsCart={productsCart} />
    </ContainerApp>
  )
}

const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;
