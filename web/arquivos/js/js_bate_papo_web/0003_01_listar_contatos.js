/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////  
//LISTAR CONTATOS 
///////////////////////////////////////////////////////////////////////////////////////////////////////////        
 
        function listar_contatos( email_do_usuario_logado ){
            
            try{
                
                document.getElementById("resposta").style.display = 'none'; 
                document.getElementById("div_novo_usuario").style.display = 'none';
                document.getElementById("div_add_contato").style.display = 'none';                                     
                
                document.getElementById("div_meus_contatos").style.display = 'block'; 
                
                document.getElementById("div_conversa").style.display = 'none';
                
                //////////////////////////////////////////////////////////////////////
                lista_de_contatos = "";
                document.getElementById("ul_meus_contatos").style.display = 'none'; 
                //////////////////////////////////////////////////////////////////////
                
                var countXX22 = 1;
                
                var count_x = 1;
                
                _02_controle_baixar_tabela_listar_contato( count_x, email_do_usuario_logado, countXX22 );
            
            }catch(Exception){
                
                document.getElementById("div_meus_contatos").innerHTML = "listar_contatos -- \n\n" + Exception;
            }     
        } 

        /////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
        function _01_controle_loop_listar_contato( count_x, email_do_usuario_logado, countXX22){
            if( count_x < 20 ){      
                
                setTimeout(function(){ 
                     var count_xx = count_x + 1;
                     
                    _02_controle_baixar_tabela_listar_contato( count_xx, email_do_usuario_logado, countXX22 );
                }, 1000);
            }
            else{
                
                alert("Verifique sua conexão \ncom a internet.");
                //document.getElementById("resposta").innerHTML = conteudo_div;
            }
        }
        
        function _02_controle_baixar_tabela_listar_contato( count_x, email_do_usuario_logado, countXX22){
            
            try{
                
                var id_planilha = "10xscEU1L66fCBmVypEVn8h6b3Ku2eRZMVzbHIVzS6Ns";
                var urlxx = "https://sheets.googleapis.com/v4/spreadsheets/"+ id_planilha +"/values/A:B?key=AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";
      
////////////////////////////////////////////////////////////////////////////
                setTimeout(function(){ 
                /* Some tasks */ 
                document.getElementById("ul_meus_contatos").innerHTML = 
                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Baixando contatos: " + count_x + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>" +
                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>";
                }, 0);
////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
                setTimeout(function(){ 
                    document.getElementById("contato_tabela_xy_01").style.display = 'block';
                /* Some tasks */ 
                document.getElementById("contato_tabela_xy_01").innerHTML = 
                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Por favor! Aguarde <br> Carregando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>" +
                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>" + 
                        "<li> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Gerando Html" + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table> </li>";
                }, 0);
////////////////////////////////////////////////////////////////////////////

                var url = urlxx;
                jQuery.getJSON(url).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    document.getElementById("tabela_contatos").value = JSON.stringify(data);
                    _03_controle_verificar_se_tem_mensagem_listar_contato( count_x, email_do_usuario_logado, countXX22 );
                }).error(function(message) {
                    //console.error('error' + message); 
                    _01_controle_loop_listar_contato( count_x, email_do_usuario_logado, countXX22 );
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }
        
        function _03_controle_verificar_se_tem_mensagem_listar_contato( count_x, email_do_usuario_logado, countXX22 ){
            
            try{
                
                var tem_mensagem = false;
                var linha_recebida = document.getElementById("tabela_contatos").value.split("@");
                for( var i = 0; i < linha_recebida.length; i++ ) {
                    if( linha_recebida[i].includes("-") ){
                        tem_mensagem = true;
                        break;
                    }
                }
                
                if( tem_mensagem === true ){
                    
                    listar_usuario_logado();
                    consultar_listar_contatos_003_verificar_se_user_tem_contatos( email_do_usuario_logado );
                    //document.getElementById("ul_meus_contatos").innerHTML = mensagem;
                }
                else{
                    
                    listar_usuario_logado();
                    //document.getElementById("ul_meus_contatos").innerHTML = mensagem;
                }
            }
            catch(Exception){}
        }
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////  
//LISTAR USUÁRIO LOGADO
///////////////////////////////////////////////////////////////////////////////////////////////////////////  
        function listar_usuario_logado(){
            
            try{               
                
                var imagem_Perfim = "../arquivos/imagens/003_login/cleilson.jpg";
                
                    var add =
                
"<li style=\"float: left; margin-left: 5px; background-color:#3A3A3A;\" " +
"            onMouseover=\"" +
"            this.style.backgroundColor='#23871C';\"  " +
"            \n" +
"            onMouseout=\"\n" +
"            this.style.backgroundColor='#3A3A3A'\"" +
"        > " +
"            " +
"                <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\">" +
"                    <tr> \n" +    
"                        <td align=\"center\"> " +
"                            <img src='" + endereco_imagem_user_logado + "' style='cursor: pointer;'" +
/*
"                                onclick=\"abrir_conversa(" +
                                     "document.getElementById ('" + "img_conversa_user_logado" +                         "').src," +
                                     "document.getElementById ('" + "usuario_logado_id" +     "').value," +
                                     "document.getElementById ('" + "usuario_logado_id_nome" +      "').value," +
                                     "document.getElementById ('" + "usuario_logado_id_sobrenome" + "').value" +
                                 ");\" " +
*/                
"                                title=\"" +  document.getElementById("usuario_logado").value  + "\" width=\"100\" height=\"100\">" +
"                        </td>    " +
"                    </tr>" +
"                    <tr> " +
"                        <td align=\"center\" style=\" padding: 0; color: #3A3A3A;\"> " +
"                            " + "-" +
"                        </td>    " +
"                    </tr> " +
"                    <tr> " +
"                        <td align=\"center\" style=\" padding: 0; color: #ffffff;\"> " +
"                            " + "-)-> Você <-(-" +
"                        </td>    " +
"                    </tr>\n" +
"                    <tr> \n" +
"                        <td align=\"center\" style=\" padding: 0; color: #3A3A3A;\"> " +
"                            " + "-" +
"                        </td>    \n" +
"                    </tr>\n" +
"                </table>\n" +
"        </li>";

                //var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                document.getElementById("ul_meus_contatos").innerHTML = add;
                                                
            }catch(Exception){
                
                document.getElementById("ul_meus_contatos").innerHTML = "listar002_padrao -- " + Exception;
            }     
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////  
//LISTAR USUÁRIO LOGADO
///////////////////////////////////////////////////////////////////////////////////////////////////////////  


        
        function consultar_listar_contatos_003_verificar_se_user_tem_contatos( email_do_usuario_logado ){        
            try{           
                var contato_nao_cadastrado = false;
                
                var linha_recebida = document.getElementById("tabela_contatos").value.split("@");            
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
                        /*
                        
                        */
                       var local_usuario_logado_email_str = email_do_usuario_logado.trim().toUpperCase();
                       
                       var web_usuario_logado_email_str = importar_Para_Alfabeto_JM(web_usuario_logado).trim().toUpperCase();
                       
                       /*
                       var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    "Id: " + importar_Para_Alfabeto_JM(web_id).trim().toUpperCase() +
                                    "<br>" +
                                    "web_comando: " + importar_Para_Alfabeto_JM(web_comando).trim().toUpperCase() +
                                    "<br>" +
                                    "web_usuario_logado: " + importar_Para_Alfabeto_JM(web_usuario_logado).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_email: " + importar_Para_Alfabeto_JM(web_contato_email).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_nome: " + importar_Para_Alfabeto_JM(web_contato_nome).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_nome_meio: " + importar_Para_Alfabeto_JM(web_contato_nome_meio).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_ultimo_nome: " + importar_Para_Alfabeto_JM(web_contato_ultimo_nome).trim().toUpperCase();
                        */

                       //Verificar se este contato é deste usuário
                       if( verificar_igualdade_sem_espaco_no_final( web_usuario_logado_email_str, local_usuario_logado_email_str ) === true ){
                       //if( user_ok === 0 ){ 
                                      
                            /*
                            var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    "Verificar se este contato é deste usuário: " +
                                    "<br>" +
                                    "Id: " + importar_Para_Alfabeto_JM(web_id).trim().toUpperCase() +
                                    "<br>" +
                                    "web_comando: " + importar_Para_Alfabeto_JM(web_comando).trim().toUpperCase() +
                                    "<br>" +
                                    "web_usuario_logado: " + importar_Para_Alfabeto_JM(web_usuario_logado).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_email: " + importar_Para_Alfabeto_JM(web_contato_email).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_nome: " + importar_Para_Alfabeto_JM(web_contato_nome).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_nome_meio: " + importar_Para_Alfabeto_JM(web_contato_nome_meio).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_ultimo_nome: " + importar_Para_Alfabeto_JM(web_contato_ultimo_nome).trim().toUpperCase();
                            */
                            
                            // Fim do loop
                            contato_nao_cadastrado = true;
                            
                            var temp = lista_de_contatos;
                            
                            lista_de_contatos = 
                                    web_id + "j" + 
                                        web_comando + "j" + 
                                            web_usuario_logado + "j" + 
                                                web_contato_email + "j" + 
                                                    web_contato_nome + "j" + 
                                                        web_contato_nome_meio + "j" + 
                                                                web_contato_ultimo_nome  + "@" + temp;                           
                            document.getElementById("lista_de_contatos_input").value = lista_de_contatos;
                            
                            //Este é um contato deste usuário
                            /*
                            img_perfil_001_tb_usuario_procurar_imagem_deste_contato(
                                    web_id,
                                        web_comando,
                                            web_usuario_logado,
                                                web_contato_email,
                                                    web_contato_nome,
                                                        web_contato_nome_meio,
                                                            web_contato_ultimo_nome);
                            */                             
                       }
                       else{
                           
                           //Este não é um contato deste usuário
                           
                           /*
                           var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    "else{ " + 
                                    "<br>" +
                                    "Id: " + importar_Para_Alfabeto_JM(web_id).trim().toUpperCase() +
                                    "<br>" +
                                    "web_comando: " + importar_Para_Alfabeto_JM(web_comando).trim().toUpperCase() +
                                    "<br>" +
                                    "web_usuario_logado: " + importar_Para_Alfabeto_JM(web_usuario_logado).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_email: " + importar_Para_Alfabeto_JM(web_contato_email).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_nome: " + importar_Para_Alfabeto_JM(web_contato_nome).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_nome_meio: " + importar_Para_Alfabeto_JM(web_contato_nome_meio).trim().toUpperCase() +
                                    "<br>" +
                                    "web_contato_ultimo_nome: " + importar_Para_Alfabeto_JM(web_contato_ultimo_nome).trim().toUpperCase();
                            */
                           
                            contato_nao_cadastrado = false;

                       }
                    }
                }  
                
                //Este é um contato deste usuário
                //setTimeout(function(){
                    listar_contatos_da_lista_de_contatos_salva();                    
                    
                //}, 0);
                
            }catch(Exception){
                
                document.getElementById("ul_meus_contatos").innerHTML = "consultar_contato_antes_de_cadastrar_003 -- " + Exception;
            }   
            
            //listar_contatos_um_por_um_mensagem();
            
        }
        
        
        
        
        
        function listar_contatos_da_lista_de_contatos_salva(){
            
            try{
                
                var linha_recebida = lista_de_contatos.split("@");            
                for( var i = ( linha_recebida.length - 1 ); i >= 0; i-- ) {
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
                        
                        //
                        //*
                        baixar_tabela_usuario_criar_estrutura( 
                            i,
                                web_id,
                                        web_comando,
                                            web_usuario_logado,
                                                web_contato_email,
                                                    web_contato_nome,
                                                        web_contato_nome_meio,
                                                            web_contato_ultimo_nome );
                                                            //*/
                    }
                }
                
            }catch(Exception){
                
                document.getElementById("resposta").innerHTML = "listar_contatos_um_por_um -- " + Exception;
            }
            
            //MOSTRAR IMAGENS
                        
        }
 
///////////////////////////////////////////////////////////////////////////////////////////////////////////  
//LISTAR CONTATOS 
///////////////////////////////////////////////////////////////////////////////////////////////////////////  

