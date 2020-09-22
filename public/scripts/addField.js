

// procurar botão 
document.querySelector("#add-time")

//quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    // Duplicar os campos. que campos?
   const newFieldContainer =  document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false


   //pegar os campos. Que campos?
   const fields = newFieldContainer.querySelectorAll('input')
   
   // para cada campo, limpar
   fields.forEach(function(field) {
       // pegar o field do momento e limpa ele
       field.value =""
       
   })

    //colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

