import React from "react";

const Display = ({ winner, player }) => {
    if (winner === "") {
        return (
            < div className="content" >
                <p>
                    It is now {player}'s turn. {<br></br>}
                </p>
            </div >
        )
    } else if (winner !== "") {
        return (
            < div className="content" >
                <p>
                    {winner}
                </p>
            </div >
        )

    }

}

export default Display

