const cadastro = 
[
    {   
        "nome":"Aline",
        "email":"alinesouza@email.com",
        "data_nasc":"07/02/1999",
        "rg":"258965-8",
        "cpf":"589547841-76",
        "rua":"Rua das Acacias",
        "numero":"54",
        "estado":"Acre",
        "cidade":"Cambori",
        "cep":"58746-98",
        "informacao":"A Aline é T21 e treina motricidade fina."
    },
    {
        "nome":"Bernardo",
        "email":"bernardoluco@email.com",
        "data_nasc":"27/03/2004",
        "rg":"258955-8",
        "cpf":"558746841-76",
        "rua":"Rua das Marias",
        "numero":"24",
        "estado":"São Paulo",
        "cidade":"Campinas",
        "cep":"22457-98",
        "informacao":"Bernardo tem PC e treina marcha."
    },
    {
        "nome":"Giovana",
        "email":"Giovanaader@email.com",
        "data_nasc":"12/08/2012",
        "rg":"255874-8",
        "cpf":"558365214-76",
        "rua":"Rua do Farol",
        "numero":"24",
        "estado":"São Paulo",
        "cidade":"Taubaté",
        "cep":"25874-98",
        "informacao":"Giovana tem Seletividade e faz integração sensorial."
    },
    {
        "nome":"Fabiano",
        "email":"Fabianohugo@email.com",
        "data_nasc":"25/03/2011",
        "rg":"587465-8",
        "cpf":"458744512-76",
        "rua":"Rua do teto baixo",
        "numero":"98",
        "estado":"São Paulo",
        "cidade":"Atibaia",
        "cep":"69854-41",
        "informacao":"Fabiano tem TEA e trabalha compartilhamento de interesse."
    },
    {
        "nome":"Rafael",
        "email":"Rafaelbrandao@email.com",
        "data_nasc":"22/1/2002",
        "rg":"3658794-8",
        "cpf":"145287598-75",
        "rua":"Estrada do Tibao",
        "numero":"5784",
        "estado":"São Paulo",
        "cidade":"Aparecida",
        "cep":"365985-78",
        "informacao":"Rafael tem TPS e trabalha dessensibilização olf."
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
    linha.appendChild(informacao);
   

    tabelaCadastro.appendChild(linha)

}

const enviarbotaoCadastro = document.querySelector("#botaoEnviarCadastro");

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
    nome.innerHTML =nomeipt;
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
    linha.appendChild(cliente);
    linha.appendChild(paciente);
    linha.appendChild(informacao);

    tabelaCadastro.appendChild(linha)

} 


enviarbotaoCadastro.addEventListener("click", enviarCadastro)