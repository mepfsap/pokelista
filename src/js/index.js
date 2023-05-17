const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagem_botao_troca_de_tema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");
        imagem_botao_troca_de_tema.setAttribute("src","./src/imagens/sun.png");
    } else {
        body.classList.add("modo-escuro");
        imagem_botao_troca_de_tema.setAttribute("src","./src/imagens/moon.png");
    } 
}
)
/*
body.classList.toggle("modo-escuro"); Modo + eficaz
if (modoEscuroEstaAtivo) {
        imagem_botao_troca_de_tema.setAttribute("src","./src/imagens/sun.png");
    } else {
        imagem_botao_troca_de_tema.setAttribute("src","./src/imagens/moon.png");
    } 

*/