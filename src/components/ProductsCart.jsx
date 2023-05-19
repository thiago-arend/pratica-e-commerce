import styled from "styled-components"
import ProductPreview from "./ProductPreview";

export default function ProductsCart() {
    return (
        <ContainerCarrinho>
            <ProductPreview />
        </ContainerCarrinho>
    )
}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
`;