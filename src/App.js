import React, { useState, useEffect } from "react";
import './App.css';
import Display from "./Display"

const App = () => {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])

    //Changing player
    const [player, setPlayer] = useState("X");
    const changePlayer = () => {
        if (player === "X") {
            setPlayer("O")
        } else {
            setPlayer("X")
        }
    }

    //id
    const newArray = [...board];

    const getID = (e) => {
        if (board[e.target.id] === "") {
            // board[e.target.id] = player;
            newArray[e.target.id] = player;
            console.log(newArray)
            setBoard(newArray)

        } else {
            alert("Box is occupied!")
        }
    }

    useEffect(() => {
        win()
    }, [board])


    //check win conditions
    const [winner, setWinner] = useState("")
    const win = () => {
        if (
            (board[2] === "X" && board[4] === "X" && board[6] === "X") ||
            (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
            (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
            (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
            (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
            (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
            (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
            (board[6] === "X" && board[7] === "X" && board[8] === "X")) {
            setWinner("X wins!")
        }
        else if (
            (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
            (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
            (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
            (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
            (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
            (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
            (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
            (board[2] === "O" && board[4] === "O" && board[6] === "O")) {
            setWinner("O wins!")
        }
        if (board.includes("") === false && winner === "") {
            setWinner("Its a Draw!")
        }
    }

    //all function
    const all = (e) => {
        if (board[e.target.id] === "" && winner === "") {
            getID(e)
            changePlayer()
            win()
        } else if (board[e.target.id] !== "") {
            alert("Box is occupied!")
        } else {
            alert("Game Over boy!")
        }
    }

    return (
        <div className="body">
            <div className="container">
                <Display winner={winner} player={player} />
                <div className="box">
                    {
                        board.map((value, index) => {
                            return (
                                <div key={index} id={index} className="boxInside" onClick={all}>
                                    {value}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default App;
