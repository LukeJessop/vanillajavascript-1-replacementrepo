let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');
 console.log(idInput)
 console.log(colorInput)


function setCard(){
        const card = document.getElementById(idInput.value)
        card.style.color = idInput.value
        console.log(card.style.color)
}