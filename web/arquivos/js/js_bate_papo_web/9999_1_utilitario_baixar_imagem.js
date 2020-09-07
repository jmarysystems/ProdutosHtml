/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//importar_Para_Alfabeto_JM
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function importar_Para_Alfabeto_JM(txt){            
            //var sb = [];
            var sb = "";
                                                                
            try{
                
                var argumento = txt.split("-");
                                        
                for( var i = 0; i < argumento.length; i++ ) {
                    
                    var letra_unicode = String.fromCharCode( argumento[i] );             
                    //sb.push( letra_unicode );
                    sb += letra_unicode;
                    
                    //var dados_anteriores = document.getElementById("ul_resposta").innerHTML;
                    //var temp = "<li>" + argumento[i] + " - " + letra_unicode + "</li>";                    
                    //document.getElementById("ul_resposta").innerHTML = dados_anteriores + temp;
                                    
                }
                
                return sb;
                                                
            }catch(Exception){
                
                document.getElementById("resposta").innerText = "importar_Para_Alfabeto_JM -- " + Exception;
            }                       
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//importar_Para_Alfabeto_JM
///////////////////////////////////////////////////////////////////////////////////////////////////////////        
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//exportar_Para_Alfabeto_JM_Sem_Arroba
///////////////////////////////////////////////////////////////////////////////////////////////////////////        
        function exportar_Para_Alfabeto_JM_Sem_Arroba(argumento){            
            //var sb = [];
            var sb = "";
                                                                
            try{
                                        
                for( var i = 0; i < argumento.length; i++ ) {
                    
                    var decimal_unicode = argumento.charCodeAt(i);
                    //sb.push( decimal_unicode );
                    sb += decimal_unicode;
                    sb += "-";
                    
                    //var dados_anteriores = document.getElementById("ul_resposta").innerHTML;
                    //var temp = "<li>" + i + " - " + decimal_unicode + "</li>";                    
                    //document.getElementById("ul_resposta").innerHTML = dados_anteriores + temp;
                                    
                }
                
                return sb;
                                                
            }catch(Exception){
                
                document.getElementById("resposta").innerText = "exportar_Para_Alfabeto_JM_Sem_Arroba -- " + Exception;
            }                       
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//exportar_Para_Alfabeto_JM_Sem_Arroba
///////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////////////
//EXECUTAR SOM  
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        function play(){
            try{
                var audio = document.getElementById("audio");
                audio.controls = true;
                audio.volume = 1.0;
                
                audio.play();
            }catch(Exception){}
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//EXECUTAR SOM  
///////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
////CONVERTER BASE64
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
    function converter_base64( object1 ){
        
        /*
        var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    "verificar_igualdade( object1, object2 ) " +
                                    "<br>" +
                                    "object1: " + object1 +
                                    "<br>" +
                                    "object1: " + object2;
        */                  
       
        /*
        var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>";
        */   
       
        var retorno = "";
    
        try{
            
            var argumento1 = object1.split("-");                                        
            for( var i = 0; i < argumento1.length; i++ ) {
                try{
                    var letra_unicode = String.fromCharCode( argumento1[i] );   
                    
                    if ( letra_unicode === undefined || letra_unicode === "" || letra_unicode === null){
    
                    }
                    else if ( argumento1[i] > 32 ){
                        
                        retorno += letra_unicode;
                    }
                    
                    /*
                    var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                        document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                            "<br>" +
                            argumento1[i] + " - " + letra_unicode;
                    */
                }catch(Exception){}
            }
            
            /*
            var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +
                                    "<br>" +
                                    "verificar_igualdade( object1, object2 ) " +
                                    "<br>" +
                                    "letras1.length: " + letras1.length +
                                    "<br>" +
                                    "letras2.length: " + letras2.length +
                                    "<br>" +
                                    "numeros1: " + numeros1 +
                                    "<br>" +
                                    "letras1: " + letras1 +
                                    "<br>" +
                                    "numeros2: " + numeros2 +
                                    "<br>" +
                                    "letras2: " + letras2;
            */
            
        }catch(Exception){}
        
        return retorno;
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//CONVERTER BASE64
///////////////////////////////////////////////////////////////////////////////////////////////////////////   












///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//VERIFICAR IGUALDADE
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
    function verificar_igualdade_sem_espaco_no_final( object1, object2 ){
        
        /*
        var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>" +
                                    "verificar_igualdade( object1, object2 ) " +
                                    "<br>" +
                                    "object1: " + object1 +
                                    "<br>" +
                                    "object1: " + object2;
        */                  
       
        /*
        var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                            document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +                                    
                                    "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" + "<br>" +
                                    "-------------------------------------------------------------------------------------" + "<br>";
        */   
       
        var retorno = false;
    
        try{
            var numeros1 = exportar_Para_Alfabeto_JM_Sem_Arroba(object1);
            var numeros2 = exportar_Para_Alfabeto_JM_Sem_Arroba(object2);
            
            var letras1 = "";
            var argumento1 = numeros1.split("-");                                        
            for( var i = 0; i < argumento1.length; i++ ) {
                try{
                    var letra_unicode = String.fromCharCode( argumento1[i] );   
                    
                    if ( letra_unicode === undefined || letra_unicode === "" || letra_unicode === null){
    
                    }
                    else if ( argumento1[i] > 32 ){
                        
                        letras1 += letra_unicode + "-";
                    }
                    
                    /*
                    var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                        document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                            "<br>" +
                            argumento1[i] + " - " + letra_unicode;
                    */
                }catch(Exception){}
            }
            
            var letras2 = "";
            var argumento2 = numeros2.split("-");                                        
            for( var i = 0; i < argumento2.length; i++ ) {   
                try{
                    var letra_unicode = String.fromCharCode( argumento2[i] );      
                    
                    if ( letra_unicode === undefined || letra_unicode === "" || letra_unicode === null){

                    }
                    else if ( argumento2[i] > 32 ){
                        
                        letras2 += letra_unicode + "-";
                    }
                    
                    /*
                    var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                        document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                            "<br>" +
                            argumento2[i] + " - " + letra_unicode;
                    */
                }catch(Exception){}
            }
            
            /*
            var anterior = document.getElementById("ul_meus_contatos").innerHTML;
                document.getElementById("ul_meus_contatos").innerHTML = anterior + 
                                    "<br>" +
                                    "<br>" +
                                    "verificar_igualdade( object1, object2 ) " +
                                    "<br>" +
                                    "letras1.length: " + letras1.length +
                                    "<br>" +
                                    "letras2.length: " + letras2.length +
                                    "<br>" +
                                    "numeros1: " + numeros1 +
                                    "<br>" +
                                    "letras1: " + letras1 +
                                    "<br>" +
                                    "numeros2: " + numeros2 +
                                    "<br>" +
                                    "letras2: " + letras2;
            */
    
            var obj_1 = letras1.split("-");
            var obj_2 = letras2.split("-");
            
            if( obj_1.length === obj_2.length ){
                
                for( var i = 0; i < obj_1.length; i++ ) {
                    
                    if( obj_1[i] === obj_2[i] ){
                        
                        retorno = true;
                    }
                    else{
                        retorno = false;
                        break;
                    }
                }
            }
            
        }catch(Exception){}
        
        return retorno;
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////   
//VERIFICAR IGUALDADE
/////////////////////////////////////////////////////////////////////////////////////////////////////////// 