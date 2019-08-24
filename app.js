// console.log(document.getElementById('cart-info'));
// tras informações do carrinho - ver no inspect
const botaoCarrinho = document.getElementById("cart-info");
const menuCarrinho = document.getElementById("cart");
console.log(menuCarrinho);


//"escute o clique do meu botao"

botaoCarrinho.addEventListener('click', function () {
    menuCarrinho.classList.toggle('show-cart')
})

//criar botao do carrinho e funçoes 

const botaoAddProduto = document.querySelectorAll('.store-item-icon'); // o ponto pega todos os elementos que contenham aquela classe 
botaoAddProduto.forEach(function (botao) {

    botao.addEventListener('click', function (event) {
        if (event.target.parentElement.classList.contains('store-item-icon')) { // target e o alvo
            // pegando o caminho da imagem 
            let caminhoImagemCompleto = event.target.parentElement.previousElementSibling.src; tratarCaminhoImagem(caminhoImagemCompleto);
            const caminhoImagem = tratarCaminhoImagem(caminhoImagemCompleto);

            // pegando o preço do produto
            const precoProduto = event.target.parentElement.parentElement.parentElement;
            const precoProdutoSelecionado = tratarPrecoProduto(precoProduto);
            // console.log(precoProdutoSelecionado);

            //enviando dados da imagem, e preço do produto clicando para minha funçao
            inserirProdutoCarrinho(caminhoImagem,precoProdutoSelecionado);
        }
    });
});

//reduzir caminho da imagem para mostrar so o nome da imagem e seu tipo jpeg
tratarCaminhoImagem = function (caminhoImagemCompleto) {
    let indexCaminhoImagemCompleto = caminhoImagemCompleto.indexOf('img') + 3;
    let caminhoReduzidoImagem = caminhoImagemCompleto.slice(indexCaminhoImagemCompleto);
    return caminhoReduzidoImagem;
}
// tras o preço do produto 
tratarPrecoProduto = function (precoProduto) {
    //console.log (precoProduto.dataset.price);
    const precoDataProduto = parseInt(precoProduto.dataset.price); // parseInt transforma frase em numeros strings
    console.log (precoDataProduto);
    return precoDataProduto;
}


// criou uma div para inserir produtos no carrinho

inserirProdutoCarrinho = function(caminhoImagem,precoProduto) { //funçao criada para inserir produto no carrinho
    const divProdutoInserido = document.createElement('div'); //caixinha que guarda informaçoes de uma funçao 
    divProdutoInserido.classList.add ( //declarou que todo produto inserido no carrinho tem esses elementos
    'cart-item',
     'd-flex',
    'justify-content-between',
    'text-capitalize',
    'my-3',

    );

    const templateProdutoCarrinho = `
    <img src="img-cart/cake-2.jpeg" class="img-fluid rounded-circle" id="item-img" alt="">
    <div class="item-text">

      <p id="cart-item-title" class="font-weight-bold mb-0">preço</p>
      <span>$</span>
      <span id="cart-item-price" class="cart-item-price" class="mb-0">10.99</span>
    </div>
    <a href="#" id='cart-item-remove' class="cart-item-remove">
      <i class="fas fa-trash"></i>
    </a>`;


    //inserindo a div que criamos com imagem epreço do produto selecionado
    //innerHTML
    divProdutoInserido.innerHTML = templateProdutoCarrinho;

    // console.log(divProdutoInserido); 
const carrinho = document.getElementById('cart');
const totalCarrinho = document.querySelector('.cart-total-container')
carrinho.insertBefore(divProdutoInserido, totalCarrinho);

//contagem de itens no caRRINHO E disparar alerta de produto inserido
const quantidadeProdutoCarrinho = document.getElementById('item-count');
const quantidadeProdutosCarrinhoNumber = parseInt
(quantidadeProdutoCarrinho.innerText) + 1;
quantidadeProdutoCarrinho.innerHTML = quantidadeProdutosCarrinhoNumber;
alert('Produto inserido com sucesso!');
 console.log(divProdutoInserido)
}