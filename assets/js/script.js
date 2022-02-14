
/* Para acessar o DOM:
Por Tag: getElementByTagName()
Por Id:  getElementById()
Por Nome: getElementByName()
Por Classe: getElementByClassName()
Por Seletor: querySelector() - last update, recommended!

- case sensitive
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let whatsapp = document.querySelector('#whatsapp')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let telefoneOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '40%'
email.style.width = '40%' 
whatsapp.style.width = '40%'
assunto.style.width = '40%'


function validaNome() {
        let txtNome = document.querySelector("#txtNome")
         if (nome.value.length < 3){ 
            
            txtNome.innerHTML = 'Nome inválido'
            txtNome.style.color = 'red' }  
     
            else {txtNome.innerHTML = 'Nome válido'
            txtNome.style.color = 'green' }
            nomeOk = true
    }

    function validaEmail() {
        let txtEmail = document.querySelector("#txtEmail")
        if (email.value.length < 5){ 
            
            txtEmail.innerHTML = 'Endereço email inválido'
            txtEmail.style.color = 'red' }  
         
         else
            (email.value.length > 5)    
            {txtEmail.innerHTML = 'Endereço email é válido'
            txtEmail.style.color = 'green' }
            emailOk = true
        }
        
        function validaWhatsApp() {
            let txtTelefone= document.querySelector("#txtwhats")
            if (telefone.value.length = 10){ 
                
                txtTelefone.innerHTML = 'DDD e número válido'
                txtTelefone.style.color = 'green' }  
             
             else
                (relefone.value.length = 10)    
                 telefoneOk = true
            }

    function validaAssunto() {
        let txtAssunto = document.querySelector('#txtAssunto')

        if (assunto.value.length >= 2) {
            txtAssunto.innerHTML = 'Inválido, texto descrito acima de 200 caracteres'
            txtAssunto.style.color = 'red'
            txtAssunto.style.display = 'block'  
     }
        else 
     {      txtAssunto.style.display = 'none' }
            assuntoOk = true
     
}
    function enviar() {
        if (nomeOk == true && emailOk == true && telefoneOk == true && assuntoOk == true)    
            alert ('Formulário preenchido coretamente!')

        else {
            alert ('´Preencha o formulário corretamente para ser enchaminhado.')

        }

        function mapaZoom() {
            mapa.style.width = '800px'
            mapa.style.heigth = '600px'

        }
        
        function mapaNormal() {
            mapa.style.width = '450px'
            mapa.style.height = '400px'
        }
}

    