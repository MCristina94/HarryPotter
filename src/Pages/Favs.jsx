import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import f from './css/favs.module.css'

const Favs = () => {
  const [studentSelected, setStudentSelected] = useState([]);

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites) {
      setStudentSelected(JSON.parse(favorites));
    }
  }, []);



  return (
    <div className={f.container}>
      <h1 className={f.tittle}>
        Your Favorites Students
      </h1>
      <div className={f.containerCards}> 

      {studentSelected && studentSelected.map((student) =>{
        return (
          
            <div className={f.card}>
             <Card student={student} setStudentSelect={setStudentSelected} isFavorite={true}/>
               
            </div>
          
            
          
        )
        
      })}
      </div>
    </div>
  )
}

export default Favs
