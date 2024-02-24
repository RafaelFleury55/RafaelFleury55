<script>

  var CampoNome = document.getElementById("nomeCliente");
  var CampoEmail = document.getElementById("emailCliente");
  var CampoTelefone = document.getElementById("telefoneCliente");
  var CampoAssunto = document.getElementById("listaAssunto");

  function MascaraTelefone(){   

CampoTelefone.addEventListener('keyup', function(e){

        var key =  e.keyCode;          

          if (key == 8) { 
              return false;
          }

          var Tel = CampoTelefone.value;
    
          if (Tel.length == 1){     
            CampoTelefone.value = "(" + Tel;
              return true;
          }

          if (Tel.length == 3){     
            CampoTelefone.value = Tel + ")" ;
              return true;
          }  
          if (Tel.length == 9){      
            CampoTelefone.value = Tel + "-";
              return true;
          }    

  })   
      
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var formData = new FormData(this); 
    fetch("send_email.php", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao enviar o formulário");
        }
        alert("O formulário foi enviado com sucesso!");
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
    });
});


</script>