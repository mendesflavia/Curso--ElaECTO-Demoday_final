const cadastro = 
[
{
    "nome":"Pedro Santos",
    "email":"pedrosantos@email.com",
    "data_nasc":"03/20/1981",
    "rg":"01200777-9",
    "cpf":"264777999-36",
    "rua":"Rua Para",
    "numero":"33 apt 42",
    "bairro":"Campo Grande",
    "estado":"S�o Paulo",
    "cidade":"Santos",
    "cep":"11075-000",
    "informacao":""
},

]
const tabelaCadastro = document.querySelector("#tabelaCadastro");

for (let dados of cadastro) {

    const linha = document.createElement("tr");
    const nome = document.createElement("td");
    nome.innerHTML = dados.nome;
    const email = document.createElement("td");
    email.innerHTML = dados.email;
    const data_nasc = document.createElement("td");
    data_nasc.innerHTML =dados.data_nasc;
    const rg = document.createElement("td");
    rg.innerHTML = dados.rg;
    const cpf = document.createElement("td");
    cpf.innerHTML = dados.cpf;
    const rua = document.createElement("td");
    rua.innerHTML = dados.rua;
    const numero = document.createElement("td");
    numero.innerHTML = dados.numero;
    const bairro = document.createElement("td");
    bairro.innerHTML =dados.bairro;
    const estado = document.createElement("td");
    estado.innerHTML =dados.estado;
    const cidade = document.createElement("td");
    cidade.innerHTML =dados.cidade;
    const cep = document.createElement("td");
    cep.innerHTML =dados.cep;
    const informacao = document.createElement("td");
    informacao.innerHTML =dados.informacao;


    linha.appendChild(nome);
    linha.appendChild(email);
    linha.appendChild(data_nasc);
    linha.appendChild(rg);
    linha.appendChild(cpf);
    linha.appendChild(rua);
    linha.appendChild(numero);
    linha.appendChild(bairro);
    linha.appendChild(estado);
    linha.appendChild(cidade);
    linha.appendChild(cep);

    tabelaCadastro.appendChild(linha)

}

const enviarbotao = document.querySelector("#botaoEnviar");

function enviarCadastro() { 

    const nomeipt = document.querySelector("input[name='nome']").value;
    const emailipt = document.querySelector("input[name='email']").value;
    const data_nascipt = document.querySelector("input[name='Data_nasc']").value;
    const rgipt = document.querySelector("input[name='rg']").value;
    const cpfipt = document.querySelector("input[name='cpf']").value;
    const ruaipt = document.querySelector("input[name='rua']").value;
    const numeroipt = document.querySelector("input[name='numero']").value;
    const bairroipt = document.querySelector("input[name='bairro']").value;
    const estadoipt = document.querySelector("input[name='estado']").value;
    const cidadeipt = document.querySelector("input[name='cidade']").value;
    const cepipt = document.querySelector("input[name=cep']").value;
    const informacaoipt = document.querySelector("input[name='informacao']").value;
    

    const linha = document.createElement("tr");
    const nome = document.createElement("td");
    nome.innerHTML = nomeipt;
    const email = document.createElement("td");
    email.innerHTML =emailipt;
    const  data_nasc= document.createElement("td");
    data_nasc.innerHTML = data_nascipt;
    const rg = document.createElement("td");
    rg.innerHTML = rgipt;
    const cpf = document.createElement("td");
    cpf.innerHTML = cpfipt;
    const rua = document.createElement("td");
    rua.innerHTML = ruaipt;
    const numero = document.createElement("td");
    numero.innerHTML = numeroipt;
    const bairro = document.createElement("td");
    bairro.innerHTML = bairroipt;
    const estado = document.createElement("td");
    estado.innerHTML = estadoipt;
    const cidade = document.createElement("td");
    cidade.innerHTML = cidadeipt;
    const cep = document.createElement("td");
    cep.innerHTML = cepipt;
    const informacao = document.createElement("td");
    informacao.innerHTML = informacaoipt;

    linha.appendChild(nome);
    linha.appendChild(email);
    linha.appendChild(data_nasc);
    linha.appendChild(rg);
    linha.appendChild(cpf);
    linha.appendChild(rua);
    linha.appendChild(numero);
    linha.appendChild(bairro);
    linha.appendChild(estado);
    linha.appendChild(cidade);
    linha.appendChild(cep);
    linha.appendChild(informacao);

    tabelaCadastro.appendChild(linha)

} 


enviarbotao.addEventListener("click", enviarCadastro)