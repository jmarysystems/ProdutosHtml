/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////  
//CADASTRAR CONTATO 
///////////////////////////////////////////////////////////////////////////////////////////////////////////               
        function cadastrar_contato_001(
                contato_email,
                        contato_nome,
                            contato_nome_meio,
                                contato_ultimo_nome,
                                    conteudo_div){
            
            try{
                                                        
                setTimeout(function(){ 
                    /* Some tasks */ 
                    document.getElementById("div_add_contato").innerHTML = "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";                    
                    document.getElementById("div_add_contato").style.display = 'block'; 
                    
                    document.getElementById("resposta").style.display = 'none'; 
                    document.getElementById("div_meus_contatos").style.display = 'none'; 
                    document.getElementById("div_novo_usuario").style.display = 'none';
                    
                    document.getElementById("div_conversa").style.display = 'none';
                }, 0);
            
                setTimeout(function(){ 
                    var now = new Date();
                    var id = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + "-" + 
                             now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
                     
                    var comando = "cadastrar";
                    
                    var id_formulario_id = "1FAIpQLSc5mQRICTP2Zi5AwPGGzya8hQ6spe5jLTad8lM99KNEB4c6Dw";
                
                    var id_txt = "2072966352";
                    
                    //////////////////////////////////////////
                    var jm_id = exportar_Para_Alfabeto_JM_Sem_Arroba( id.trim() );
                    var jm_comando = exportar_Para_Alfabeto_JM_Sem_Arroba( comando.trim() );
                    
                //ESPECIAL    
                    var local_usuario_logado = document.getElementById ('usuario_logado').value;
                    var jm_local_usuario_logado_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( local_usuario_logado.trim() );
                    
                //OBRIGATÓRIOS TER VINDO PREENCHIDO
                    var jm_contato_email_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( contato_email.trim() );
                    var jm_contato_nome_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( contato_nome.trim() );
                    
                //NÃO OBRIGATÓRIOS TER VINDO PREENCHIDO
                    //////////////////////////////////////////////////////////////////////////////////////////////////
                    var jm_contato_nome_meio_digitado;
                    if (contato_nome_meio === "" || contato_nome_meio === null){
                        jm_contato_nome_meio_digitado = "null";
                    }
                    else{
                        jm_contato_nome_meio_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( contato_nome_meio.trim() );
                    }
                    //////////////////////////////////////////////////////////////////////////////////////////////////
                    
                    //////////////////////////////////////////////////////////////////////////////////////////////////
                    var jm_contato_ultimo_nome_digitado;
                                        
                    if (jm_contato_ultimo_nome_digitado === "" || jm_contato_ultimo_nome_digitado === null){
                        jm_contato_ultimo_nome_digitado = "null";
                    }
                    else{
                        jm_contato_ultimo_nome_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( contato_ultimo_nome.trim() );
                    }
                    //////////////////////////////////////////////////////////////////////////////////////////////////
                    
            //id a enviar        
                    var id_txt2 = "@" + jm_id + "j" + jm_comando + "j" + 
                            jm_local_usuario_logado_digitado  + "j" + 
                            jm_contato_email_digitado  + "j" + 
                            jm_contato_nome_digitado  + "j" +  
                            jm_contato_nome_meio_digitado  + "j" +  
                            jm_contato_ultimo_nome_digitado +
                            "@";
                    //////////////////////////////////////////
                
                    var GET_URL = "https://docs.google.com/forms/d/e/" + id_formulario_id + "/formResponse?"
                    + "entry." + id_txt + "=" + id_txt2;
                    
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
                        //document.getElementById("resposta").innerHTML = "xhttp - cadastrarTabelaLogin -- " + Exception;
                    }

                    alert("Contato: " + contato_email + " OK\nCadastrado com sucesso!");
                    document.getElementById("div_add_contato").innerHTML = conteudo_div;
                    document.getElementById("div_add_contato").style.display = 'none'; 
                    
                    document.getElementById("resposta").style.display = 'none'; 
                    document.getElementById("div_meus_contatos").style.display = 'block'; 
                    document.getElementById("div_novo_usuario").style.display = 'none';
                    
                    document.getElementById("div_conversa").style.display = 'none';
                    
                    //LISTAR CONTATOS DO USUÁRIO LOGADO
                    listar_contatos( document.getElementById("usuario_logado").value );
                      
                }, 500);
            
            }catch(Exception){
                
                document.getElementById("div_add_contato").innerHTML = "cadastrar_contato_002 -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////  
//CADASTRAR CONTATO 
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 

