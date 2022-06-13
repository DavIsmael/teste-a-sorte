const elementoFrase = document.querySelector("#elementoFrase")
const diceLeft = document.querySelector("#diceLeft")
const diceRight = document.querySelector("#diceRight")

function jogarDados(){
    const randomProbability = Math.floor(Math.random() * 99.99);
    const investmentsProbability = Math.floor(Math.random() * 99.99);
    const fraseSorte = [
        "Há " + randomProbability + "% de chance de que hoje choverá na sua cidade",
        "Há " + randomProbability + "% de chance de que tudo está a caminho de dar errado para você hoje",
        "Há " + randomProbability + "% de chance de que você encontrará o seu grande amor hoje.",
        "Há " + randomProbability + "% de chance de que você será aceito para trabalhar em alguma empresa hoje.",
        "Há " + randomProbability + "% de chance de que o seu cachorro irá mijar no seu pc hoje.",
        "Há " + randomProbability + "% de chance de que você conseguirá terminar o seu projeto hoje.",
        "Há " + randomProbability + "% de chance de que o Mr. Beast te dará 10.000 dólares hoje.",
        "Há " + randomProbability + "% de chance de que por algum motivo misterioso as suas calças vão cair quando você tiver na rua hoje.",
        "Há " + randomProbability + "% de chance de que os seus investimentos valorizarão " + investmentsProbability + "% hoje.",
        "Há " + randomProbability + "% de chance de que os seus investimentos desvalorizarão " + investmentsProbability + "% hoje.",
        "Há " + randomProbability + "% de chance de que o seu pc irá de F hoje.",
        "Há " + randomProbability + "% de chance de que você será promovido hoje."
    ]
    
    const indiceFrase = Math.floor(Math.random() * 12)
    
    if(indiceFrase == 0){
        diceLeft.innerHTML = "1"
        diceRight.innerHTML = "0"
    }

    if(indiceFrase == 1){
        diceLeft.innerHTML = "1"
        diceRight.innerHTML = "1"
    }

    if(indiceFrase == 2){
        diceLeft.innerHTML = "1"
        diceRight.innerHTML = "2"

    }

    if(indiceFrase == 3){
        diceLeft.innerHTML = "2"
        diceRight.innerHTML = "2"
    }

    if(indiceFrase == 4){
        diceLeft.innerHTML = "2"
        diceRight.innerHTML = "3"
    }

    if(indiceFrase == 5){
        diceLeft.innerHTML = "3"
        diceRight.innerHTML = "3"
    }

    if(indiceFrase == 6){
        diceLeft.innerHTML = "3"
        diceRight.innerHTML = "4"
    }

    if(indiceFrase == 7){
        diceLeft.innerHTML = "4"
        diceRight.innerHTML = "4"
    }

    if(indiceFrase == 8){
        diceLeft.innerHTML = "4"
        diceRight.innerHTML = "5"
    }

    if(indiceFrase == 9){
        diceLeft.innerHTML = "5"
        diceRight.innerHTML = "5"
    }

    if(indiceFrase == 10){
        diceLeft.innerHTML = "5"
        diceRight.innerHTML = "6"
    }

    if(indiceFrase == 11){
        diceLeft.innerHTML = "6"
        diceRight.innerHTML = "6"
    }

    
    
    elementoFrase.innerHTML = fraseSorte[indiceFrase]
  

    
}

