let coracao = document.querySelector('.heart');
let carta = document.querySelector('.card');
let caixa = document.querySelector('#box');

coracao.addEventListener('click', function() {
    carta.setAttribute("style", "opacity:0");

    // Remover a criação do elemento de áudio
    // let audio = document.createElement("audio");
    // audio.setAttribute("src", "qlx.mp3");
    // audio.setAttribute("autoplay", "autoplay");

    // URL do vídeo do YouTube que você deseja reproduzir
    let youtubeVideoUrl = "https://www.youtube.com/watch?v=DkVCb-81KFU";

    // Criar o elemento de vídeo do YouTube
    let youtubePlayer = document.createElement("iframe");
    youtubePlayer.setAttribute("src", getYoutubeEmbedUrl(youtubeVideoUrl));
    youtubePlayer.setAttribute("width", "560");
    youtubePlayer.setAttribute("height", "315");
    youtubePlayer.setAttribute("frameborder", "0");
    youtubePlayer.setAttribute("allowfullscreen", "true");
    caixa.appendChild(youtubePlayer);

    // Efeito de digitação
    let i = 0;
    let texto = 'Sofia, passamos por momentos bons e ruins, situações que desgastaram um pouco nosso relacionamento, mas agora sinto que cada momento ruim nos fez aprender com nossos erros. Sinto que nosso relacionamento melhorou bastante; estamos mais próximos e nos conhecendo mais a cada dia. Eu te amo agora e para sempre, e com toda minha vontade espero que nosso relacionamento dure para sempre, porque você está sendo a luz nos meus momentos de escuridão, iluminando o caminho certo para o qual devo seguir, e está sendo minha razão para não desistir. Com amor, Renato';
    let textoAtual = '';

    function escreverTexto() {
        if (texto[i] == '<') {
            caixa.innerHTML = textoAtual + "<br><br>+'|'";
            textoAtual += "<br><br>";
        } else {
            textoAtual += texto[i];
            caixa.innerHTML = textoAtual + '|';
        }
        i++;
    }

    setTimeout(() => {
        let intervaloEscrita = setInterval(() => {
            escreverTexto();
            if (i == texto.length)
                clearInterval(intervaloEscrita);
        }, 190);  // 190 milissegundos para digitar uma letra
    }, 5500);  // Iniciar a digitação após 5500 milissegundos

    // Fundo aparecendo
    function aparecerFundo() {
        setTimeout(() => {
            caixa.style.opacity = 1;
        }, 1500);
    }
    aparecerFundo();
});

// Função para converter a URL do YouTube em URL de incorporação
function getYoutubeEmbedUrl(url) {
    let videoId = url.split('v=')[1];
    let ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
    }
    return "https://www.youtube.com/embed/" + videoId;
}
