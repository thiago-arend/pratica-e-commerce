
import styled from "styled-components"
import Product from "./Product";

export default function ProductsList() {
    return (
        <ContainerListaProdutos>
            <Product />
        </ContainerListaProdutos>
    )
}

const ContainerListaProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;