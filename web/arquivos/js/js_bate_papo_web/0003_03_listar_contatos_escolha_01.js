/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function escolha_01(
        _00_web_usuario_logado_email_remetente_str,
            _00_local_usuario_logado_email_str,
                _11_local_contato_desta_tabela_email_str,
                    _11_web_usuario_logado_email_destinatario_str,
                            jm_id_msg,
                                web_id,
                                    nome_principal,
                                        web_hora_str,
                                            nova_mensagem
    ){
            
    try{
setTimeout(function(){         
        //Se o remetente for igual ao usuário logado então:
                                    if( verificar_igualdade_sem_espaco_no_final( _00_web_usuario_logado_email_remetente_str, _00_local_usuario_logado_email_str ) === true ){
                           
                                        //Se o destinatário for igual ao contato local aberto então:
                                        if( verificar_igualdade_sem_espaco_no_final( _11_local_contato_desta_tabela_email_str, _11_web_usuario_logado_email_destinatario_str ) === true ){
                                            
                                            registrar_mensagem_a__direita( jm_id_msg, web_id, web_hora_str, nova_mensagem );
                                        }
                                    } 
                                    //Se o remetente for igual ao usuário logado então:
                                    else if( verificar_igualdade_sem_espaco_no_final( _00_web_usuario_logado_email_remetente_str, _11_local_contato_desta_tabela_email_str ) === true ){
                           
                                        //Se o destinatário for igual ao usuário logado então:
                                        if( verificar_igualdade_sem_espaco_no_final( _11_web_usuario_logado_email_destinatario_str, _00_local_usuario_logado_email_str ) === true ){
                                    
                                            //document.getElementById("usuario_logado_imagem").value;                                            
                                            registrar_mensagem_enviada_esquerda( nome_principal, web_id, web_hora_str, nova_mensagem );
                                        }
                                    }
                                    
}, 0);        

    }catch(Exception){}
}