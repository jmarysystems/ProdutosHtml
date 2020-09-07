/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

        function _01_controle_loop( count_x, ean_a_ser_consultado, html_da_div_consultar_produto ){
            if( count_x < 20 ){      
                
                setTimeout(function(){ 
                     var count_xx = count_x + 1;
                    baixar_tabela( count_xx, ean_a_ser_consultado, html_da_div_consultar_produto );
                }, 1000);
            }
            else{
                
                alert( "Verifique sua conexão com a internet." );
                
                document.getElementById("div_consultar_produto").innerHTML = html_da_div_consultar_produto;
            }
        }
        
        function baixar_tabela( count_x, ean_a_ser_consultado, html_da_div_consultar_produto ){
            
            try{
                var id_planilha = "1bHoSZsLTtMs35GfyBb8jw2uM6cyHQiw1EZBtHVT9SxE";
                var urlxx = "https://sheets.googleapis.com/v4/spreadsheets/"+ id_planilha +"/values/A:D?key=AIzaSyBwiMCywJRFQHuuksWdhqwjOrR5mDaWJYs";
                
                ////////////////////////////////////////////////////////////////////////////
                setTimeout(function(){ 
                    /* Some tasks */ 
                     document.getElementById("div_consultar_produto").innerHTML = 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Consultando EAN(S): " + count_x + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                }, 0);
                ////////////////////////////////////////////////////////////////////////////

                var url = urlxx;
                jQuery.getJSON(url).success(function(data) {
                    //console.log(data); 
                    //alert( JSON.stringify(data) );
                    document.getElementById("tabela_produtos_por_ean_baixada").value = JSON.stringify(data);
                    
                    ////////////////////////////////////////////////////////////////////////////
                    setTimeout(function(){ 
                        /* Some tasks */ 
                        document.getElementById("div_consultar_produto").innerHTML = 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Pesuisando - Aguarde...(2)" + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                            "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
                    }, 0);
                    setTimeout(function(){ 
                        receber_tabela_e_dividir_em_linhas( ean_a_ser_consultado, html_da_div_consultar_produto );
                    }, 0);
                    ////////////////////////////////////////////////////////////////////////////                    
                }).error(function(message) {
                    //console.error('error' + message); 
                    _01_controle_loop( count_x, ean_a_ser_consultado, html_da_div_consultar_produto );
                }).complete(function() {
                    //console.log('completed!');                    
                });
                
            }
            catch(Exception){alert( "ErroXX: " + Exception );}
        }