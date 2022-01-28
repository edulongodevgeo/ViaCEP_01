function consultaCEP() {
  let cep = document.querySelector('#cep').value;
  
  if (cep.length !== 8) {
    alert('CEP inválido, amigão! Tente novamente...');
    return
  }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
      response.json().then(mostrarLocal)
    });
}

function mostrarLocal(dados) {
  let resultado = document.querySelector('#resultado');

  if (dados.erro) {
    resultado.innerHTML = "Não localizamos este endereço! :("
  } else {
    resultado.innerHTML = `<p>Logradouro: ${dados.logradouro}</p>
                          <p>Bairro: ${dados.bairro}</p>
                          <p>Localidade: ${dados.localidade}</p>
                          <p>UF: ${dados.uf}</p>
                          <p>Código IBGE: ${dados.ibge}</p>`
  }
}

