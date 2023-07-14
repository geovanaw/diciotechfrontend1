// função utilizada para animação digitando na plataforma//

function ativaDigitando(elemento, frase, velocidade) {
  const arrayTexto = frase.split('');/*o espaçamento de letras pelo .split só se dá com os parentes vazios*/
  let textoDigitado = '';

  const digitarProximaLetra = () => {
    if (arrayTexto.length === 0) { // A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.//
      elemento.innerHTML = frase;
      return; // o return funciona para retorna a frase digitada sem a animação, deixando estática a frase "Hello Word"//
    }

    textoDigitado += arrayTexto.shift();//Chamamos arrayTexto.shift() para remover o primeiro elemento do array arrayTexto. Neste caso, ele remove a letra 'H' e retorna essa letra.//
    elemento.innerHTML = textoDigitado;

    setTimeout(digitarProximaLetra, velocidade); //O método setTimeout permite executar um código após um tempo estipulado, que pode ser definido em milissegundos. O método executará o código apenas uma vez.//
  };

  digitarProximaLetra();
}

const helloWord = document.querySelector('.digitandohello_world'); // retorna o primeiro elemento do documento referenciado.//
console.log = ativaDigitando(helloWord, `<"HELLO WORLD">`, 50);

setTimeout(() => {
  const olaMundo = document.querySelector('.digitandoola_mundo');
  console.log = ativaDigitando(olaMundo, `<"OLÁ, MUNDO!">`, 50);
}, 1500);