/* 
quando clicar no herói da listagem temos que esconder o cartao do herói aberto e mostrar o cartão do correspondente ao que foi selecionado na listagem.

pra isso vamos precisar trabalhar com 2 elementos.
1 - listagem
2 - catão do herói

precisamos criar 2 variáveis no JS para trabalhar com os elementos da tela.

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de heróis.

- remover a classe aberto só do cartão que está aberto.
- ao clicar em um herói da listagem pegamos o id desse herói para saber qual cartão mostrar.
- remover a classe ativa que amrca o herói selecionado.
- adcionar a classe ativo no item da lista selecionado.

*/

//precisamos criar 2 variáveis no JS para trabalhar com os elementos da tela.
const listaSelecaoHeros = document.querySelectorAll('.hero')
const herosCard = document.querySelectorAll('.cartao-hero')


listaSelecaoHeros.forEach(hero => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de heróis.

    hero.addEventListener('click', () => {

        // remover a classe aberto só do cartão que está aberto.
        const cartaoHeroAberto = document.querySelector('.aberto')
        
        cartaoHeroAberto.classList.remove('aberto')

        // ao clicar em um herói da listagem pegamos o id desse herói para saber qual cartão mostrar.
        const idHeroSelecionado = hero.attributes.id.value

        const idDoCartaoHeroParaAbrir = 'cartao-' + idHeroSelecionado
        const cartaoHeroParaAbrir = document.getElementById(idDoCartaoHeroParaAbrir)
        cartaoHeroParaAbrir.classList.add('aberto')

        //remover a classe ativa que amrca o herói selecionado.

        const heroAtivoNaListagem = document.querySelector('.ativo')
        heroAtivoNaListagem.classList.remove('ativo')

        //adcionar a classe ativo no item da lista selecionado.

        const heroSelecionadoNaListagem = document.getElementById(idHeroSelecionado)
        heroSelecionadoNaListagem.classList.add('ativo')
    })
})


