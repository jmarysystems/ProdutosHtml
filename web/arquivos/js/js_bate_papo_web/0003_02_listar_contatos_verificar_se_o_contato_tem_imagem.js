/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//////////////////////////////////////////////////////////////    
////baixar_tabela_usuario_criar_estrutura   
//////////////////////////////////////////////////////////////        
        function baixar_tabela_usuario_criar_estrutura( 
                contador,
                                    web_id_da_tb_contato,
                                        web_comando_da_tb_contato,
                                            web_usuario_logado_da_tb_contato,
                                                web_contato_email_da_tb_contato,
                                                    web_contato_nome_da_tb_contato,
                                                        web_contato_nome_meio_da_tb_contato,
                                                            web_contato_ultimo_nome_da_tb_contato){  
            
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
                    
                    verificando_se_o_contato_tem_imagem_utilizando_a_tabela_usuario(  
                            contador,
                                    web_id_da_tb_contato,
                                        web_comando_da_tb_contato,
                                            web_usuario_logado_da_tb_contato,
                                                web_contato_email_da_tb_contato,
                                                    web_contato_nome_da_tb_contato,
                                                        web_contato_nome_meio_da_tb_contato,
                                                            web_contato_ultimo_nome_da_tb_contato);
                }
                else{
                    
                    //
                }
            }
            catch(Exception){}
        }
  

