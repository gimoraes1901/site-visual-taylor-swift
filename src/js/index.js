/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em um pokedev da listagem pegamos o id desse pokedev pra saber qual cartão abrir
       PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
       PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/

//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoAlbuns = document.querySelectorAll(".album");


//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoAlbuns.forEach(album => {
    album.addEventListener("click", () => {
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto
        esconderAlbumTs();

        //PASSO 4 - ao clicar em um pokedev da listagem pegamos o id desse pokedev pra saber qual cartão abrir
        const idAlbumSelecionado = mostrarAlbumTs(album);

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        desativarAlbumNaListagem();

        //PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
        ativarAlbumNaListagem(idAlbumSelecionado);

    })
})


function ativarAlbumNaListagem(idAlbumSelecionado) {
    const albumSelecionadoNaListagem = document.getElementById(idAlbumSelecionado);
    albumSelecionadoNaListagem.classList.add("ativo");
}

function desativarAlbumNaListagem() {
    const albumAtivoNaListagem = document.querySelector(".ativo");
    albumAtivoNaListagem.classList.remove("ativo");
}

function mostrarAlbumTs(album) {
    const idAlbumSelecionado = album.attributes.id.value;
    const idDoAlbumTsParaAbrir = "album-" + idAlbumSelecionado;
    const albumTsParaAbrir = document.getElementById(idDoAlbumTsParaAbrir);
    albumTsParaAbrir.classList.add("aberto");
    return idAlbumSelecionado;
}

function esconderAlbumTs() {
    const albumTsAberto = document.querySelector(".aberto");
    albumTsAberto.classList.remove("aberto");
}
