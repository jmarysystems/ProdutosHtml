/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
        function inicioCadastrarTabelaLogin(
                usuario_digitado, 
                    senha_digitada, 
                        nome_digitado,
                            email_de_recuperacao,
                                imagem_endereco_web_digitado,
                                    conteudo_div){  
            if (usuario_digitado === "" || usuario_digitado === null){
                alert("Para criar um novo usuário Cara Pálida:\n01 informe o Email ou (DDD + Telefone)\n02 informe a senha\n03 informe o nome do usuário");
            }
            else if (senha_digitada === "" || senha_digitada === null){
                
                alert("Para efetuar login:\n01 informe o email do usuário\n02 informe a senha\n03 informe o nome do usuário");
            }
            else if (nome_digitado === "" || nome_digitado === null){
                
                alert("Para efetuar login:\n01 informe o email do usuário\n02 informe a senha\n03 informe o nome do usuário");
            }
            else{
                                
                var count_x_tabela_usuario_1 = 1;
                
                _02_controle_baixar_tabela_usuario_cad( 
                    count_x_tabela_usuario_1,    
                        usuario_digitado, 
                            senha_digitada, 
                                nome_digitado, 
                                    email_de_recuperacao, 
                                        imagem_endereco_web_digitado, 
                                            conteudo_div);
            }
        }
        
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
        function _01_controle_loop_usuario_cad(
            count_x,    
                usuario_digitado_recebido, 
                    senha_digitada_recebido, 
                        nome_digitado_recebido, 
                            email_de_recuperacao_recebido, 
                                imagem_endereco_web_digitado_recebido, 
                                    conteudo_div){
            if( count_x < 20 ){      
                
                setTimeout(function(){ 
                     var count_xx = count_x + 1;
                     
                    _02_controle_baixar_tabela_usuario_cad( 
                        count_xx,
                            usuario_digitado_recebido, 
                                senha_digitada_recebido, 
                                    nome_digitado_recebido, 
                                        email_de_recuperacao_recebido, 
                                            imagem_endereco_web_digitado_recebido, 
                                                conteudo_div);
                }, 1000);
            }
            else{
                
                alert("Usuário: " + usuario_digitado_recebido + " \nVerifique sua conexão \ncom a internet.");
                document.getElementById("resposta").innerHTML = conteudo_div;
            }
        }
        
        function _02_controle_baixar_tabela_usuario_cad( 
                count_x,
                usuario_digitado_recebido, 
                    senha_digitada_recebido, 
                        nome_digitado_recebido, 
                            email_de_recuperacao_recebido, 
                                imagem_endereco_web_digitado_recebido, 
                                    conteudo_div){
            
            try{
                var id_planilha = "1UHCZa_LGpJ1pnY4HI0DhuuaBpjtmpp_Hpih-q1BiFVk";
                var urlxx = "https://sheets.googleapis.com/v4/spreadsheets/"+ id_planilha +"/values/A:B?key=AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";

////////////////////////////////////////////////////////////////////////////
                setTimeout(function(){ 
                    /* Some tasks */ 
                     document.getElementById("resposta").innerHTML = 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Tentativa de Conexão: " + count_x + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    
                    ////////////////////////////////////
                    document.getElementById("resposta").style.display = 'block'; 
                    document.getElementById("div_meus_contatos").style.display = 'none'; 
                    document.getElementById("div_novo_usuario").style.display = 'none';
                    
                    document.getElementById("div_conversa").style.display = 'none';
                }, 0);
////////////////////////////////////////////////////////////////////////////

                var url = urlxx;
                jQuery.getJSON(url).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    _03_controle_verificar_se_tem_mensagem_usuario_cad(
                        JSON.stringify(data),
                        count_x,    
                            usuario_digitado_recebido, 
                                senha_digitada_recebido, 
                                    nome_digitado_recebido, 
                                        email_de_recuperacao_recebido, 
                                            imagem_endereco_web_digitado_recebido, 
                                                conteudo_div);
                }).error(function(message) {
                    //console.error('error' + message); 
                    _01_controle_loop_usuario_cad(
                        count_x,    
                            usuario_digitado_recebido, 
                                senha_digitada_recebido, 
                                    nome_digitado_recebido, 
                                        email_de_recuperacao_recebido, 
                                            imagem_endereco_web_digitado_recebido, 
                                                conteudo_div);
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }
        
        function _03_controle_verificar_se_tem_mensagem_usuario_cad( 
                mensagem_x,
                count_x,
                usuario_digitado_recebido, 
                    senha_digitada_recebido, 
                        nome_digitado_recebido, 
                            email_de_recuperacao_recebido, 
                                imagem_endereco_web_digitado_recebido, 
                                    conteudo_div){
            
            try{
                
                var tem_mensagem = false;
                var linha_recebida = mensagem_x.split("@");
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        tem_mensagem = true;
                        break;
                    }
                }
                
                if( tem_mensagem === true ){
                    
                    consultar_para_verificar_se_usuario_esta_cadastrado( 
                        mensagem_x,
                            usuario_digitado_recebido, 
                                senha_digitada_recebido, 
                                    nome_digitado_recebido, 
                                        email_de_recuperacao_recebido, 
                                            imagem_endereco_web_digitado_recebido, 
                                                conteudo_div);
                }
                else{
                    
                    _01_controle_loop_usuario_cad(
                        count_x,    
                            usuario_digitado_recebido, 
                                senha_digitada_recebido, 
                                    nome_digitado_recebido, 
                                        email_de_recuperacao_recebido, 
                                            imagem_endereco_web_digitado_recebido, 
                                                conteudo_div);
                }
            }
            catch(Exception){}
        }
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////        
        
        
        function consultar_para_verificar_se_usuario_esta_cadastrado( 
            mensagem,
                usuario_digitado_recebido, 
                    senha_digitada_recebido, 
                        nome_digitado_recebido, 
                            email_de_recuperacao_recebido, 
                                imagem_endereco_web_digitado_recebido, 
                                    conteudo_div){
            try{           
                var usuario_nao_cadastrado = false;
                
                var linha_recebida = mensagem.split("@");            
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

                       var usuario_digitado_str = usuario_digitado_recebido.trim().toUpperCase();

                       var usuario_da_linha = importar_Para_Alfabeto_JM(usuario).trim().toUpperCase();
                       
                       if( verificar_igualdade_sem_espaco_no_final( usuario_da_linha, usuario_digitado_str ) === true ){                                                     
                            
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
                    
                    //alert("Usuário: " + usuario_digitado + "\nNão cadastrado" );
                    //document.getElementById("resposta").innerHTML = conteudo_div;
                    cadastrarTabelaLogin(usuario_digitado_recebido, senha_digitada_recebido, nome_digitado_recebido, email_de_recuperacao_recebido, imagem_endereco_web_digitado_recebido, conteudo_div);
                }
                else{
                    
                    alert("Usuário: " + usuario_digitado_recebido + "\nJá cadastrado" + "\n\nEscolha um E-mail ou número de telefone diferente para cadastrar um novo usuário\n\nEste já existe." );
                
                    document.getElementById("resposta").innerHTML = conteudo_div;
                                    document.getElementById("resposta").style.display = 'none'; 
                                    document.getElementById("div_meus_contatos").style.display = 'none'; 
                                    document.getElementById("div_novo_usuario").style.display = 'block';
                    
                                    document.getElementById("div_conversa").style.display = 'none'; 
                }
            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "fazerLogin -- " + Exception;
            }     
        }
        
        
        function cadastrarTabelaLogin(
                usuario_digitado, 
                    senha_digitada, 
                        nome_digitado,
                            email_de_recuperacao,
                                imagem_endereco_web_digitado,
                                    conteudo_div){  
            
            try{
                                                        
                setTimeout(function(){ 
                    /* Some tasks */ 
                    document.getElementById("resposta").innerHTML = "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    document.getElementById("resposta").style.display = 'block'; 
                    document.getElementById("div_meus_contatos").style.display = 'none'; 
                    document.getElementById("div_novo_usuario").style.display = 'none';
                    
                    document.getElementById("div_conversa").style.display = 'none';
                }, 0);
            
                setTimeout(function(){ 
                    var now = new Date();
                    var id = now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + "-" + 
                             now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + now.getMilliseconds();
                     
                    var comando = "cadastrar";
                    
                    var id_formulario_id = "1FAIpQLSfLwoOJdFO-60HmWz7t3rF21hbCA7s7JpyqdMcM7_3RxT0Ieg";
                
                    var id_txt = "833181104";
                    
                    //////////////////////////////////////////
                    var jm_id = exportar_Para_Alfabeto_JM_Sem_Arroba( id.trim() );
                    var jm_comando = exportar_Para_Alfabeto_JM_Sem_Arroba( comando.trim() );
                    var jm_usuario_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( usuario_digitado.trim() );
                    var jm_senha_digitada = exportar_Para_Alfabeto_JM_Sem_Arroba( senha_digitada.trim() );
                    var jm_nome_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( nome_digitado.trim() );
                    
                    //alert( "nome_digitado = " + nome_digitado + " -- " + "jm_nome_digitado " + jm_nome_digitado );
                    
                    var jm_email_de_recuperacao = "null";
                    if (email_de_recuperacao === "" || email_de_recuperacao === null){
                        
                    }
                    else{
                        jm_email_de_recuperacao = exportar_Para_Alfabeto_JM_Sem_Arroba( email_de_recuperacao.trim() );
                    }

                    var jm_imagem_endereco_web_digitado = "null";
                    if (imgXX === "null" || imgXX === "" || imgXX === null){
                        
                    }
                    else{

                        //jm_imagem_endereco_web_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba(imgXX);
                        //document.getElementById("resposta").innerHTML = "Size = " + imgXX.length + "<br>" + jm_imagem_endereco_web_digitado;
                        
                        jm_imagem_endereco_web_digitado = exportar_Para_Alfabeto_JM_Sem_Arroba( "sim" ); 
                        
                        try{
                            salvar_imagem_do_perfil( 
                               exportar_Para_Alfabeto_JM_Sem_Arroba(imgXX), 
                                    jm_usuario_digitado,
                                        jm_id );
                        }catch(Exception){}
                    }
                    
                    var id_txt2 = "@" + jm_id + "j" + jm_comando + "j" + jm_usuario_digitado  + "j" + 
                            jm_senha_digitada  + "j" +  jm_nome_digitado  + "j" + 
                            jm_email_de_recuperacao  + "j" +
                            jm_imagem_endereco_web_digitado + "@";
                    //////////////////////////////////////////
                
                    var GET_URL = "https://docs.google.com/forms/d/e/" + id_formulario_id + "/formResponse" +
                            "?entry." + id_txt + "=" + id_txt2;
                    
                    try{

                        var xhttp = new XMLHttpRequest();
                        xhttp.open("GET", GET_URL, false);
                        xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

                    }catch(Exception){
                
                        //alert("jm_id " + jm_id + " - " + "id " + id);
                       //document.getElementById("resposta").innerHTML = "Erro xhttp - cadastrarTabelaLogin -- <br>" + Exception;
                    }

                    alert("Usuário: " + usuario_digitado + " OK\nCadastrado com sucesso!");
                    document.getElementById("resposta").innerHTML = conteudo_div;
                    document.getElementById("resposta").style.display = 'block'; 
                    document.getElementById("div_meus_contatos").style.display = 'none'; 
                    document.getElementById("div_novo_usuario").style.display = 'none';
                    
                    document.getElementById("div_conversa").style.display = 'none';                 
                    
                }, 500);
            
            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "cadastrarTabelaLogin -- " + Exception;
            }     
        }
        
        function salvar_imagem_do_perfil( imagem, email_usuario, id_usuario ){
            
            try{
                setTimeout(function(){ 
                    
                    var id_formulario_id = "1FAIpQLSfusUTi_J7wrIs49E38puZf1vqIIYZOxkahNb4xideZCDo8Dg";
                    var id_txt = "833181104";

                    ////////////////////////////////////////////////////////////
                    var parte = "";
                    var count = 0;
                    var contador = 0;
                    var numero = imagem.split("-");
                    for( var i = 0; i < numero.length; i++ ) {
                        
                        parte += numero[i] + "-";
                        
                        if( count === 1900 ){
                                                                                    
                            contador += 1;
                                                                                          
                            try{
                                var id_txt2 = "@" + id_usuario + "j" + email_usuario + "j" + contador  + "j" + parte + "@";
                                                                                
                                var GET_URL = "https://docs.google.com/forms/d/e/" + id_formulario_id + "/formResponse" +
                                    "?entry." + id_txt + "=" + id_txt2;
                            
                                var xhttp = new XMLHttpRequest();
                                xhttp.open("GET", GET_URL, false);
                                xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
                                
                                /*
                                var anterior = document.getElementById("resposta").innerHTML;
                                document.getElementById("resposta").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + 
                                    "<br>" + 
                                    "Contador: " + contador + "<br>" + 
                                    parte;                        
                                */
                            }catch(Exception){}
                            
                            parte = "";
                            count = 0;
                        }
                        else{
                            
                            count += 1;
                        }
                        
                    }
                    ////////////////////////////////////////////////////////////
                    
                    try{
                        contador += 1;
                        
                                var id_txt2 = "@" + id_usuario + "j" + email_usuario + "j" + 
                                contador  + "j" + 
                                parte + "@";
                            
                                var GET_URL = "https://docs.google.com/forms/d/e/" + id_formulario_id + "/formResponse" +
                                    "?entry." + id_txt + "=" + id_txt2;
                            
                                var xhttp = new XMLHttpRequest();
                                xhttp.open("GET", GET_URL, false);
                                xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
                                
                                /*
                                var anterior = document.getElementById("resposta").innerHTML;
                                document.getElementById("resposta").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + 
                                    "<br>" + 
                                    "Contador: " + contador + "<br>" + 
                                    parte;                        
                                */
                    }catch(Exception){} 
                            
                }, 0);
            
            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "fazerRequisicao -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
