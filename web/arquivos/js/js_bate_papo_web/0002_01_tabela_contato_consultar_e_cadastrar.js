/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////  
//CONSULTAR CONTATO ANTES DE CADASTRAR
///////////////////////////////////////////////////////////////////////////////////////////////////////////        
        function consultar_contato_antes_de_cadastrar_001(
            contato_email,
                contato_nome,
                    contato_nome_meio,
                        contato_ultimo_nome,
                            conteudo_div){  
            
            if (contato_email === "" || contato_email === null){
                alert("Para adicionar um novo contato:\n01 informe um email do contato ou\n02 informe o telefone do contato.");
            }
            else if (contato_nome === "" || contato_nome === null){
                alert("Para adicionar um novo contato:\n01 informe o nome do contato.");
            }
            else{
                
                var count_x = 1;
                
                _02_controle_baixar_tabela_consultar_contato(
                    count_x,
                        contato_email,
                            contato_nome,
                                contato_nome_meio,
                                    contato_ultimo_nome,
                                        conteudo_div);
            }
        }
        
        /////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
        function _01_controle_loop_consultar_contato(
                    count_x,
                        contato_email,
                            contato_nome,
                                contato_nome_meio,
                                    contato_ultimo_nome,
                                        conteudo_div){
            if( count_x < 20 ){      
                
                setTimeout(function(){ 
                     var count_xx = count_x + 1;
                     
                    _02_controle_baixar_tabela_consultar_contato(
                    count_xx,
                        contato_email,
                            contato_nome,
                                contato_nome_meio,
                                    contato_ultimo_nome,
                                        conteudo_div);
                }, 1000);
            }
            else{
                
                alert("Verifique sua conexão \ncom a internet. \nContato " + contato_email + " não Cadastrado!");
                document.getElementById("resposta").innerHTML = conteudo_div;
            }
        }
        
        function _02_controle_baixar_tabela_consultar_contato(
                    count_x,
                        contato_email,
                            contato_nome,
                                contato_nome_meio,
                                    contato_ultimo_nome,
                                        conteudo_div){
            
            try{
                var id_planilha = "10xscEU1L66fCBmVypEVn8h6b3Ku2eRZMVzbHIVzS6Ns";
                var urlxx = "https://sheets.googleapis.com/v4/spreadsheets/"+ id_planilha +"/values/A:B?key=AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";
                
                
////////////////////////////////////////////////////////////////////////////
                setTimeout(function(){ 
                    /* Some tasks */ 
                     document.getElementById("div_add_contato").innerHTML = 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Tentativa de Conexão: " + count_x + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                }, 0);
////////////////////////////////////////////////////////////////////////////

                var url = urlxx;
                jQuery.getJSON(url).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    document.getElementById("tabela_temp_dos_contatos_para_cadastrar").value = JSON.stringify(data);
                    
                    _03_controle_verificar_se_tem_mensagem_consultar_contato(
                    count_x,
                        contato_email,
                            contato_nome,
                                contato_nome_meio,
                                    contato_ultimo_nome,
                                        conteudo_div);
                }).error(function(message) {
                    //console.error('error' + message); 
                    _01_controle_loop_consultar_contato(
                    count_x,
                        contato_email,
                            contato_nome,
                                contato_nome_meio,
                                    contato_ultimo_nome,
                                        conteudo_div);
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }
        
        function _03_controle_verificar_se_tem_mensagem_consultar_contato( 
                count_x,
                    contato_email,
                            contato_nome,
                                contato_nome_meio,
                                    contato_ultimo_nome,
                                        conteudo_div){
            
            try{
                
                var tem_mensagem = false;
                var linha_recebida = document.getElementById("tabela_temp_dos_contatos_para_cadastrar").value.split("@");
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        tem_mensagem = true;
                        break;
                    }
                }
                
                if( tem_mensagem === true ){
                    
                    consultar_contato_antes_de_cadastrar_003( 
                        contato_email,
                            contato_nome,
                                contato_nome_meio,
                                    contato_ultimo_nome,
                                        conteudo_div);
                }
                else{
                    
                    cadastrar_contato_001( 
                        contato_email,
                            contato_nome,
                                contato_nome_meio,
                                    contato_ultimo_nome,
                                        conteudo_div);
                }
            }
            catch(Exception){}
        }
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
        
                
        function consultar_contato_antes_de_cadastrar_003( 
            contato_email,
                contato_nome,
                    contato_nome_meio,
                        contato_ultimo_nome,
                            conteudo_div){        
            try{           
                var contato_nao_cadastrado = false;
                
                var linha_recebida = document.getElementById("tabela_temp_dos_contatos_para_cadastrar").value.split("@");            
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        var web_id;
                        var web_comando;
                        var web_usuario_logado;
                        
                        var web_contato_email;
                        var web_contato_nome;
                        var web_contato_nome_meio;
                        var web_contato_ultimo_nome;

                        var argumentos = linha_recebida[i].split("j");
                        for( var j = 0; j < argumentos.length; j++ ) {
                            if(j === 0){ 
                                web_id = argumentos[j];
                            }
                            else if(j === 1){
                                web_comando = argumentos[j];
                            }
                            else if(j === 2){
                                web_usuario_logado = argumentos[j];
                            }
                            else if(j === 3){
                                web_contato_email = argumentos[j];
                            }
                            else if(j === 4){
                                web_contato_nome = argumentos[j];
                            }
                            else if(j === 5){
                                web_contato_nome_meio = argumentos[j];
                            }
                            else if(j === 6){
                                web_contato_ultimo_nome = argumentos[j];
                            }
                        }

                        
                       var contato_email_str = contato_email.trim().toUpperCase();
                       
                       var web_contato_email_str = converter_base64(web_contato_email).trim().toUpperCase();
                       
                       //Verificar se este contato é cadastrado
                       if( verificar_igualdade_sem_espaco_no_final( contato_email_str, web_contato_email_str ) === true ){                       
                            /*
                            document.getElementById("resposta").innerHTML = 
                                "<ul id=\"ul_resposta\" style=\"list-style:none; padding: 0px; margin: 0px;\"> </ul>";
                            document.getElementById("ul_resposta").innerHTML = "Sim " + senha_da_linha + " ** " + senha_digitada_str ;
                            */
                           
                            //Verificar se este contato é cadastrado para este usuário   
                            var local_usuario_logado = document.getElementById ('usuario_logado').value;
                            var jm_local_usuario_logado_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( local_usuario_logado.trim() );
                            
                            var local_usuario_logado_str = converter_base64( jm_local_usuario_logado_digitado ).trim().toUpperCase();
                            var web_usuario_logado_str = converter_base64( web_usuario_logado ).trim().toUpperCase();
                            
                            if( verificar_igualdade_sem_espaco_no_final( local_usuario_logado_str, web_usuario_logado_str ) === true ){
                                // Fim do loop
                                contato_nao_cadastrado = true;
                                break;
                            }
                       }
                       else{
                            contato_nao_cadastrado = false;
                            //alert("Usuário: " + usuario_digitado + "\nNão cadastrado" );
                            //document.getElementById("resposta").innerHTML = conteudo_div;
                       }
                    }
                }   
                
                if( contato_nao_cadastrado === true ){
                    
                    alert("Contato: " + contato_email + "\nNão Cadastrado! \nEste já é um Contato seu Cara Pálida!" );
                    document.getElementById("div_add_contato").style.display = 'none'; 
                    document.getElementById("div_add_contato").innerHTML = conteudo_div;
                    document.getElementById("div_meus_contatos").style.display = 'block'; 
                    
                    document.getElementById("div_conversa").style.display = 'none';
                }
                else{
                    
                    cadastrar_contato_001( 
                        contato_email,
                            contato_nome,
                                contato_nome_meio,
                                    contato_ultimo_nome,
                                        conteudo_div);
                }
            }catch(Exception){
                
                document.getElementById("div_add_contato").innerHTML = "fazerLogin -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////  
//CONSULTAR CONTATO ANTES DE CADASTRAR
///////////////////////////////////////////////////////////////////////////////////////////////////////////
