/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function _01_controle_loop_sem_fim(){   
                
            try{
                
                setTimeout(function(){ 
                    
                    _02_controle_loop_sem_fim_baixar_tabela_conversa();
                    
                }, 1000);
            }
            catch(Exception){alert( "_01_controle_loop_sem_fim: " + Exception );}
        }
        
        function _02_controle_loop_sem_fim_baixar_tabela_conversa(){
            
            try{
                var id_planilha = "10n3TYa4DlEbwduXiXU94yY5tHeStfoFeeod6EO-ST_o";
                var url = "https://sheets.googleapis.com/v4/spreadsheets/"+ id_planilha +"/values/A:B?key=AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";

                jQuery.getJSON(url).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    try{
                        document.getElementById("tabela_conversas").value = JSON.stringify(data);
                        listando_todos_os_contatos_001();
                    }catch(Exception){}
                }).error(function(message) {
                    //console.error('error' + message); 
                    //_01_controle_loop_sem_fim();
                    //alert("Erro: " + message );
                    _01_controle_loop_sem_fim();
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){
                alert( "_02_controle_loop_sem_fim_baixar_tabela_conversa: " + Exception );
            }finally {   
                
                //_01_controle_loop_sem_fim();
                //////////////////////////////////////////////////////////////////////
                //document.getElementById("ul_meus_contatos").style.display = 'block'; 
                //////////////////////////////////////////////////////////////////////
            }
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//BAIXANDO TABELA   
///////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODOS OS CONTATOS   
///////////////////////////////////////////////////////////////////////////////////////////////////////////
function listando_todos_os_contatos_001(){        
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

                       //Verificar se este contato é deste usuário
                       var nome_principal = "";   try{ nome_principal = converter_base64(web_contato_nome).trim(); }catch(Exception){}
                       var web_contato_email_str      = importar_Para_Alfabeto_JM( web_contato_email ).trim().toUpperCase();
                    
                        percorrer_todas_as_conversas( web_id, web_contato_email_str, nome_principal );
                    }
                }                  
            }catch(Exception){
                
                document.getElementById("ul_meus_contatos").innerHTML = "consultar_contato_antes_de_cadastrar_003 -- " + Exception;
            }finally {   
                
                //alert("Acabou");
                setTimeout(function(){ 
                    
                    //alert("Reiniciando");
                    if( carregado === 1 ){
                        
                        _01_controle_loop_sem_fim();
                    }
                    else if( carregado === 0 ){
                        
                        carregado = 0;
                        document.getElementById("ul_meus_contatos").style.display = 'block';
                        
                        document.getElementById("contato_tabela_xy_01").style.display = 'none';
                        document.getElementById("contato_tabela_xy_01").innerHTML = "";
                        
                        _01_controle_loop_sem_fim();
                    }
                    
                }, 1000);
            }
            
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//LISTANDO TODOS OS CONTATOS   
///////////////////////////////////////////////////////////////////////////////////////////////////////////   