let board = []

function play(event){
    let element = document.getElementById(event)
    let player = document.getElementById('player')

    if(player.innerText === 'O'){
        player.innerText = 'X' 
        board[event] = 'X'
    }else{
        player.innerText = 'O'
        board[event] = 'O'
     }
     element.innerText = player.innerText
     
     console.log(board)
     


///vertical
if(board[2] === 'X'){
    if(board[5] === 'X'){
        if(board[8] === 'X'){
            window.alert('X WON')
        }
    }
}

if(board[1] === 'X'){
    if(board[4] === 'X'){
        if(board[7] === 'X'){
            window.alert('X WON')
        }
    }
}

if(board[0] === 'X'){
    if(board[3] === 'X'){
        if(board[6] === 'X'){
            window.alert('X WON')
        }
    }
}

if(board[2] === 'O'){
    if(board[5] === 'O'){
        if(board[8] === 'O'){
            window.alert('O WON')
        }
    }
}

if(board[1] === 'O'){
    if(board[4] === 'O'){
        if(board[7] === 'O'){
            window.alert('O WON')
        }
    }
}

if(board[0] === 'O'){
    if(board[3] === 'O'){
        if(board[6] === 'O'){
            window.alert('O WON')
        }
    }
}

///horizontal
if(board[0] === 'X'){
    if(board[1] === 'X'){
        if(board[2] === 'X'){
            window.alert('X WON')
        }
    }
}

if(board[3] === 'X'){
    if(board[4] === 'X'){
        if(board[5] === 'X'){
            window.alert('X WON')
        }
    }
}

if(board[6] === 'X'){
    if(board[7] === 'X'){
        if(board[8] === 'X'){
            window.alert('X WON')
        }
    }
}

if(board[0] === 'O'){
    if(board[1] === 'O'){
        if(board[2] === 'O'){
            window.alert('O WON')
        }
    }
}

if(board[3] === 'O'){
    if(board[4] === 'O'){
        if(board[5] === 'O'){
            window.alert('O WON')
        }
    }
}

if(board[6] === 'O'){
    if(board[7] === 'O'){
        if(board[8] === 'O'){
            window.alert('O WON')
        }
    }
}

///diagonal
if(board[0] === 'O'){
    if(board[4] === 'O'){
        if(board[8] === 'O'){
            window.alert('O WON')
        }
    }
}

if(board[2] === 'O'){
    if(board[4] === 'O'){
        if(board[6] === 'O'){
            window.alert('O WON')
        }
    }
}

if(board[0] === 'X'){
    if(board[4] === 'X'){
        if(board[8] === 'X'){
            window.alert('X WON')
        }
    }
}

if(board[2] === 'X'){
    if(board[4] === 'X'){
        if(board[6] === 'X'){
            window.alert('X WON')
        }
    }
}

let boardFull = true

for(let i = 0; i <= 8; i++){
    if (board[i] === undefined){
        boardFull = false;
    }
}

if (boardFull === true){
    window.alert("Cat's Game!")
}
}
