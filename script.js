//cria referência ao form e elemento onde sera exibida a resposta
const frm= document.querySelector("form")
const resp= document.querySelector("h3")

//"ouvinte" do evento , acionado quando o botão submit for clicado 
frm.addEventListener("submit",(e)=> {
    e.preventDefault()    
    
    //obtem e converte o conteudo do campo inHoraBrasil
    const Hora_brasil = Number(frm.inHoraBrasil.value)
    let hora_Franca = Hora_brasil + 5 //calcula horario da franca

    if (hora_Franca > 24) {
        hora_Franca = hora_Franca - 24 //tirei as 24 hrs da frança
    }

   //exibe a resposta (altera o conteudo do elemento h3 da pagina)
   resp.innerText = `Hora na França ${hora_Franca.toFixed(2)}`


})