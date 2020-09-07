/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

        function registrar_mensagem_a__direita( jm_id_msg_num_web_receb, web_id, hora, mensagem_a_enviar ){
                
            var retorno = false;
            
            try{
                
                var linha_recebida = document.getElementById( "msg_enviadas" + web_id + "input" ).value.split("@");            
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        var interno_id;

                        var argumentos = linha_recebida[i].split("j");
                        for( var j = 0; j < argumentos.length; j++ ) {
                            if(j === 0){ 
                                interno_id = argumentos[j];
                            }
                        }
                        
                        var jm_id_msg_num_web = jm_id_msg_num_web_receb.trim(); 
                        var jm_id_msg_num_intern = interno_id.trim(); 
                        
                        if( verificar_igualdade_sem_espaco_no_final( jm_id_msg_num_web, jm_id_msg_num_intern ) === true ){
                            
                            retorno = true;
                            break;
                        }
                    }
                }
                
            }catch(Exception){                
            }
            finally {   
                
                if( retorno === false ){
                    
                    registrar_mensagem_enviada( web_id, hora, mensagem_a_enviar );
                }
            }         
        }

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////   endereco_imagem_user_logado     
        function registrar_mensagem_enviada( web_id, hora, mensagem_a_enviar ){
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
                var msg = 
"<!-- CONVERSA ENVIADA - INÍCIO -->" +

"<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr> <td>    <div style=\" padding: 0px; margin: 0px;\"> " +

"        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding-top: 5px; float: right; \"> " +

"            <tr> " +
"                <td style=\"background-color: #D3D3D3; \">" +
"                        <label style=\"float: right; padding: 0px; margin: 0px;\">  " + "Você: " + hora + "  </label> " +
"                </td>" +
"            </tr> " +

"            <tr> " +
"                <td style=\"background-color: #D3D3D3; \">" +
"            " +
"                    <div style=\"background-color: #EDECEC; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%;\">" +
"                " +
"                        <table width=100% border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"background-color: #EDECEC; color: #000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%;\"> " +
"                            <tr> " +
"                                                                " +
"                                <td style=\"padding-left: 5px;\">" +
                                     "<div style=\"  padding-right: 10px;    \">" +
                                         mensagem_a_enviar +
                                     "</div>" +
"                                </td>" +
"                                " +
"                                <td style=\" width:50; float: right; \">" +
"                                    <img src=\"" + endereco_imagem_user_logado + "\" " + " width=\"50\" height=\"50\">" +
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
                
}, 0);                
            }catch(Exception){
                
                document.getElementById("div_conversa").innerHTML = "registrar_mensagem_enviada -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////