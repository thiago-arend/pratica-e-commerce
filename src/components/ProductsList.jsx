
import styled from "styled-components"
import Product from "./Product";

export default function ProductsList(props) {
    const {products, addProdCart} = props;

    return (
        <ContainerListaProdutos>
            {products.map(p => <Product key={p.id} addProdCart={addProdCart} product={p} />)}
        </ContainerListaProdutos>
    )
}

const ContainerListaProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;