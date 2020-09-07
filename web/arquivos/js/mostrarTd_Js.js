function mostrarTd( id, x ) {
    
    if( document.getElementById( id ).className === "header") {    
        
        document.getElementById( id ).removeAttribute( "class", id );
        document.getElementById( id ).className += "header2";
        
        document.getElementById(x).style.display = "block";  
        
    }
    else{
        
        document.getElementById( id ).removeAttribute( "class", id );
        document.getElementById( id ).className += "header";
        
        document.getElementById(x).style.display = "none"; 
    }
    
}




