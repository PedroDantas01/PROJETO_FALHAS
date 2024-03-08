function teste(){
  
 const redeftth = document.getElementById('ftth').checked
const redefttx = document.getElementById('fttx').checked

const cidadeFalha = document.getElementById('cidade_falha').value
const bairroFalha = document.getElementById('bairro_falha').value
const slotPonFalha = document.getElementById('slot_pon_falha').value
const mediaOff = document.getElementById('media_cliente').value
const ruaFalha = document.getElementById('rua_falha').value
const idFalha = document.getElementById('id_falha').value
const prazoFalha = document.getElementById('prazo_falha').value
const inicioFalha = document.getElementById('inicio_falha').value

const alertafalha = document.getElementById('texo_falha')
const msgplantao = document.getElementById('texo_platao')


if(redeftth){

alertafalha.innerHTML=`FALHA DE REDE LOCAL - ${bairroFalha} - ${slotPonFalha} </br></br>
ID ${idFalha} </br></br>
CLIENTES QUE RESIDEM  EM ${bairroFalha} E SE CONECTAM AO ${slotPonFalha}, IRÃO SENTIR FALTA DE ACESSO DEVIDO À UM ROMPIMENTO DE FIBRA.
NOSSA EQUIPE JÁ ESTÁ CIENTE E FAZENDO O POSSÍVEL PARA NORMALIZAR O QUANTO ANTES. </br></br>
PRAZO PARA NORMALIZAÇÃO: ${prazoFalha} </br></br>
INÍCIO DA FALHA: ${inicioFalha}`


msgplantao.innerHTML=`IDENTIFICADOS CLIENTES SEM ACESSO  ${bairroFalha} - ${slotPonFalha}</br></br>
RUA(S) ${ruaFalha}</br></br>
MEDIA DE ${mediaOff} CLIENTES </br></br>
PRAZO INFORMADO ATE ${prazoFalha}`


}else if(redefttx){

  alertafalha.innerHTML=`FALHA DE REDE LOCAL - ${bairroFalha} - ${ruaFalha} </br></br>
  ID ${idFalha} </br></br>
  CLIENTES QUE RESIDEM  EM ${bairroFalha}, RUA(S) ${ruaFalha}, IRÃO SENTIR FALTA DE ACESSO DEVIDO À UMA FALHA NO EQUIPAMENTO DA LOCALIDADE.
  NOSSA EQUIPE JÁ ESTÁ CIENTE E FAZENDO O POSSÍVEL PARA NORMALIZAR O QUANTO ANTES. </br></br>
  PRAZO PARA NORMALIZAÇÃO: ${prazoFalha} </br></br>
  INÍCIO DA FALHA: ${inicioFalha}`
  
  
  msgplantao.innerHTML=`IDENTIFICADOS CLIENTES SEM ACESSO  ${bairroFalha}</br></br>
  RUA(S) ${ruaFalha}</br></br>
  MEDIA DE ${mediaOff} CLIENTES </br></br>
  PRAZO INFORMADO ATE ${prazoFalha}`

}else{

  alertafalha.innerHTML=`SELECIONE FTTH OU FTTX`
 

}
}