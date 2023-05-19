import styled from "styled-components"

export default function CartAssets(props) {
    const { removeAllProdCart, atualizaValorCarrinho } = props;

    return (
        <InformacoesCarrinho>
            <h1>Total: R${atualizaValorCarrinho()}</h1>
            <button onClick={removeAllProdCart}>Remover Tudo</button>
        </InformacoesCarrinho>
    )
}

const InformacoesCarrinho = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    padding: 10px;
    height: 70px;
    right: 0;

    button {
        height: fit-content;
    }
`;