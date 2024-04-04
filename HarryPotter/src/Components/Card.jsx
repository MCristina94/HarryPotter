import React from 'react'
import c from './css/card.module.css'

const Card = ({student}) => {
  return (
    
        <div className={c.card}>
                <img src={student.image} alt='photoCharacter' className={c.img}/>  
            <div className={c.info}>
                <h3>{student.name}</h3>
                <p>Casa: {student.house}</p> 
            </div>
             
        </div>
        
  )
}

export default Card
