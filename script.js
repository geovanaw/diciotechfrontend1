
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
  
  //Função de buscar palavra conectado com a a_api.html. Só funciona se estiver integrado ao banco de dados
  function search_palavra() { 
    let input = document.getElementById('searchbar').value // obtem o valor do texto digitado //
    input = input.toLowerCase(); //converte em letras minusculas o que for digitado no campo de busca //
    let x = document.getElementsByClassName('palavraA'); //retorna uma coleção de elementos HTML que possuem essa classe 'termos' da pasta letra_a. //
      
    for (i = 0; i < x.length; i++) { 
        if (x[i].innerHTML.toLowerCase().charAt(0) !== input.charAt(0)) { //considera o primeiro caractere //
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}