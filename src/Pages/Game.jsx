import React from 'react'
import g from './css/game.module.css'
import FormGame from '../Components/FormGame'

const Game = () => {
  return (
    <div className={g.container}>
      <h1 className={g.tittle}>Which Harry Potter Character Are You?</h1>
      <FormGame/>
    </div>
  )
}

export default Game
