let carrosseis = document.getElementsByClassName('carrossel')

for(let i = 0; i < carrosseis.length; i++){
    let carrossel = carrosseis[i]
    let btnBack = carrossel.getElementsByClassName('btnBack')[0]
    let btnNext = carrossel.getElementsByClassName('btnNext')[0]

    let itens = carrossel.getElementsByClassName('item')
    let posicaoAnterior = 0
    let mover = posicaoAnterior + 50

    btnNext.addEventListener('click', ()=>{
        mover = posicaoAnterior + 50

        for(let c = 0; c < itens.length; c++){

            itens[c].style.right = mover + '%'

            posicaoAnterior = mover
        }
    })

    btnBack.addEventListener('click', ()=>{
        mover = posicaoAnterior - 50

        for(let c = 0; c < itens.length; c++){

            itens[c].style.right = mover + '%'

            posicaoAnterior = mover
        }
    })
}