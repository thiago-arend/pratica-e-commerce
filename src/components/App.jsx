import styled from "styled-components"
import PRODUCTS from "../mock";
import ProductsList from "./ProductsList";
import ProductsCart from "./ProductsCart";

export default function App() {

  return (
    <ContainerApp>
      <ProductsList />
      <ProductsCart />
    </ContainerApp>
  )
}

const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;
