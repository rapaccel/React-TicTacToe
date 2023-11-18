import React, { useState } from 'react'


export default function GameBoard({onSelectSquare,board}) {
   
    // const [gameBoard,setGameBoard]=useState(initialGameBoard);
    // function handleSelectSquare(rowIndex,colIndex,){
    //     setGameBoard((prevGameBoard)=>{
    //         const updatedGameBoard=[...prevGameBoard.map(innerArray=>[...innerArray])]
    //         updatedGameBoard[rowIndex][colIndex]=activePlayerSymbol;
    //         return updatedGameBoard;
    //     });
    //     onSelectSquare();
    // }
  return (
   <ol id='game-board'>
    {board.map((row,index)=>(
        <li key={index}>
            <ol>
                {row.map((playerSymbol,colIndex)=>(
                    <li key={colIndex}>
                        <button onClick={()=>onSelectSquare(index,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>

        </li>
    ))}
   </ol>
  )
}
