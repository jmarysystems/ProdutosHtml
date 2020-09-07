/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
        function inicioTabelaLogin(usuario_digitado, senha_digitada, conteudo_div){  
            if (usuario_digitado === "" || usuario_digitado === null){
                alert("Para efetuar login:\n01 informe o nome de usuário\n02 informe a senha");
            }
            else if (senha_digitada === "" || senha_digitada === null){
                
                alert("Para efetuar login:\n01 informe o nome de usuário\n02 informe a senha");
            }
            else{
                
                var count_x = 1;
                
                _02_controle_baixar_tabela_login( count_x, usuario_digitado, senha_digitada, conteudo_div );
            }
        }
        
        function _01_controle_loop_login( count_x, usuario_digitado, senha_digitada, conteudo_div ){
            if( count_x < 20 ){      
                
                setTimeout(function(){ 
                     var count_xx = count_x + 1;
                    _02_controle_baixar_tabela_login( count_xx, usuario_digitado, senha_digitada, conteudo_div );
                }, 1000);
            }
            else{
                
                alert("Usuário: " + usuario_digitado + " \nNão Cadastrado \nCadastre-se Cara Pálida! \nSe você for cadastrado: verifique sua conexão com a internet.");
                document.getElementById("resposta").innerHTML = conteudo_div;
            }
        }
        
        function _02_controle_baixar_tabela_login( count_x, usuario_digitado, senha_digitada, conteudo_div ){
            
            try{
                var id_planilha = "1UHCZa_LGpJ1pnY4HI0DhuuaBpjtmpp_Hpih-q1BiFVk";
                var urlxx = "https://sheets.googleapis.com/v4/spreadsheets/"+ id_planilha + "/values/A:B?key=AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";
                
                ////////////////////////////////////////////////////////////////////////////
                setTimeout(function(){ 
                    /* Some tasks */ 
                     document.getElementById("resposta").innerHTML = 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Tentativa de Conexão: " + count_x + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                }, 0);
                ////////////////////////////////////////////////////////////////////////////

                var url = urlxx;
                jQuery.getJSON(url).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    document.getElementById("tabela_usuarios").value = JSON.stringify(data);
                    _03_controle_verificar_se_tem_mensagem_login( count_x, usuario_digitado, senha_digitada, conteudo_div );
                }).error(function(message) {
                    //console.error('error' + message); 
                    _01_controle_loop_login( count_x, usuario_digitado, senha_digitada, conteudo_div );
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }
        
        function _03_controle_verificar_se_tem_mensagem_login( count_x, usuario_digitado, senha_digitada, conteudo_div ){
            
            try{
                
                var tem_mensagem = false;
                var linha_recebida = document.getElementById("tabela_usuarios").value.split("@");
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        tem_mensagem = true;
                        break;
                    }
                }
                
                if( tem_mensagem === true ){
                                        
                    consultaTabelaLogin( usuario_digitado, senha_digitada, conteudo_div );
                }
                else{
                    
                    _01_controle_loop_login(usuario_digitado, senha_digitada, conteudo_div, count_x);
                }
            }
            catch(Exception){}
        }
        
                
        function consultaTabelaLogin( usuario_digitado, senha_digitada, conteudo_div ){            
            try{           
                var usuario_nao_cadastrado = false;
                
                var linha_recebida = document.getElementById("tabela_usuarios").value.split("@");            
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        var id;
                        var comando;
                        var usuario;
                        var senha;
                        var nome_digitado;
                        var email_de_recuperacao;
                        var imagem_endereco_web_digitado;
                        var argumentos = linha_recebida[i].split("j");
                        for( var j = 0; j < argumentos.length; j++ ) {
                            if(j === 0){ 
                                id = argumentos[j];
                            }
                            else if(j === 1){
                                comando = argumentos[j];
                            }
                            else if(j === 2){
                                usuario = argumentos[j];
                            }
                            else if(j === 3){
                                senha = argumentos[j];
                            }
                            else if(j === 4){
                                nome_digitado = argumentos[j];
                            }
                            else if(j === 5){
                                email_de_recuperacao = argumentos[j];
                            }
                            else if(j === 6){
                                imagem_endereco_web_digitado = argumentos[j];
                            }
                        }
                        /*
                        document.getElementById("resposta").innerHTML = 
                            "<ul id=\"ul_resposta\" style=\"list-style:none; padding: 0px; margin: 0px;\"> </ul>";   
                        var usuario_txt = "<li>" + importar_Para_Alfabeto_JM(usuario) + "</li>";
                        var senha_txt = "<li>" + importar_Para_Alfabeto_JM(senha) + "</li>";                
                        document.getElementById("ul_resposta").innerHTML = usuario_txt + senha_txt;
                        */
                       var usuario_digitado_str = usuario_digitado.trim().toUpperCase();
                       var senha_digitada_str = senha_digitada.trim().toUpperCase();
                       
                       var usuario_da_linha = importar_Para_Alfabeto_JM(usuario).trim().toUpperCase();
                       var senha_da_linha = importar_Para_Alfabeto_JM(senha).trim().toUpperCase();
                       
                       var user_ok = usuario_da_linha.localeCompare(usuario_digitado_str);
                       var pass_ok = senha_da_linha.localeCompare(senha_digitada_str);
                       
                       if( user_ok === 0 ){ 
                            /*
                            document.getElementById("resposta").innerHTML = 
                                "<ul id=\"ul_resposta\" style=\"list-style:none; padding: 0px; margin: 0px;\"> </ul>";
                            document.getElementById("ul_resposta").innerHTML = "Sim " + senha_da_linha + " ** " + senha_digitada_str ;
                            */
                           
                            if( pass_ok === 0 ){ 
                                //document.getElementById("resposta").innerHTML = "<div>Login OK</div>";
                                //setTimeout(function(){
                                    try{
                                        var count_yy = 1;
                                        _02_controle_baixar_tabela_baixar_imagem( count_yy, id, usuario_digitado, nome_digitado );
                                        //var imagem_src_data_web22 = baixar_imagem( id );    
                                        //document.getElementById("resposta").innerHTML = imagem_src_data_web22;
/*                                        var imagem_src_data22 = converter_base64( imagem_src_data_web22 );
                                        if ( imagem_src_data22 === undefined || imagem_src_data22 === "" || imagem_src_data22 === null){
                                            
                                            imagem_src_data22 = "../arquivos/imagens/003_login/cont.png";
                                        }
                                        
                                        endereco_imagem_user_logado = imagem_src_data22;
                                        document.getElementById("usuario_logado_imagem").value = imagem_src_data22;
                                        
                                        document.getElementById("img_conversa_user_logado").src = imagem_src_data22;
*/
                                    }catch(Exception){}
                                //}, 500);
/*                                
                                document.getElementById("resposta").style.display = 'none'; 
                                document.getElementById("div_meus_contatos").style.display = 'block';  
                                
                                //LOGIN EFETUADO COM SUCESSO 
                                document.getElementById("usuario_logado").value = usuario_digitado;
                                var nome_digitado_da_linha = importar_Para_Alfabeto_JM(nome_digitado).trim().toUpperCase();
                                document.getElementById("cara_palida").innerHTML = "-)-> " + nome_digitado_da_linha + " <-(-";
                                //document.getElementById("cara_palida").innerHTML = "-)-> " + "Cara Pálida Web" + " <-(-";
                                document.getElementById("usuario_logado_id_nome").value = nome_digitado_da_linha;
                                
                                //LISTAR CONTATOS DO USUÁRIO LOGADO 
                                listar_contatos( document.getElementById("usuario_logado").value );
                                
                                document.getElementById("usuario_logado_id").value = id;      */
                            }
                            else{
                                
                                alert("Usuário: " + usuario_digitado + " OK\nSenha incorreta");
                                document.getElementById("resposta").innerHTML = conteudo_div;
                            }
                            
                            // Fim do loop
                            usuario_nao_cadastrado = false;
                            break;
                       }
                       else{
                            usuario_nao_cadastrado = true;
                            //alert("Usuário: " + usuario_digitado + "\nNão cadastrado" );
                            //document.getElementById("resposta").innerHTML = conteudo_div;
                       }
                    }
                }   
                
                if( usuario_nao_cadastrado === true ){
                    
                    alert("Usuário: " + usuario_digitado + "\nNão cadastrado" );
                    document.getElementById("resposta").innerHTML = conteudo_div;
                }
            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "fazerLogin -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////   


///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function _01_controle_loop_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado ){
            if( count_x < 20 ){      
                
                setTimeout(function(){ 
                     var count_xx = count_x + 1;
                    _02_controle_baixar_tabela_baixar_imagem( count_xx, web_id_da_tb_usuario, usuario_digitado, nome_digitado );
                }, 1000);
            }
            else{
                
                var imagem_src_datat43 = "../arquivos/imagens/003_login/cont.png";
                                        
                endereco_imagem_user_logado = imagem_src_datat43;
                document.getElementById("usuario_logado_imagem").value = imagem_src_datat43;
                                        
                document.getElementById("img_conversa_user_logado").src = imagem_src_datat43;
                        
                finalizando( usuario_digitado, nome_digitado, web_id_da_tb_usuario );
            }
        }
        
        function _02_controle_baixar_tabela_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado ){
            
            try{
                var id_planilha = "1xCq2u_Mt9R-lDi0JeaOyTDgrSHvHphh0LD-aIySRv9Q";
                var urlxx = "https://sheets.googleapis.com/v4/spreadsheets/"+ id_planilha +"/values/A:B?key=AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";
                
                ////////////////////////////////////////////////////////////////////////////
                setTimeout(function(){ 
                    /* Some tasks */ 
                     document.getElementById("resposta").innerHTML = 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Baixando imagens: " + count_x + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                }, 0);
                ////////////////////////////////////////////////////////////////////////////

                var url = urlxx;
                jQuery.getJSON(url).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    document.getElementById("tabela_imagens_dos_contatos").value = JSON.stringify(data);
                    _03_controle_verificar_se_tem_mensagem_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado );
                }).error(function(message) {
                    //console.error('error' + message); 
                    _01_controle_loop_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado );
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }
        
        function _03_controle_verificar_se_tem_mensagem_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado ){
            
            try{
                
                var tem_mensagem = false;
                var linha_recebida = document.getElementById("tabela_imagens_dos_contatos").value.split("@");
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        tem_mensagem = true;
                        break;
                    }
                }
                
                if( tem_mensagem === true ){
////******************************************************************************************************                       
                    var retorno = "";
                                                            
                    //var imagem_src_data_web22 = pegando_imagem_do_usuario_logado( mensagem_x ); 
                    //document.getElementById("resposta").innerHTML = mensagem_x;
                    var linha_recebida = document.getElementById("tabela_imagens_dos_contatos").value.split("@");            
                    for( var i = 0; i < linha_recebida.length; i++ ) {
                        if( linha_recebida[i].includes("-") ){
                            var web_id_usuario;
                            var web_email_usuario;
                            var web_contador;                        
                            var web_parte;

                            //var id_txt2 = "@" + id_usuario + "j" + email_usuario + "j" + contador  + "j" + parte + "@";
                            var argumentos = linha_recebida[i].split("j");
                            for( var j = 0; j < argumentos.length; j++ ) {
                                if(j === 0){ 
                                    web_id_usuario = argumentos[j];
                                }
                                else if(j === 1){
                                    web_email_usuario = argumentos[j];
                                }
                                else if(j === 2){
                                    web_contador = argumentos[j];
                                }
                                else if(j === 3){
                                    web_parte = argumentos[j];
                                }
                            }
                            
                            var web_id_da_tb_usuario_str = importar_Para_Alfabeto_JM( web_id_da_tb_usuario.trim() ).trim().toUpperCase();                        
                            var web_id_usuario_da_linha = importar_Para_Alfabeto_JM( web_id_usuario.trim() ).trim().toUpperCase();
                            if( verificar_igualdade_sem_espaco_no_final( web_id_da_tb_usuario_str, web_id_usuario_da_linha ) === true ){   
                                
                                retorno += web_parte;
                            }
                        }else{
                                                       
                        }
                    } 
////******************************************************************************************************                    
                    
                    //document.getElementById("resposta").innerHTML = retorno;
                    try{
                        //var imagem_src_data_web22 = baixar_imagem( id );    
                        //document.getElementById("resposta").innerHTML = imagem_src_data_web22;
                        var imagem_src_data22 = converter_base64( retorno );
                        if ( imagem_src_data22 === undefined || imagem_src_data22 === "" || imagem_src_data22 === null){
                                            
                            imagem_src_data22 = "../arquivos/imagens/003_login/cont.png";
                        }
                                        
                        endereco_imagem_user_logado = imagem_src_data22;
                        document.getElementById("usuario_logado_imagem").value = imagem_src_data22;
                                        
                        document.getElementById("img_conversa_user_logado").src = imagem_src_data22;
                        
                        finalizando( usuario_digitado, nome_digitado, web_id_da_tb_usuario );

                    }catch(Exception){}
                }
                else{
                    
                    _01_controle_loop_baixar_imagem( count_x, web_id_da_tb_usuario, usuario_digitado, nome_digitado );
                }
            }
            catch(Exception){}
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////


        function finalizando( usuario_digitado, nome_digitado, id ){
                           
            document.getElementById("resposta").style.display = 'none'; 
            document.getElementById("div_meus_contatos").style.display = 'block';  
                                
            //LOGIN EFETUADO COM SUCESSO 
            document.getElementById("usuario_logado").value = usuario_digitado;
            var nome_digitado_da_linha = importar_Para_Alfabeto_JM(nome_digitado).trim().toUpperCase();
            document.getElementById("cara_palida").innerHTML = "-)-> " + nome_digitado_da_linha + " <-(-";
            //document.getElementById("cara_palida").innerHTML = "-)-> " + "Cara Pálida Web" + " <-(-";
            document.getElementById("usuario_logado_id_nome").value = nome_digitado_da_linha;
                                
            //LISTAR CONTATOS DO USUÁRIO LOGADO 
            listar_contatos( document.getElementById("usuario_logado").value );
                                
            document.getElementById("usuario_logado_id").value = id;      
        }

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//PEGANDO APENAS A IMAGEM DO USUÁRIO LOGADO 
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
function pegando_imagem_do_usuario_logado( mensagem ){
        var retorno = "";
            
            try{
                    
                ////////////////////////////////////////////////////////////
                var tem_mensagem = false;
                var linha_recebida = mensagem.split("@");
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        tem_mensagem = true;
                        break;
                    }
                }
                ////////////////////////////////////////////////////////////
                    
                if( tem_mensagem === true ){
                        
                    var linha_recebida = mensagem.split("@");            
                    for( var i = 0; i < linha_recebida.length; i++ ) {
                        if( linha_recebida[i].includes("-") ){
                            var web_id_usuario;
                            var web_email_usuario;
                            var web_contador;                        
                            var web_parte;

                            //var id_txt2 = "@" + id_usuario + "j" + email_usuario + "j" + contador  + "j" + parte + "@";
                            var argumentos = linha_recebida[i].split("j");
                            for( var j = 0; j < argumentos.length; j++ ) {
                                if(j === 0){ 
                                    web_id_usuario = argumentos[j];
                                }
                                else if(j === 1){
                                    web_email_usuario = argumentos[j];
                                }
                                else if(j === 2){
                                    web_contador = argumentos[j];
                                }
                                else if(j === 3){
                                    web_parte = argumentos[j];
                                }
                            }
                            
                            var web_id_da_tb_usuario_str = importar_Para_Alfabeto_JM( web_id_da_tb_usuario.trim() ).trim().toUpperCase();                        
                            var web_id_usuario_da_linha = importar_Para_Alfabeto_JM( web_id_usuario.trim() ).trim().toUpperCase();
                            if( verificar_igualdade_sem_espaco_no_final( web_id_da_tb_usuario_str, web_id_usuario_da_linha ) === true ){   
                                
                                retorno += web_parte;
                            }
                        }else{
                                                       
                        }
                    }                   
                }
                //}, 0);
            
            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "fazerRequisicao -- " + Exception;
            } 
            
            return retorno;
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//PEGANDO APENAS A IMAGEM DO USUÁRIO LOGADO 
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 