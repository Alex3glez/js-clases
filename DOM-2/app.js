/**
 * Pendientes:
 * La función de restart está incompleta V
 * Debemos de crear una función para detectar el empate V
 * Debemos modificar la función handleCellClick para verificar el empate V
 * 
 * Opcional: Inicializa el juego solo cuando la pagina haya cargado V
 */


const table = [...document.querySelectorAll('.row > div')];
const divForAlert = document.querySelector('.alert');
const resetButton = document.querySelector('.btn');
let currentMove = "X";
let isActiveGame = true;
let playCount=0;

window.onload= function () {
    const handleCellClick = (e) => {

    if(!isActiveGame){
        table.forEach(elem=> elem.style.cursor = "not-allowed");
        return;
    };

    if (!e.target.textContent.trim()) {
        e.target.textContent = currentMove;
        let result = reviewMove();
        if (result) {
            alert(`Gano el usuario ${currentMove}`)
        }
        detectDraw();
        changeCurrentMove();
    } else {
        console.log(e.target.textContent)
        console.log("No debería añadir el valor")
    }
}

const changeCurrentMove = () => {
    currentMove = currentMove === "X" ? "O" : "X";
    let backgroundColor = currentMove === "X" ? "info" : "success";
    divForAlert.textContent = "Es el turno de :" + currentMove;
    divForAlert.setAttribute('class', `alert alert-${backgroundColor}`)
}


const reviewMove = () => {
    let flag = false;
    const winnersMove = [
        [0, 3, 6],
        [1, 4, 7],
        [0, 4, 8],
        [2, 5, 8],
        [6, 4, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 1, 2]
    ];

    for (let i = 0; i < winnersMove.length; i++) {
        const pos1 = winnersMove[i][0];
        const pos2 = winnersMove[i][1];
        const pos3 = winnersMove[i][2];

        const valueInPos1 = table[pos1].textContent;
        const valueInPos2 = table[pos2].textContent;
        const valueInPos3 = table[pos3].textContent;

        if (!valueInPos1 || !valueInPos2 || !valueInPos3) continue;

        if (valueInPos1 === valueInPos2 && valueInPos2 === valueInPos3) {
            table[pos1].style.background = '#C1D19D';
            table[pos2].style.background = '#C1D19D';
            table[pos3].style.background = '#C1D19D';
            flag = true;
            isActiveGame = false;
            resetButton.classList.remove('hiding');
            break;
        }
    }

    return flag;
}

table.forEach(elem => {
    elem.addEventListener('click', handleCellClick)
})

const restart = () => {
    table.forEach(elem=>{
        elem.textContent = "";
        elem.style.backgroundColor = "white";
        elem.style.cursor = "pointer";
    })
    resetButton.classList.add('hiding');
    playCount=0;
    currentMove = "X";
    divForAlert.textContent = "Es el turno de :" + currentMove;
    divForAlert.setAttribute('class', `alert alert-info`)
    isActiveGame = true;
}

function detectDraw() {
   if (reviewMove()) playCount=0
   else if (playCount===8){
     alert(`EMPATE`);
     resetButton.classList.remove('hiding');
    }
    else playCount++;
    
}

resetButton.addEventListener('click',restart)
}


