/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////   endereco_imagem_user_logado     
        function registrar_mensagem_enviada_esquerda( nome_contato, web_id, hora, mensagem_a_enviar ){
            try{
setTimeout(function(){                   
                //endereco_imagem_user_logado
                /*
                var imagem_src_temp = "";
                
                try{
                                        var imagem_src_data_web22 = baixar_imagem( document.getElementById("usuario_logado_id").value );    
                                        var imagem_src_data22 = converter_base64( imagem_src_data_web22 );
                                        if ( imagem_src_data22 === undefined || imagem_src_data22 === "" || imagem_src_data22 === null){
                                            
                                            imagem_src_data22 = "../arquivos/imagens/003_login/cont.png";
                                        }
                                        
                                        imagem_src_temp = imagem_src_data22;

                }catch(Exception){}
                */
               
               var imagem_src_data = document.getElementById ( web_id ).value; 
               
                var msg = 
"<!-- CONVERSA ENVIADA - INÍCIO -->" +

"<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr> <td>    <div style=\" padding: 0px; margin: 0px;\"> " +

"        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding-top: 5px; float: left; \"> " +

"            <tr> " +
"                <td style=\"background-color: #D3D3D3; \">" +
"                        <label style=\"float: left; padding: 0px; margin: 0px;\">  " + nome_contato + ": " + hora + "  </label> " +
"                </td>" +
"            </tr> " +

"            <tr> " +
"                <td style=\"background-color: #D3D3D3; \">" +
"            " +
"                    <div style=\"background-color: #3A3A3A; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%;\">" +
"                " +
"                        <table width=100% border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"background-color: #3A3A3A; color: #fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%;\"> " +
"                            <tr> " +

"                                <td style=\" width:50;  \">" +
"                                    <img src=\"" + imagem_src_data + "\" " + " width=\"50\" height=\"50\">" +
"                                </td>" +
"                                                                " +
"                                <td vertical-align=\"center\" style=\" padding-left: 5px;  \">" +
                                     "<div style=\"  padding-left: 5px;  padding-top: 10px;  \">" +
                                         mensagem_a_enviar +
                                     "</div>" +
"                                </td>" +
"                            </tr> " +
"                        </table>    " +
"                    </div>" +
"            " +
"                </td>" +
"                " +
"            </tr> " +
"        </table>" +

"   </div> </td> </tr> </table>" +

"        <!-- CONVERSA ENVIADA - FIM -->";

                setTimeout(function(){ 
                    var anterior = document.getElementById( "div_todas_as_conversas" + web_id ).innerHTML;
                    document.getElementById( "div_todas_as_conversas" + web_id ).innerHTML = msg + anterior;
                }, 0);
                
                play();

}, 0); 
                
            }catch(Exception){
                
                document.getElementById("div_conversa").innerHTML = "registrar_mensagem_enviada -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////