let resposta = document.getElementById('resposta')

function principal(){
    let potencia = Number(document.getElementById('potencia').value)
    let irradiacao = Number(document.getElementById('irradiacao').value)
    let dias = Number(document.getElementById('dias').value)
    let efici = Number(document.getElementById('efici').value) / 100

    let final = (potencia * irradiacao * dias * efici) / 1000

    console.log(`A geração mensal de energia é: ${final.toFixed(2)}`)

    resposta.innerHTML = ``
    resposta.innerHTML += `A geração mensal de energia é: ${final.toFixed(2)} KWH.`

}
