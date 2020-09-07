/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////ESCREVER E ENVIAR MENSAGENS - INÍCIO   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        function percorrer_todas_as_conversas( web_id, web_contato_email_str, nome_principal ){
            try{    
                
setTimeout(function(){                 
                //alert( web_id + "\n" + web_contato_email + "\n" + nome_principal );
                        
                        var linha_recebida = document.getElementById("tabela_conversas").value.split("@"); 
                        //alert( "\nlinha_recebida:\n" + linha_recebida );
                        for( var i = 0; i < linha_recebida.length; i++ ) {
                            
                            //alert( i + " - " + linha_recebida[i] );
////////////////////////////////////////////////////////////////////////////
                            if( carregado === 0 ){
                                setTimeout(function(){ 
                                    //document.getElementById("contato_tabela_xy_01").style.display = 'block';
                                    /* Some tasks */ 
                                    document.getElementById("contato_tabela_xy_01").innerHTML = 
                                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Por favor! Aguarde <br> Carregando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>" +
                                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>" + 
                                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + i + " de " + linha_recebida.length + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>";
                                }, 0);
                            }
//////////////////////////////////////////////////////////////////////////// 

                            if( linha_recebida[i].includes("-") ){
                                
                                //alert( i + " - " + linha_recebida[i] );  
                                //
                                
                                /////////-------------------------------------------------------------------------------------------------------------------------------------
                                /////////-------------------------------------------------------------------------------------------------------------------------------------
                                if( document.getElementById( "contador" + web_id ).value < i ){
                                    
                                    //alert( i + " - " + linha_recebida[i] );
                                    
                                    var jm_id_msg;
                                    var jm_comando;
                                    var jm_remetente;   
                                    var jm_destinatario;   
                                    var jm_mensagem_a_receber;

                                    var argumentos = linha_recebida[i].split("j");
                                    for( var j = 0; j < argumentos.length; j++ ) {
                                        if(j === 0){ 
                                            jm_id_msg = argumentos[j];
                                        }
                                        else if(j === 1){
                                            jm_comando = argumentos[j];
                                        }
                                        else if(j === 2){
                                            jm_remetente = argumentos[j];
                                        }
                                        else if(j === 3){
                                            jm_destinatario = argumentos[j];
                                        }
                                        else if(j === 4){
                                            jm_mensagem_a_receber = argumentos[j];
                                        }
                                    }
                                
                                    var _00_local_usuario_logado_email_str            = document.getElementById("usuario_logado").value.trim().toUpperCase();
                                    
                                    var _11_local_contato_desta_tabela_email_str      = web_contato_email_str;
                                
                                    var _00_web_usuario_logado_email_remetente_str    = importar_Para_Alfabeto_JM(jm_remetente).trim().toUpperCase();
                                    var _11_web_usuario_logado_email_destinatario_str = importar_Para_Alfabeto_JM(jm_destinatario).trim().toUpperCase();     
                                    
                                    var web_hora_str = importar_Para_Alfabeto_JM( jm_id_msg ).trim();
                                    var web_mensagem_str = importar_Para_Alfabeto_JM( jm_mensagem_a_receber ).trim();
                                    var nova_mensagem = web_mensagem_str.trim().replace("\n", "<br>");
                                    
                                    escolha_01(
                                        _00_web_usuario_logado_email_remetente_str, 
                                            _00_local_usuario_logado_email_str,
                                                _11_local_contato_desta_tabela_email_str,
                                                    _11_web_usuario_logado_email_destinatario_str,
                                                            jm_id_msg,
                                                                web_id,
                                                                    nome_principal,
                                                                        web_hora_str,
                                                                            nova_mensagem
                                    );
                            
                                    document.getElementById( "contador" + web_id ).value = i;
                                }
                               /////////-------------------------------------------------------------------------------------------------------------------------------------
                               /////////------------------------------------------------------------------------------------------------------------------------------------- 
                            }
                        } 
                        
}, 0);                

            }catch(Exception){                
            }finally {   
                
            }
        }
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////ESCREVER E ENVIAR MENSAGENS - FIM   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 