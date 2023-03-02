import { useState } from 'react';
import Row from '../Row/Row';

function Board (props) {
    const [rows, setRows] = useState(() => createBoard(props));

    function createBoard(props) {
        let board = [];

        for (let i = 0; i < props.rows; i++) {
            board.push([]);

            for(let j = 0; j < props.columns; j++) {
                board[i].push({
                    x: j,
                    y: i,
                    count: 0,
                    isOpen: false,
                    hasMine: false,
                    hasFlag: false
                });
            }
        }

        for(let i = 0; i < props.mines; i++) {
            let randomRow = Math.floor(Math.random() * props.rows);
            let randomCol = Math.floor(Math.random() * props.columns);

            let cell = board[randomRow][randomCol];

            if (cell.hasMine) {
                i--;
            } else {
                cell.hasMine = true;
            }
        }

        return board;
    }

    function open(cell) {
        let current = rows[cell.y][cell.x];

        if(current.hasMine && props.openCells === 0) {
            setRows(() => {
                createBoard(props);
                open(cell);
            } );
        } else {
            if(!cell.hasFlag && !current.isOpen) {
                props.handleCellClick();

                current.isOpen = true;
            }
        }
    }

    function findMines(cell) {
        let minesNear = 0;

        for(let row = -1; row <= 1; row++) {
            for(let col = -1; col <=1; col++) {
                if (cell.y + row >= 0 && cell.x + col >= 0) {
                    if (
                        cell.y + row < rows.length &&
                        cell.x + col < rows[0].length
                    ) {
                        if (
                            rows[cell.y + row][cell.x + col].hasMine &&
                            !(row === 0 && col === 0)
                        ) {
                            minesNear++;
                        }
                    }
                }  
            }
        }
        return minesNear;
    }
    

    return (
        <div className="board">
            {rows.map((cells, i) => (
                <Row cells={cells} key={i} />
            )
            )}
        </div>
    )
}

export default Board;
