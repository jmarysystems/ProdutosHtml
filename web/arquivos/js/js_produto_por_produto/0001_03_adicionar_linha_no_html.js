/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function adicionar_linha_no_html( ean_p ){

//setTimeout(function(){
        
    try{  
    
        //'application/json'         http://www.jmarysystems.com.br/ProdutosHtml/Html_dos_produtos_por_ean/7896213002619.html
        $.ajax({
            url: "http://www.jmarysystems.com.br/ProdutosHtml/Html_dos_produtos_por_ean/" + ean_p + ".html",
            //contentType: 'text/html',
            //cache: false,
            //method: 'GET',
            //dataType: 'html',
            //data: JSON.stringify({
            //    id: 'test',
            //    command: 'echo michael'
            //}),
            success: function(data) {
                //alert(data);
                $('#lista_de_produtos_jmary_systems').append( data );
            },
            error : function(error) {
                //alert(error);
                gerar( ean_p );
            }

        });

        //var anterior = document.getElementById("lista_de_produtos_jmary_systems").innerHTML;           
        //document.getElementById("lista_de_produtos_jmary_systems").innerHTML = anterior + add;                                                                 

    }catch(Exception){} 
    
//}, 0);    
    
}

function gerar( ean_p ) {                                      
        /*new Thread() {   @Override public void run() {*/ try { //Thread.sleep( 1 );

            var ean = ean_p;
            var des = "Produto não Registrado!";
            var cat = "";
            var umb = "";            
            
            
            var html = "<!-- INÍCIO DOS DADOS DO PRODUTO - id=\"ean\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                        " +
"                        <li " + "id=produto_" + ean + " style=\"\">" +
"                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%; padding: 0; margin: 0;\">" +
"                                <tr>" +
"                                    <td align=\"center\">" +
"                                        <ul style=\"list-style:none; padding: 0px; margin: 0px; width:100%;\" >" +
"                                            " +
"<!-- id=\"nome_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                             " +
"                                            <li " + "id=nome_" + ean + " style=\"width:100%; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%;\">" +
"                                                " + des + 
"                                            </li>" +
"                                            " +
"                                            <li style=\"\">" +
"                                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding: 0; margin: 0;\">" +
"                                                    <tr>" +
"                                                        <td>                                                                                                                    " +
"                                                            <ul style=\"list-style:none; padding: 0px; margin: 0px; width:100%;\" >" +
"                                                                " +
"                                                                <li style=\"float: left;\">" +
"                                                                    " +
"<!-- id=\"imagem_do_ean\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                                                      " +
"                                                                    <img " + "id=" + ean + " class=\"prod_ean\"  src=\"http://www.jmarysystems.com.br/Produtos/Imagens/" + ean + ".gif\" alt=" + ean + " onclick=\"aumentar_imagem(" + ean + ");\" width=\"150\" height=\"150\" style=\"cursor: zoom-in\" > " +
"                                                                </li>    " +
"                                                                " +
"                                                                <li style=\"float: left;\"> " +
"                                                                    " +
"                                                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding: 0; margin: 0;\">" +
"                                                                        " +
"                                                                        <tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 5px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                Ean:" +
"                                                                            </td> " +
"                                                                            " +
"<!-- id=\"ean_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                                                                         " +
"                                                                            <td " + "id=ean_" + ean + " style=\"margin-top: 5px; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left;\" >" +
"                                                                                            " + ean +
"                                                                            </td>" +
"                                                                        </tr>" +
                    
                                                                         "<tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 5px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                Categoria:" +
"                                                                            </td>  " +
"                                                                        </tr>" +

"<!-- id=\"categoria_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ --> " +
                                                                         "<tr>" +                                         
"                                                                            <td " + "id=categoria_" + ean + " style=\"margin-top: 5px; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left;\" >" +
"                                                                                            " + cat +
"                                                                            </td>" +
"                                                                        </tr>" +
                    
                                                                         "<tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 5px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                UMB:" +
"                                                                            </td>  " +
"                                                                            " +
"<!-- id=\"unidade_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                                                                         " +
"                                                                            <td " + "id=umb_" + ean + " style=\"margin-top: 5px; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left;\" >" +
"                                                                                            " + umb +
"                                                                            </td>" +
"                                                                        </tr>" +
                    
"                                                                        " +
"                                                                    </table> " +
"                                                                    " +
                    
"                                                                </li>" +
"                                                            </ul>" +
"                                                        </td>" +
"                                                    </tr>" +
"                                                </table>     " +
"                                            </li>                                            " +
"                                        </ul>                                                                         " +
"                                    </td>" +
"                                </tr>" +
"                            </table> " +
"                        </li> " +
"<!-- FIM DOS DADOS DO PRODUTO - id=\"ean\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ --> ";
            
            
            $('#lista_de_produtos_jmary_systems').append( html );
                            
        } catch( Exception ){ } //} }.start();
    }