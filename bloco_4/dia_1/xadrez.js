let peca = "TorRe"
peca = peca.toLowerCase();
switch (peca) {
    case "bispo":
        console.log("diagonal");
        break;
    case "peao":
        console.log("frente");
        break;
    case "cavalo":
        console.log("L (2 movimentos para uma direção cardinal, e um para outra");
        break;
    case "torre":
        console.log("linhas retas - colunas e fileiras");
        break;
    default:
        console.log("ERRO - peca nao encontrada")            
}