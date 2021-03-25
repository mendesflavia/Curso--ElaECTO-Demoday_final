const estoque =
[
    {
        "id": "1",
        "descricao": "shorts",
        "quantidade": 10,
        "unidade":"un" ,
        "custo":20.00,
        "valorTotalEstoque":200.00,
        "lucro":"100%",
        "valorVenda": "40.00",
        "fornecedor": " Comask",
        "imagem de produto":""
    },
    {
        "id": "2",
        "descricao": "shorts branco",
        "quantidade": 5,
        "unidade":"un" ,
        "custo":40.00 ,
        "valorTotalEstoque": 200.00,
        "lucro":"100%",
        "valorVenda": "80.00",
        "fornecedor": " Comask",
        "imagem de produto":""
    },
    {
        "id": "2",
        "descricao": "shorts branco",
        "quantidade": 5,
        "unidade":"un" ,
        "custo":40.00 ,
        "valorTotalEstoque": 200.00,
        "lucro":"100%",
        "valorVenda": "80.00",
        "fornecedor": " Comask",
        "imagem de produto":""
    }
]  

const tabela = document.querySelector("#tabelaEstoque");

for (let produto of estoque) {

    const linha = document.createElement("tr");
    const descricao = document.createElement("td");
    descricao.innerHTML = produto.descricao;
    const unidade = document.createElement("td");
    unidade.innerHTML = produto.unidade;
    const quantidade = document.createElement("td");
    quantidade.innerHTML = produto.quantidade;
    const custo = document.createElement("td");
    custo.innerHTML = produto.custo;
    const valorTotalEstoque = document.createElement("td");
    valorTotalEstoque.innerHTML = produto.valorTotalEstoque;
    const lucro = document.createElement("td");
    lucro.innerHTML = produto.lucro;
    const valorVenda = document.createElement("td");
    valorVenda.innerHTML = produto.valorVenda;
    const fornecedor = document.createElement("td");
    fornecedor.innerHTML = produto.fornecedor;

    linha.appendChild(descricao);
    linha.appendChild(quantidade);
    linha.appendChild(unidade);
    linha.appendChild(custo);
    linha.appendChild(valorTotalEstoque);
    linha.appendChild(lucro);
    linha.appendChild(valorVenda);
    linha.appendChild(fornecedor);

    tabela.appendChild(linha)

}

const enviarbotao = document.querySelector("#botaoEnviar");

function enviarProduto() { 

    const descricaoipt = document.querySelector("input[name='descricao']").value;
    const quantidadeipt = document.querySelector("input[name='quantidade']").value;
    const unidadeipt = document.querySelector("input[name='unidade']").value;
    const custoipt = document.querySelector("input[name='custo']").value;
    const valorTotalEstoqueipt = document.querySelector("input[name='valorTotalEstoque']").value;
    const lucroipt = document.querySelector("input[name='lucro']").value;
    const valorVendaipt = document.querySelector("input[name='valorVenda']").value;
    const fornecedoript = document.querySelector("input[name='fornecedor']").value;
    

    const linha = document.createElement("tr");
    const descricao = document.createElement("td");
    descricao.innerHTML = descricaoipt;
    const unidade = document.createElement("td");
    unidade.innerHTML = unidadeipt;
    const quantidade = document.createElement("td");
    quantidade.innerHTML = quantidadeipt;
    const custo = document.createElement("td");
    custo.innerHTML = custoipt;
    const valorTotalEstoque = document.createElement("td");
    valorTotalEstoque.innerHTML = valorTotalEstoqueipt;
    const lucro = document.createElement("td");
    lucro.innerHTML = lucroipt;
    const valorVenda = document.createElement("td");
    valorVenda.innerHTML = valorVendaipt;
    const fornecedor = document.createElement("td");
    fornecedor.innerHTML = fornecedoript;

    linha.appendChild(descricao);
    linha.appendChild(quantidade);
    linha.appendChild(unidade);
    linha.appendChild(custo);
    linha.appendChild(valorTotalEstoque);
    linha.appendChild(lucro);
    linha.appendChild(valorVenda);
    linha.appendChild(fornecedor);

    tabela.appendChild(linha)

} 


enviarbotao.addEventListener("click", enviarProduto)

