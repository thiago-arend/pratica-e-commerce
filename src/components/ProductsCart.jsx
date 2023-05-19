import styled from "styled-components"
import ProductPreview from "./ProductPreview";
import CartAssets from "./CartAssets";

export default function ProductsCart(props) {
    const {productsCart, removeProdCart, removeAllProdCart} = props;

    function atualizaValorCarrinho() {
        let total = 0;
        productsCart.forEach(p => {
            const valor = Number(p.preco.slice(2).replace(",", "."));
            total += valor;
        });

        return total.toFixed(2);
    }

    return (
        <ContainerCarrinho>
            {productsCart.map(p => <ProductPreview 
                                key={p.id} 
                                product={p}
                                removeProdCart={removeProdCart}/>)}
            <CartAssets 
                removeAllProdCart={removeAllProdCart}
                atualizaValorCarrinho={atualizaValorCarrinho} />
        </ContainerCarrinho>
    )
}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  position: absolute;
  right: 0;
`;