function gameboard () {
    const rows = 3;
    const columns = 3;
    const board = [];
    const body = document.querySelector('body');

    for (let i=0; i<rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('id','row'+i);
        body.appendChild(rowDiv);
        board[i] = [];
        for (let j=0; j<columns; j++) {
            const columnDiv = document.createElement('div');
            columnDiv.setAttribute('class', 'col'+j);
            board[i].push(columnDiv);
            rowDiv.appendChild(columnDiv);
        }
    };

    return {board};
};

function players () {
    const playerX = "x";
    const playerO = "o";

    return {playerX, playerO}
};


function printSign () {
    let gameTurn = "X's turn";
    let count = 0;
    for (let row of gameboard().board) {
        for (let i = 0; i < 3; i++) {
            function printer () {
                if (count % 2 === 0) {
                    row[i].textContent = players().playerX;
                    count++;
                    row[i].removeEventListener ('click', printer);
                    gameTurn = "O's turn";
                }
                else {
                    row[i].textContent = players().playerO;
                    count++;
                    row[i].removeEventListener ('click', printer);
                    gameTurn = "X's turn"
                }
            };
           if (row[i].textContent === '') { 
                row[i].addEventListener ('click', printer);
            };
        };
    };
    return gameTurn;
};

function gameResult () {
    let result = "game over, it's a draw";
    const cell1 = document.querySelector('#row0 .col0');
    const cell2 = document.querySelector('#row0 .col1');
    const cell3 = document.querySelector('#row0 .col2');
    const cell4 = document.querySelector('#row1 .col0');
    const cell5 = document.querySelector('#row1 .col1');
    const cell6 = document.querySelector('#row1 .col2');
    const cell7 = document.querySelector('#row2 .col0');
    const cell8 = document.querySelector('#row2 .col1');
    const cell9 = document.querySelector('#row2 .col2');

    const lines = [[cell1, cell2, cell3], 
    [cell4, cell5, cell6], 
    [cell7, cell8, cell9], 
    [cell1, cell4, cell7], 
    [cell2, cell5, cell8], 
    [cell3, cell6, cell9], 
    [cell1, cell5, cell9], 
    [cell3, cell5, cell7]];
    
    for (let line of lines) {
        if (line[0].textContent === line[1].textContent 
            && line[0].textContent === line[2].textContent
            && line[0].textContent === 'x') {
            result = 'game over, X wins';
        }
        else if (line[0].textContent === line[1].textContent 
            && line[0].textContent === line[2].textContent
            && line[0].textContent === 'o') {
            result = 'game over, O wins';
        }
        else if (line[0].textContent === '' || line[1].textContent === '' || line[2].textContent === '') {
            result = "game in process"
        }
    };
    return result;
};
