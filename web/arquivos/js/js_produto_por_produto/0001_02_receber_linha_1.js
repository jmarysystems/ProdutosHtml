/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function pesquisar_ean_linha_por_linha22( ean_a_ser_pesquisado, linha_r, ean_p, des_p, cat_p, umb_p ){

setTimeout(function(){
    
    try{
                
        var linha = ""; try{ linha = linha_r.split("\",\""); }catch(Exception){}  
        
        //var s1 = ean_a_ser_pesquisado.text().trim();
        //var s2 = ean_p.text().trim();
        
        //if(s1.trim() === s2.trim()){
            
            //setTimeout(function(){
                //document.getElementById("ean_atual").value = linha_atual_int + 10;
            
                var anterior = document.getElementById("lista_de_produtos_jmary_systems").innerHTML;
                document.getElementById("lista_de_produtos_jmary_systems").innerHTML = anterior + "<br>" + s1 + " - " + s2 + " - " + des_p + " - " + cat_p + " - " + umb_p;   
            //}, 0);   
        //}     
                                                
    }catch(Exception){}  
    
}, 0);    
    
} 