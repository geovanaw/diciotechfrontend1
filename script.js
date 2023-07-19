
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
  
  // Função para buscar palavra a partir da letra A//

  function search_palavra() {
    let input = document.getElementById('searchbar').value; //- Obtém o valor do elemento de entrada de texto com o ID "searchbar" e armazena-o na variável quando a usuária digita a letra "A"//
    input = input.toLowerCase(); //toLowerCase converte em letras minusculas o que for digitado no campo de busca//
    let suggestions = document.getElementsByClassName('suggestions')[0]; //Obtém o primeiro elemento encontrado com a classe "suggestions" que está armazenada em HTML, neste caso do nosso projeto as palavras com a letra A serão chamadas com  elemento [0]//
  
    // Limpar as sugestões anteriores e permite que se busque nova palavra e não a mesma
    suggestions.innerHTML = '';
    
    // Essa função garante que as sugestões de palavras só serão exibidas se o campo de busca for preenchido//
    if (input.trim() !== '') {
      let keywords = ['API', 'Browser', 'Cost', 'Doctype', 'Else', 'Get', 'Head', 'Javascript'];
  
      
      let search_palavra = keywords.filter(keyword => // as palavras chaves "keywords" estão utilizando o método .filter do .js que serve para percorrer os elementos e trazer o que nós pedimos, no caso palavras com a letra "a"//
        keyword.toLowerCase().includes(input) // aqui nós transformamos com o keyword.toLowercase as palavras em minusculas e com o includes faz a função de true or false//
      );
  
      // Exibir as sugestões dentro da busca de palavras
      search_palavra.forEach(keyword => { // O foreach é um loop do javascript que serve, no nosso caso para buscar a letra A dentro do documento ou array//
        let suggestionItem = document.createElement('li'); // essa let suggestionItem, utiliza o método createElement dentro da "li" //
        suggestionItem.textContent = keyword;
        suggestions.appendChild(suggestionItem); // o appendCHild é uma função muito parecida com o inner.HTML., para não haver repetição e confundir o código é sugerido utilizar o appendChild, que significa que será coloca dentro do elemento-pai do codigo//
      });
    }
  }