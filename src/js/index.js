document.addEventListener("DOMContentLoaded", function(){
   
    var ancoras = document.querySelectorAll("[href^='#']");
    
    for(var x=0; x<ancoras.length; x++){
       
       ancoras[x].onclick = function(e){
          
          e.preventDefault();
 
          // pega o href que é o id da section
          var id = this.getAttribute("href");
          
          document.querySelector(id).scrollIntoView({block: 'start', behavior: 'smooth'});
 
       }
       
    }
   
 });