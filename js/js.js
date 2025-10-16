let resposta = document.getElementById('resposta')

function calcularGeracao(potencia, irradiacao, efici){
return (potencia * irradiacao * 30 * efici) / 1000
}

function principal(){
    let potencia = Number(document.getElementById('potencia').value)
    let irradiacao = Number(document.getElementById('irradiacao').value)
    let efici = Number(document.getElementById('efici').value) / 100

    let final = calcularGeracao(potencia, irradiacao, efici)

    console.log(`A geração mensal de energia é: ${final.toFixed(2)}`)

    resposta.innerHTML = ``
    resposta.innerHTML += `A geração mensal de energia é: ${final.toFixed(2)} KWH.`

}
