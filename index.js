function corrigir(id){
    var textoLegenda = $(id).val();
    var textoCorrigido = substituiCaracteres(textoLegenda);
    $(id).val(textoCorrigido);
}

function alterarTexto(textoLegenda, stringErrada, stringCorrigida){
    return textoLegenda.replace(stringErrada, stringCorrigida);
}

function substituiCaracteres(textoLegenda){
    textoLegenda = alterarTexto(textoLegenda, "&atilde;", "ã");
    textoLegenda = alterarTexto(textoLegenda, "&oacute;", "ó");
    textoLegenda = alterarTexto(textoLegenda, "&iacute;", "í");
    textoLegenda = alterarTexto(textoLegenda, "&Agrave;", "À");
    textoLegenda = alterarTexto(textoLegenda, "&agrave;", "À");
    textoLegenda = alterarTexto(textoLegenda, "&aacute;", "á");
    textoLegenda = alterarTexto(textoLegenda, "&Eacute;", "É");
    textoLegenda = alterarTexto(textoLegenda, "&eacute;", "é");
    textoLegenda = alterarTexto(textoLegenda, "&ecirc;", "ê");
    textoLegenda = alterarTexto(textoLegenda, "&ccedil;", "ç");
    textoLegenda = alterarTexto(textoLegenda, "&ocirc;", "ô");
    textoLegenda = alterarTexto(textoLegenda, "&otilde;", "õ");
    textoLegenda = alterarTexto(textoLegenda, "&uacute;", "ú");
    return textoLegenda;
}