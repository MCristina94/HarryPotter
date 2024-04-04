import React from 'react'
import c from './css/card.module.css'
import logoGryffindor from '../img/gryffindor.png'
import logoSlytherin from '../img/stlitherin.png'
import logoHufflepuff from '../img/hyfflepuff.png'
import logoRavenclaw from '../img/ravenclaw.png'
import logoHogwarts from '../img/Logo-Hogwarts.png'

const Card = ({student}) => {
  let imageStudent;
  if(student.image && student.image !== ''){
    imageStudent = student.image;
  }else{
    // Si student.image está vacío o no existe, entonces verifica la casa y asigna la imagen correspondiente
    if(student.house === "Gryffindor"){
      imageStudent = logoGryffindor;
    }else if(student.house === "Slytherin"){
      imageStudent = logoSlytherin;
    }else if(student.house === "Hufflepuff"){
      imageStudent = logoHufflepuff;
    }else if(student.house === "Ravenclaw"){
      imageStudent = logoRavenclaw;
    }else{
      // Si no se encuentra ninguna casa, asigna el logo de Hogwarts
      imageStudent = logoHogwarts;
    }
  }

  console.log(student.house);
  return (
    
        <div className={c.card}>
                <img src={imageStudent} alt='photoCharacter' className={c.img}/>  
            <div className={c.info}>
                <h3>{student.name}</h3>
                <p>Casa: {student.house}</p> 
            </div>
             
        </div>
        
  )
}

export default Card
