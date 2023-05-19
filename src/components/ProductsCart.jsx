import styled from "styled-components"
import ProductPreview from "./ProductPreview";

export default function ProductsCart(props) {
    const {productsCart, removeProdCart} = props;

    return (
        <ContainerCarrinho>
            {productsCart.map(p => <ProductPreview key={p.id} product={p} removeProdCart={removeProdCart}/>)}
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