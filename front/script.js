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


/*
function search_palavra () { //A função começa obtendo o valor inserido no campo de busca
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase(); //Em seguida, o valor do campo de busca é convertido para letras minúsculas usando o método
  let x = document.getElementsByClassName('animals'); //A função obtém todos os elementos HTML  e esses elementos são armazenados em uma variável chamada 'x'.
  //um loop é executado para percorrer todos os elementos armazenados em 'x'. 
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) { // é verificado se o conteúdo do elemento em 'x[i]'  contém o valor buscado em letras minúsculas.
          x[i].style.display="none"; //Se o valor buscado não estiver contido no conteúdo do elemento, a propriedade style.display é configurada como "none", o que faz o elemento ser ocultado.
      }
      else {
          x[i].style.display="list-item";     //se o valor buscado estiver contido no conteúdo do elemento, o elemento será exibido como um item de lista.             
      }
  }
}*/