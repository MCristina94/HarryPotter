import React from 'react'
import cardDetail from './css/cardDetail.module.css'

const CardDetail = ({character}) => {
    console.log('Character:', character);
  return (
    <div style={{paddingTop: '10%', textAlign: 'center'}}>
        <div className={cardDetail.bg}>
            <img src={character.image} alt='photo' className={cardDetail.image}/>
            <h1 className={cardDetail.tittle}>{character.name}</h1>
            <p>The species of this character is {character.species}</p>
            <p>The birthdate is {character.dateOfBirth}</p>
            <p>The ancestor of this character is {character.ancestry}</p>
            <p>Gender: {character.gender}</p>
            <h2 className={cardDetail.tittle}>Patronus: {character.patronus}</h2> 
        </div>
      
    </div>
  )
}

export default CardDetail
