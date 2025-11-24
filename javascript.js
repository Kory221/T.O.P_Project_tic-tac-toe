function gameboard () {
    const rows = 3;
    const columns = 3;
    const board = [];
    const body = document.querySelector('body');

    for (let i=0; i<rows; i++) {
        const rowDiv = document.createElement('div');
        body.appendChild(rowDiv);
        board[i] = [];
        for (let j=0; j<columns; j++) {
            const columnDiv = document.createElement('div');
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

