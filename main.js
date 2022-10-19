const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// Funções Callback
function handleTryClick(event) {
    event.preventDefault() // Não faça o padrão, não envie o formulário

    const inputNumber = document.querySelector("#inputNumber")

    if ((Number(inputNumber.value) > 10)) {
        alert("Por favor insira um número de 0 a 10!")
        
        }
                
    if ((Number(inputNumber.value) == randomNumber)) {
        toggleScreen()
        screen2.querySelector('h2').innerHTML = `Você acertou em ${xAttempts} tentativas!`
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)

}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

