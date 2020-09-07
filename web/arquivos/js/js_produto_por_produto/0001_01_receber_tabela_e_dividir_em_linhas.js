/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function receber_tabela_e_dividir_em_linhas( ean_a_ser_consultado, html_da_div_consultar_produto ){

setTimeout(function(){
    
    try{           
        
        //alert( "dddd" );
        
        document.getElementById("lista_de_produtos_jmary_systems").innerHTML = "";
        
        document.getElementById("div_consultar_produto").style.display = 'none'; 
        document.getElementById("div_mostrar_produto").style.display = 'block'; 

        document.getElementById("div_consultar_produto").innerHTML = html_da_div_consultar_produto;
        
        var eans = ean_a_ser_consultado.trim().split( '\n' );
        for( var j = 0; j < eans.length; j++ ) {
            
            //alert( eans[j].trim() );
            //pesquisar_ean_linha_por_linha( eans[j].trim() );
            adicionar_linha_no_html( eans[j].trim() );
        } 

    }catch(Exception){ 
        document.getElementById("div_consultar_produto").innerHTML = "pesquisar_dados_do_produto -- " + Exception;
    } 
    
}, 0);    
    
} 