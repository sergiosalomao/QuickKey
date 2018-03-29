  


  function marcaTexto() {
    
        var textarea = document.getElementById ("textoDesafio");
        
        textoEntrada = document.getElementById("textoEntrada").value;
        
       
        
        
        if ('selectionStart' in textarea) {
            textarea.selectionStart = 0;
            textarea.selectionEnd = textoEntrada.length;
         //  textarea.focus ();
         //  document.getElementById("textoEntrada").focus();
     
        }
      
         
        }
        
    
    

   
  
  
  