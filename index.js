function corrigir(id){
    var textoLegenda = $(id).val();
    var textoCorrigido = substituiCaracteres(textoLegenda);
    $(id).val(textoCorrigido);
    alert("Legenda corrigida com sucesso! Copie o texto corrigido e cole no seu arquivo de legenda.");
}

function substituiCaracteres(textoLegenda){
    textoLegenda = alterarTexto(textoLegenda, "&Aacute;", "Á");
    textoLegenda = alterarTexto(textoLegenda, "&aacute;", "á");
    textoLegenda = alterarTexto(textoLegenda, "&Acirc;", "Â");
    textoLegenda = alterarTexto(textoLegenda, "&acirc;", "â");
    textoLegenda = alterarTexto(textoLegenda, "&Agrave;", "À");
    textoLegenda = alterarTexto(textoLegenda, "&agrave;", "à");
    textoLegenda = alterarTexto(textoLegenda, "&Aring;", "Å");
    textoLegenda = alterarTexto(textoLegenda, "&aring;", "å");
    textoLegenda = alterarTexto(textoLegenda, "&Atilde;", "Ã");
    textoLegenda = alterarTexto(textoLegenda, "&atilde;", "ã");
    textoLegenda = alterarTexto(textoLegenda, "&Auml;", "Ä");
    textoLegenda = alterarTexto(textoLegenda, "&auml;", "ä");
    textoLegenda = alterarTexto(textoLegenda, "&AElig;", "Æ");
    textoLegenda = alterarTexto(textoLegenda, "&aelig;", "æ");
    textoLegenda = alterarTexto(textoLegenda, "&Eacute;", "É");
    textoLegenda = alterarTexto(textoLegenda, "&eacute;", "é");
    textoLegenda = alterarTexto(textoLegenda, "&Ecirc;", "Ê");
    textoLegenda = alterarTexto(textoLegenda, "&ecirc;", "ê");
    textoLegenda = alterarTexto(textoLegenda, "&Egrave;", "È");
    textoLegenda = alterarTexto(textoLegenda, "&egrave;", "è"); 
    textoLegenda = alterarTexto(textoLegenda, "&Euml;", "Ë");  
    textoLegenda = alterarTexto(textoLegenda, "&euml;", "ë"); 
    textoLegenda = alterarTexto(textoLegenda, "&ETH;", "Ð"); 
    textoLegenda = alterarTexto(textoLegenda, "&eth;", "ð"); 
    textoLegenda = alterarTexto(textoLegenda, "&Iacute;", "Í");
    textoLegenda = alterarTexto(textoLegenda, "&iacute;", "í");
    textoLegenda = alterarTexto(textoLegenda, "&Icirc;", "Î");
    textoLegenda = alterarTexto(textoLegenda, "&icirc;", "î");
    textoLegenda = alterarTexto(textoLegenda, "&Igrave;", "Ì");
    textoLegenda = alterarTexto(textoLegenda, "&igrave;", "ì"); 
    textoLegenda = alterarTexto(textoLegenda, "&Iuml;", "Ï");  
    textoLegenda = alterarTexto(textoLegenda, "&iuml;", "ï");
    textoLegenda = alterarTexto(textoLegenda, "&Oacute;", "Ó");
    textoLegenda = alterarTexto(textoLegenda, "&oacute;", "ó");
    textoLegenda = alterarTexto(textoLegenda, "&Ocirc;", "Ô");
    textoLegenda = alterarTexto(textoLegenda, "&ocirc;", "ô");
    textoLegenda = alterarTexto(textoLegenda, "&Ograve;", "Ò");
    textoLegenda = alterarTexto(textoLegenda, "&ograve;", "ò");
    textoLegenda = alterarTexto(textoLegenda, "&Oslash;", "Ø");
    textoLegenda = alterarTexto(textoLegenda, "&oslash;", "ø");
    textoLegenda = alterarTexto(textoLegenda, "&Otilde;", "Õ");
    textoLegenda = alterarTexto(textoLegenda, "&otilde;", "õ");
    textoLegenda = alterarTexto(textoLegenda, "&Ouml;", "Ö");  
    textoLegenda = alterarTexto(textoLegenda, "&ouml;", "ö");
    textoLegenda = alterarTexto(textoLegenda, "&Uacute;", "Ú");
    textoLegenda = alterarTexto(textoLegenda, "&uacute;", "ú");
    textoLegenda = alterarTexto(textoLegenda, "&Ucirc;", "Û");
    textoLegenda = alterarTexto(textoLegenda, "&ucirc;", "û");
    textoLegenda = alterarTexto(textoLegenda, "&Ugrave;", "Ù");
    textoLegenda = alterarTexto(textoLegenda, "&ugrave;", "ù"); 
    textoLegenda = alterarTexto(textoLegenda, "&Uuml;", "Ü");  
    textoLegenda = alterarTexto(textoLegenda, "&uuml;", "ü");
    textoLegenda = alterarTexto(textoLegenda, "&Ccedil;", "Ç");  
    textoLegenda = alterarTexto(textoLegenda, "&ccedil;", "ç");  
    textoLegenda = alterarTexto(textoLegenda, "&Ntilde;", "Ñ");    
    textoLegenda = alterarTexto(textoLegenda, "&ntilde;", "ñ");   
    textoLegenda = alterarTexto(textoLegenda, "&lt;", "<");
    textoLegenda = alterarTexto(textoLegenda, "&gt;", ">");
    textoLegenda = alterarTexto(textoLegenda, "&amp;", "&");
    textoLegenda = alterarTexto(textoLegenda, "&quot;", "\"");
    textoLegenda = alterarTexto(textoLegenda, "&reg;", "®");
    textoLegenda = alterarTexto(textoLegenda, "&copy;", "©");
    textoLegenda = alterarTexto(textoLegenda, "&Yacute;", "Ý");
    textoLegenda = alterarTexto(textoLegenda, "&yacute;", "ý");
    textoLegenda = alterarTexto(textoLegenda, "&THORN;", "Þ");
    textoLegenda = alterarTexto(textoLegenda, "&thorn;", "þ");
    textoLegenda = alterarTexto(textoLegenda, "&szlig;", "ß");
    return textoLegenda;
}

function alterarTexto(textoLegenda, stringErrada, stringCorrigida){
    var tamanho = textoLegenda.split(stringErrada).length - 1;

    return alteraOcorrencias(textoLegenda, stringErrada, stringCorrigida, tamanho);
}

function alteraOcorrencias(textoLegenda, stringErrada, stringCorrigida, tamanho){
    for(var i = 0; i < tamanho; i++){
        textoLegenda = textoLegenda.replace(stringErrada, stringCorrigida);
    }
    
    return textoLegenda;
}