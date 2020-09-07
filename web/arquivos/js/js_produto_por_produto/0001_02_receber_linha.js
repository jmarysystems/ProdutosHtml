/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function pesquisar_ean_linha_por_linha( ean_a_ser_pesquisado ){

//setTimeout(function(){   //  7898506464890                  https://github.com/jmarysystems/ProdutoPorEan.git
    
    try{
        
        var urlxx = "arquivos/imagens/Html_dos_produto_por_ean/" + ean_a_ser_pesquisado + ".html";
        //$('#lista_de_produtos_jmary_systems').append("<h1> teste 1 </h1>");
        //$('#lista_de_produtos_jmary_systems').append("<h1> teste 2 </h1>");
        
        //'application/json'
        $.ajax({
    url: urlxx,
    contentType: 'text/html',
    cache: false,
    method: 'GET',
    dataType: 'html',
    //data: JSON.stringify({
    //    id: 'test',
    //    command: 'echo michael'
    //}),
    success: function(data) {
        //alert(data);
        $('#lista_de_produtos_jmary_systems').append( data );
    }
});
    
        /*
    $.ajax({
        url: urlxx,
        dataType: 'html',
        success: function (html) {
            $('#lista_de_produtos_jmary_systems').html(html);
        }
    });
    */
        
        //$.get( url, function (conteudoDoArquivo) {
        //    var anterior = document.getElementById("lista_de_produtos_jmary_systems").innerHTML;           
        //    document.getElementById("lista_de_produtos_jmary_systems").innerHTML = anterior + conteudoDoArquivo; 
        //});
        
        /*
        $.ajax( url, {
            success: function (data, status, xhr) {
            $('lista_de_produtos_jmary_systems').append(data);
        }});
    */
                
            //var linha_por_linha = ""; try{ linha_por_linha = document.getElementById("tabela_produtos_por_ean_baixada").value.split("],"); }catch(Exception){}              
            //document.getElementById("lista_de_produtos_jmary_systems").innerHTML = linha_por_linha;
            
            /* 
            for( var x = 1; x < linha_por_linha.length; x++ ) {
                
                var linha = ""; try{ linha = linha_por_linha[x].split("\",\""); }catch(Exception){}                
                var ean_p = ""; try{ ean_p = linha[0].trim().replace("[","").replace("\"",""); }catch(Exception){}
                var des_p = ""; try{ des_p = linha[1].trim();                                  }catch(Exception){}
                var cat_p = ""; try{ cat_p = linha[2].trim();                                  }catch(Exception){}
                var umb_p = ""; try{ umb_p = linha[3].trim().replace("\"","");                 }catch(Exception){}
                                
                //pesquisar_ean_linha_por_linha22( ean_a_ser_pesquisado, linha_por_linha[x], ean_p, des_p, cat_p, umb_p );
                 
                setTimeout(function(){
                    var anterior = document.getElementById("lista_de_produtos_jmary_systems").innerHTML;
                    document.getElementById("lista_de_produtos_jmary_systems").innerHTML = anterior + "<br>" + linha_por_linha[x];  
                }, 0);
            }
            */
                                                
    }catch(Exception){}  
    
//}, 0);    
    
} 