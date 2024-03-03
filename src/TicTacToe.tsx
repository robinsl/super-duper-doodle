import './TicTacToe.css'
import {useState} from "react";

type BoardArray = [[string, string, string], [string, string, string], [string, string, string]]
const calculateWinner = (board: BoardArray) => {
    let winner = "\u00A0"

    // Row winner check
    for (let y = 0; y < board.length; y++) {
        if (board[y][0] !== "\u00A0" && board[y][0] === board[y][1] && board[y][0] === board[y][2]){
            winner = board[y][0];
        }
    }

    // Column winner check
    for (let x = 0; x < board.length; x++) {
        if (board[0][x] !== "\u00A0" && board[0][x] === board[1][x] && board[0][x] === board[2][x]){
            winner = board[0][x];
        }
    }

    // Diagonal Winner check
    if (board[0][0] !== "\u00A0" && board[0][0] === board[1][1] && board[0][0] === board[2][2]){
        winner = board[0][0];
    }
    if (board[0][2] !== "\u00A0" && board[0][2] === board[1][1] && board[0][2] === board[0][2]){
        winner = board[0][2];
    }


    console.log(`winner: "${winner}"`)
    return winner
}

const Square = ({value, onClick}) => {
    return (
        <>
            <button
                className={"square"}
                onClick={onClick}
            >{value}</button>
        </>
    )
}

const Board = ({board, onClick}) => {
    return (
        <>
            <div className={"board-row"}>
                <Square value={board[0][0]} onClick={() => onClick(0, 0)} />
                <Square value={board[0][1]} onClick={() => onClick(0, 1)} />
                <Square value={board[0][2]} onClick={() => onClick(0, 2)} />
            </div>
            <div className={"board-row"}>
                <Square value={board[1][0]} onClick={() => onClick(1, 0)}/>
                <Square value={board[1][1]} onClick={() => onClick(1, 1)}/>
                <Square value={board[1][2]} onClick={() => onClick(1, 2)}/>
            </div>
            <div className={"board-row"}>
                <Square value={board[2][0]} onClick={() => onClick(2, 0)}/>
                <Square value={board[2][1]} onClick={() => onClick(2, 1)}/>
                <Square value={board[2][2]} onClick={() => onClick(2, 2)}/>
            </div>
        </>
    )
}

const WinnerDisplay = ({winner}) => winner!=="\u00A0" && <h2>Winner: {winner}</h2>

export const TicTacToe = () => {
    const [board, setBoard] = useState<BoardArray>([
        ["\u00A0", "\u00A0", "\u00A0"],
        ["\u00A0", "\u00A0", "\u00A0"],
        ["\u00A0", "\u00A0", "\u00A0"],
    ])
    const [player, setPlayer] = useState("X")
    const [winner, setWinner] = useState("\u00A0")

    const handleClick = (x: number, y: number) => {
        const newBoard = board.slice() as BoardArray
        newBoard[x][y] = player;
        setBoard(newBoard);

        setPlayer(player == "X" ? "O" : "X")
        setWinner(calculateWinner(board))
    }

    const display = winner==="\u00A0" ? <h2>Player turn: {player}</h2> : <WinnerDisplay winner={winner}/>

    return (
        <>
            <h1>TicTacToe Game</h1>
            {display}
            <Board board={board} onClick={handleClick}/>
        </>
    )
}