//////////////////////////////////////////////////////////////    
////verificar se o contato tem imagem utilizando a tabela usuário   
//////////////////////////////////////////////////////////////        
        function verificando_se_o_contato_tem_imagem_utilizando_a_tabela_usuario( 
                contador,
                                    web_id_da_tb_contato,
                                        web_comando_da_tb_contato,
                                            web_usuario_logado_da_tb_contato,
                                                web_contato_email_da_tb_contato,
                                                    web_contato_nome_da_tb_contato,
                                                        web_contato_nome_meio_da_tb_contato,
                                                            web_contato_ultimo_nome_da_tb_contato){      
                        
            try{    
                
                var usuario_nao_cadastrado = false;
                var imagem_Perfil = "../arquivos/imagens/003_login/cont.png";
                
                /*
                var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    importar_Para_Alfabeto_JM(web_usuario_logado_da_tb_contato).trim().toUpperCase() +
                                    "<br>" +
                                    "Contato Encontrado: " + importar_Para_Alfabeto_JM(web_contato_email_da_tb_contato).trim().toUpperCase(); 
                */
        
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
                        var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    importar_Para_Alfabeto_JM(usuario).trim().toUpperCase();
                            */
                       
                        var usuario_digitado_str = importar_Para_Alfabeto_JM(web_contato_email_da_tb_contato).trim().toUpperCase(); 
                       
                        var usuario_da_linha = importar_Para_Alfabeto_JM(usuario).trim().toUpperCase();
                       
                        //var user_ok = usuario_da_linha.localeCompare(usuario_digitado_str);
                        
                        var web_id_da_tb_usuario = id;
                        
                        /*
                        var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    importar_Para_Alfabeto_JM(web_usuario_logado_da_tb_contato).trim().toUpperCase() +
                                    "<br>" +
                                    "Contato Encontrado: " + importar_Para_Alfabeto_JM(web_contato_email_da_tb_contato).trim().toUpperCase();
                            */

                        //if( user_ok === 0 ){ 
                        if( verificar_igualdade_sem_espaco_no_final( usuario_da_linha, usuario_digitado_str ) === true ){   
                            
                            /*
                            var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + 
                                    "<br>" +
                                    "usuario_da_linha: " + usuario_da_linha +
                                    "<br>" +
                                    "usuario_digitado_str: " + usuario_digitado_str;
                            */
                            
                                                                              
                            
                            // Fim do loop

                           
                            //finalizando - foi encontrada a imagem do perfil deste contato na tabela de usuários cara pálida
                            usuario_nao_cadastrado = true;
                            if ( imagem_endereco_web_digitado === undefined || imagem_endereco_web_digitado === "" || imagem_endereco_web_digitado === null){
                                
                                imagem_Perfil = "../arquivos/imagens/003_login/cont.png";
                            }
                            else{
                                
                                imagem_Perfil = importar_Para_Alfabeto_JM(imagem_endereco_web_digitado).trim();
                                
                                /*
                                var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                                document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    importar_Para_Alfabeto_JM(usuario).trim().toUpperCase() 
                                    + "<br>" 
                                    + "id: " + id
                                    + "<br>" 
                                    + "comando: " + comando
                                    + "<br>" 
                                    + "usuario: " + usuario 
                                    + "<br>" 
                                    + "senha: " + senha 
                                    + "<br>" 
                                    + "nome_digitado: " + nome_digitado
                                    + "<br>" 
                                    + "email_de_recuperacao: " + email_de_recuperacao
                                    + "<br>" 
                                    + "imagem_endereco_web_digitado: " + imagem_endereco_web_digitado
                                    + "<br>" 
                                    + "imagem_endereco_web_digitado: " + imagem_Perfil;
                                */
                                
                            }
                            break;
                       }                       
                       
                    }
                }   
                
                //*
                if( usuario_nao_cadastrado === true ){
                    /*               
                    var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    "if( usuario_nao_cadastrado === true ){" +
                                    "<br>" +
                                    "Contato Encontrado: " + importar_Para_Alfabeto_JM(web_contato_email_da_tb_contato).trim().toUpperCase();
                    */        
                       
                    
                    //setTimeout(function(){ 
                    
                        criar_estrutura_dos_contatos(
                            contador,
                                "sim",
                            web_id_da_tb_usuario,
                                imagem_Perfil, 
                                    web_id_da_tb_contato,
                                        web_comando_da_tb_contato,
                                            web_usuario_logado_da_tb_contato,
                                                web_contato_email_da_tb_contato,
                                                    web_contato_nome_da_tb_contato,
                                                        web_contato_nome_meio_da_tb_contato,
                                                            web_contato_ultimo_nome_da_tb_contato);
                                                            
                    //}, 0);     
                }
                else{
                         
                    /*
                    var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    "usuario_nao_cadastrado === false" +
                                    "<br>" +
                                    "Contato Encontrado: " + importar_Para_Alfabeto_JM(web_contato_email_da_tb_contato).trim().toUpperCase();
                    */        
                           
                          
                    criar_estrutura_dos_contatos(
                            contador,
                            "nao",
                            web_id_da_tb_usuario,
                                "../arquivos/imagens/003_login/cont2.png", 
                                    web_id_da_tb_contato,
                                        web_comando_da_tb_contato,
                                            web_usuario_logado_da_tb_contato,
                                                web_contato_email_da_tb_contato,
                                                    web_contato_nome_da_tb_contato,
                                                        web_contato_nome_meio_da_tb_contato,
                                                            web_contato_ultimo_nome_da_tb_contato);             
                                                       
                                                          
                }
                //*/
                
            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "fazerLogin -- " + Exception;
            }   
            
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//verificar se o contato tem imagem utilizando a tabela usuário
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 

  
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//CRIAR ESTRUTURA DOS CONTATOS
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
    function criar_estrutura_dos_contatos(
            contador,
                este_e_um_usuario_cara_palida,
            web_id_da_tb_usuario,
                imagem_Perfil, 
                    web_id,
                        web_comando,
                            web_usuario_logado,
                                web_contato_email,
                                    web_contato_nome,
                                        web_contato_nome_meio,
                                            web_contato_ultimo_nome){
            
            try{
                
                var nome_principal = "";   try{ nome_principal = converter_base64(web_contato_nome).trim(); }catch(Exception){}
                var nome_do_meio = "";     try{ nome_do_meio = converter_base64(web_contato_nome_meio).trim(); }catch(Exception){}
                var nome_ultimo_nome = ""; try{ nome_ultimo_nome = converter_base64(web_contato_ultimo_nome).trim(); }catch(Exception){}
                
                var imagem_src_data = imagem_Perfil;
                
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
                    try{
                        //var imagem_src_data_web22 = baixar_imagem( id );    
                        //document.getElementById("resposta").innerHTML = imagem_src_data_web22;
                        var imagem_src_data22 = converter_base64( retorno );
                        if ( imagem_src_data22 === undefined || imagem_src_data22 === "" || imagem_src_data22 === null){
                                            
                            imagem_src_data = "../arquivos/imagens/003_login/cont.png";
                        }else{
                            
                            imagem_src_data = imagem_src_data22;
                        }

                    }catch(Exception){}
////******************************************************************************************************                    
                
                /*
                if( este_e_um_usuario_cara_palida === "sim" ){
                                                        
                    try{
                    
                        var imagem_src_data_web = baixar_imagem( web_id_da_tb_usuario );    
         
                        imagem_src_data = converter_base64( imagem_src_data_web );
                        
                        if ( imagem_src_data === undefined || imagem_src_data === "" || imagem_src_data === null){
                            
                            imagem_src_data = "../arquivos/imagens/003_login/cont.png";
                        }
                        
                        //
                        var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    "function listar001(" +
                                    "<br>" +
                                    "imagem_src_data: " + imagem_src_data;
                        //
                    }catch(Exception){}
                }
                */
                
                if ( nome_do_meio === undefined || nome_do_meio === "" || nome_do_meio === null){
                            
                    nome_do_meio = "-";
                }
                if ( nome_ultimo_nome === undefined || nome_ultimo_nome === "" || nome_ultimo_nome === null){
                            
                    nome_ultimo_nome = "-";
                }
                
                //setTimeout(function(){    
                    //var nome_principal_mais_nome_do_meio = nome_principal + " " + nome_do_meio;
                    //criar_tela_de_conversa( web_id, web_contato_email, imagem_src_data, nome_principal, nome_principal_mais_nome_do_meio );
                //}, 0);
                                                
                var add =
                
"<li style=\"float: left; margin-left: 5px; background-color:#3A3A3A;\" " +
"            onMouseover=\"\n" +
"            this.style.backgroundColor='#23871C';\"  " +
"            " +
"            onMouseout=\"" +
"            this.style.backgroundColor='#3A3A3A'\"" +
"        > " +
"            " +

            "<input type=\"hidden\" id=\"" + "web_contato_id" + web_id + "\" value=\"" + web_id + "\">" +
            "<input type=\"hidden\" id=\"" + web_id + "\" value=\"" + imagem_src_data + "\">" +
            "<input type=\"hidden\" id=\"" + web_id + web_contato_email + "\" value=\"" + converter_base64(web_contato_email).trim() + "\">" +
            "<input type=\"hidden\" id=\"" + web_id + web_contato_nome + "\" value=\"" + nome_principal + "\">" +
            "<input type=\"hidden\" id=\"" + web_id + web_contato_nome_meio + "\" value=\"" + nome_do_meio + "\">" +
             
"                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">" +
"                    <tr> " +
"                        <td align=\"center\"> " +
"                            <img '" + "imagem__do_contato_" + web_id + "' src='" + imagem_src_data + "' style='cursor: pointer;'" +
"                                onclick=\"abrir_conversa(" +
                                     "document.getElementById ('" + "web_contato_id" + web_id +      "').value," +
                                     "document.getElementById ('" + web_id +                         "').value," +
                                     "document.getElementById ('" + web_id + web_contato_email +     "').value," +
                                     "document.getElementById ('" + web_id + web_contato_nome +      "').value," +
                                     "document.getElementById ('" + web_id + web_contato_nome_meio + "').value" +
                                 ");\" " +
"                                title=\"" +  nome_principal  + "\" width=\"100\" height=\"100\">" +
"                        </td>    " +
"                    </tr>" +
"                    <tr> " +
"                        <td align=\"center\" style=\" padding: 0; color: #ffffff;\"> " +
"                            " + nome_principal +
"                        </td>    " +
"                    </tr> " +
"                    <tr> " +
"                        <td align=\"center\" style=\" padding: 0; color: #ffffff;\"> " +
"                            " + nome_do_meio  +
"                        </td>    " +
"                    </tr>" +
"                    <tr> " +
"                        <td align=\"center\" style=\" padding: 0; color: #ffffff;\"> " +
"                            " + nome_ultimo_nome  +
"                        </td>    " +
"                    </tr>" +
"                </table>" +
"        </li>";

//setTimeout(function(){
                var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                document.getElementById("ul_meus_contatos").innerHTML = anterior + add;
//}, 0);

                ///*
                //setTimeout(function(){    
                    var nome_principal_mais_nome_do_meio = nome_principal + " " + nome_do_meio;
                    criar_tela_de_conversa_xx( web_id, web_contato_email, imagem_src_data, nome_principal, nome_principal_mais_nome_do_meio );
                //}, 0);
                //*/
                                                                                              
            }catch(Exception){
                
                document.getElementById("ul_meus_contatos").innerHTML = "listar001 -- " + Exception;
            }     
            
            if( contador === 0 ){
                
                finalizando_igual_a_zero( contador );
            }                    
        }
        
        function finalizando_igual_a_zero(){
                           
            try{
                
                //setTimeout(function(){
                    
                    _01_controle_loop_sem_fim();
                    
                //}, 500); 
                
            }catch(Exception){}        
        }
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////
////CRIAR TELA DE CONVERSA 
///////////////////////////////////////////////////////////////////////////////////////////////////////////        
        function criar_tela_de_conversa_xx( web_id, web_contato_email, imagem_src_data, nome_principal, nome_principal_mais_nome_do_meio ){
            
            try{
                
                var add = 
"<div id='" + "contato" + web_id + "' style=\"display: none; padding: 0; margin: 0;\">" +   

/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////TELA INICIAL - INÍCIO   
///////////////////////////////////////////////////////////////////////////////////////////////////////////  
"<input type=\"hidden\" id='" + "img_conversa" + web_id + "input" + "' value=\"" + imagem_src_data + "\">" +
        
"<input type=\"hidden\" id='" + "msg_enviadas" + web_id + "input" + "' value=\"" + "0" + "\">" +

                "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%; padding: 0; margin: 0;\"> " +
"            <tr> " +
"                <td style=\"width:30%;\"> " +
"                " +
"                    <img id='" + "img_conversa" + web_id + "' src='" + imagem_src_data + "' alt=\"\" width=\"50\" height=\"50\">" +
"                </td>    " +
"            " +
"                <td align=\"center\" style=\"width:40%;\">" +
"                    <h1 id='" + "h1_conversa" + web_id + "' align=\"center\" style=\"font:bold 150% verdana,arial,helvetica;\"> " + nome_principal_mais_nome_do_meio + " </h1>" +
"                </td> " +
"            " +
"                <td style=\"width:30%;\">" +
"                    <input style=\"float: right; margin-top: 5px; cursor: pointer;\" " +
"                        type=\"button\" onclick=\"voltar_para_meus_contato();\" value=\"Voltar\">" +
"                </td>" +
"            <tr> " +
"        </table>" +
"    " +
"        <hr style=\"padding: 0; margin: 0;\">" +
"        " +

         "<input type=\"hidden\" id=\"" + "contador" + web_id + "\" value=\"" + "0" + "\">" +
         
         "<input type=\"hidden\" id=\"" + "escrever_mensagem" + web_id + "\" value=\"" + web_id + "\">" +
            
"        <div id='" + "botao_escrever_mensagem" + web_id + "' style=\"display: block; width:100%; padding: 0; margin: 0;\"> " +
"            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%; padding: 0; margin: 0;\"> " +
"                <tr> " +
"                    <td>" +
"                        <h1 " + "' align=\"left\" style=\"font:bold 70% verdana,arial,helvetica;\"> " + converter_base64(web_contato_email).trim() + " </h1>" +
"                    </td>" +
"                    <td>" +
"                        <input style=\"float: right; margin-top: 5px; cursor: pointer;\" " +
"                            type=\"button\" onclick=\"escrever_mensagem( " + 
                                   "document.getElementById ('" + "escrever_mensagem" + web_id + "').value"
                             + " );\" value=\"Escrever Mensagem\">" +
"                    </td>" +
"                <tr> " +
"            </table>" +
"        </div>" +
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////TELA INICIAL - FIM   
///////////////////////////////////////////////////////////////////////////////////////////////////////////  

/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////CONVERSAS - INÍCIO   
///////////////////////////////////////////////////////////////////////////////////////////////////////////  
         "<div id='" + "div_todas_as_conversas" + web_id + "' style=\"display: block; padding: 0; margin: 0;\">"  +
 
             
         "</div>" +
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////CONVERSAS - FIM   
///////////////////////////////////////////////////////////////////////////////////////////////////////////  


/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////ESCREVER E ENVIAR MENSAGENS - INÍCIO   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
"<div id='" + "div_enviar_conversa" + web_id + "' style=\"display: none; padding: 0; margin: 0;\">" +

"        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\"> " +
"            <tr> " +

"                    <td>" +
"                        <input style=\"float: right; margin-top: 5px; cursor: pointer;\" " +
"                            type=\"button\" onclick=\"voltar_para_todas_as_mensagem( " + 
                                   "document.getElementById ('" + "escrever_mensagem" + web_id + "').value"
                             + " );\" value=\"Cancelar Mensagem\">" +
"                    </td>" +
"            <tr> " +
"        </table>" +

"<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;\"> " +

"    <tr>" +
"        <td style=\"background-color: #D3D3D3; width:20%;\"> </td>" +

"        <td align=\"center\" style=\"background-color: #D3D3D3; width:60%;\"> " + 

"            <a style=\"color:black; font-family:  Arial, Helvetica, sans-serif; font-size: 150%; text-decoration: none;\"" +
"               onMouseover=\" this.style.color='#fff'; \"" +
"               onMouseout=\"  this.style.color='black'; \"       " +

"                NOVA MENSAGEM  " +
"            </a>" +

"        </td>" +

"        <td style=\"background-color: #D3D3D3; width:20%;\"> </td>" +
"    </tr> " +

"    <tr>" +
"        <td align=\"right\" style=\"background-color: #D3D3D3; width:20%; padding-right: 5px;\">" +

"            <img src=\"../arquivos/imagens/003_login/cara_palida.png\" alt=\"\" width=\"150\" height=\"150\">            " +
"        </td>" +

"        <td colspan=\"2\" style=\"background-color: #D3D3D3; width:60%; padding-right: 15px;\">" +

"            <div style=\"background-color: #3A3A3A; height:100%;   color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%;\">" +

"                Escrever Aqui                 " +
"                <textarea id='" + "mensagem_a_enviar" + web_id + "' name=\"w3review\" rows=\"4\" cols=\"50\" style=\"background-color: #3A3A3A; width:100%; height: 100%; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 150%;\">  </textarea>" +

"            </div>" +

"        </td>" +

"    </tr>     " +

"    <tr>" +
"        <td style=\"background-color: #D3D3D3; width:20%;\"> </td>" +

"        <td align=\"center\" style=\"background-color: #D3D3D3; width:60%;\"> " +

"            <img src=\"../arquivos/imagens/003_login/enviar.png\" " +
"                style=\"cursor: pointer; \"" +
"                alt=\"\" width=\"140\" height=\"50\"" +

"                onclick=\"enviar_mensagem(" + "document.getElementById ('" + "escrever_mensagem" + web_id + "').value," + "document.getElementById ( '" + "mensagem_a_enviar" + web_id + "' ).value );\">" +
"        </td>" +

"        <td style=\"background-color: #D3D3D3; width:20%;\"> </td>" +
"    </tr> " +
"</table>        " +
"    </div>" +
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//////ESCREVER E ENVIAR MENSAGENS - FIM   
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 

"</div>";
                
                var anterior = document.getElementById("div_conversa").innerHTML;
                document.getElementById("div_conversa").innerHTML = anterior + add;
                
                //setTimeout(function(){ 
                    //var contador = document.getElementById( "contador" + web_id ).value;
                    //loop_controle( web_id, web_contato_email, nome_principal );
                //}, 0);                
                
            }catch(Exception){
                
                document.getElementById("ul_meus_contatos").innerHTML = "criar_tela_de_conversa -- " + Exception;
            }     
        }