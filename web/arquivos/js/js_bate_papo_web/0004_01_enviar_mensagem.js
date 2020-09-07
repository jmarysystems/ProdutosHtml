/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////        
        function enviar_mensagem( web_id, mensagem_a_enviar ){
            try{
                
                //document.getElementById("div_conversa").innerHTML = mensagem_a_enviar;
                
                ///*
                if ( mensagem_a_enviar.trim() === undefined || mensagem_a_enviar.trim() === "" || mensagem_a_enviar.trim() === null){
                    
                    alert("Escreva algo para poder ser enviado!\n");
                }
                else{
                
                    setTimeout(function(){ 
                        var now = new Date();
                        var id = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " - " + 
                             now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
                     
                        var comando = "cadastrar";
                    
                        var id_formulario_id = "1FAIpQLSefOZQKDyggUc78UrCSe5c5Lx6uupzPJR8UYh6wxOgDKTf4Sg";
                
                        var id_txt = "833181104";                                                
                    
                       //////////////////////////////////////////
                       var jm_id = exportar_Para_Alfabeto_JM_Sem_Arroba( id.trim() );
                       var jm_comando = exportar_Para_Alfabeto_JM_Sem_Arroba( comando.trim() );
                        var jm_remetente = exportar_Para_Alfabeto_JM_Sem_Arroba( document.getElementById("usuario_logado").value.trim() );
                        var jm_destinatario = exportar_Para_Alfabeto_JM_Sem_Arroba( email_do_contato_atual_selecionado.trim() );
                        var jm_mensagem_a_enviar = exportar_Para_Alfabeto_JM_Sem_Arroba( mensagem_a_enviar.trim() );
                                       
                        var id_txt2 = "@" + jm_id + "j" + jm_comando + "j" + jm_remetente  + "j" + 
                            jm_destinatario  + "j" +  
                            jm_mensagem_a_enviar + "@";
                        //////////////////////////////////////////
                        
                        /******************************************************/
                        var temp = document.getElementById( "msg_enviadas" + web_id + "input" ).value;
                            
                        var lista = jm_id + "j" + "@" + temp;    
                                                        
                        document.getElementById( "msg_enviadas" + web_id + "input" ).value = lista;
                        /******************************************************/
                
                        var GET_URL = "https://docs.google.com/forms/d/e/" + id_formulario_id + "/formResponse" +
                            "?entry." + id_txt + "=" + id_txt2;
                    
                        try{

                            /*
                            var xhttp = new XMLHttpRequest();
                            xhttp.open("GET", GET_URL, false);
                            xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
                            */
                           
                            //**//                            
                            $.post( GET_URL,
                                function(data, status){
                                    alert("Data: " + data + "\nStatus: " + status);
                                }
                            );
                            //**//

                        }catch(Exception){
                
                            //alert("jm_id " + jm_id + " - " + "id " + id);
                           //document.getElementById("resposta").innerHTML = "Erro xhttp - cadastrarTabelaLogin -- <br>" + Exception;
                        }         
                        
                        document.getElementById( "mensagem_a_enviar" + web_id ).value = "";  
                        //Não registra a mensagem por que ela vai ser lida e gravada pelo
                        registrar_mensagem_enviada( web_id, id, mensagem_a_enviar );
                        voltar_para_todas_as_mensagem( web_id );
                    
                    }, 0);
                                        
                }
                //*/
            }catch(Exception){
                
                document.getElementById("div_conversa").innerHTML = "enviar_mensagem -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////