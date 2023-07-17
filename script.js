
// função utilizada para animação digitando na plataforma//

function ativaDigitando(elemento, frase, velocidade) {
    const arrayTexto = frase.split('');
    let textoDigitado = '';
  
    const digitarProximaLetra = () => {
      if (arrayTexto.length === 0) {
        elemento.innerHTML = frase;
        return;
      }
  
      textoDigitado += arrayTexto.shift();
      elemento.innerHTML = textoDigitado;
  
      setTimeout(digitarProximaLetra, velocidade);
    };
  
    digitarProximaLetra();
  }
  
  const titulo = document.querySelector('.digitandohello_world');
  ativaDigitando(titulo, `<"HELLO WORLD">`, 50);
  
  setTimeout(() => {
    const olaMundo = document.querySelector('.digitandoola_mundo');
    ativaDigitando(olaMundo, `<"OLÁ, MUNDO!">`, 55);
  }, 1500);
  
  /*function ativaDigitando(elemento, frase, velocidade) {
    const arrayTexto = frase.split(''); /o espaçamento de letras pelo inner.html.split só se dá com os parentes vazios/
    /*elemento.innerHTML = '';
  
    arrayTexto.forEach((letra, i) => {
        setTimeout(() => { // o setTimeout é uma função antiva do js//
            elemento.innerHTML += letra;
  
            if (i === arrayTexto.length -1) {
                setTimeout(() =>{
                    elemento.innerHTML = '';
                    ativaDigitando(elemento, '', velocidade);
                }, 1000); 
            }
        }, velocidade * i)
    });
  }
  
  const titulo = document.querySelector('.digitandohello_world');
  ativaDigitando(titulo, `<"HELLO WORLD">`, 50);
  /*const titulos = document.querySelectorAll('.digitando');
  titulos.forEach((titulo) => {
  ativaLetra(titulo);*/
  
  // para chamar o Olá mundo na linha abaixo, utilizei novamente a função .js setTimeout com outra const para que pudesse ativar a segunda frase//
  /*setTimeout(() => {
    const olaMundo = document.querySelector('.digitandoola_mundo');
    ativaDigitando(olaMundo, `<"OLÁ, MUNDO!">`, 55);
  }, 1500); // Aguarda 1,5 segundos antes de exibir a próxima frase*/
  
  /*Para que o efeito possa funcionar, o console.log que aqui está representado
  pelo ativaDigitando,precisa estar abaixo do comando global representado por const titulo*/