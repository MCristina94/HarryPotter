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

  const removeFavorites = (studentId) => {
    const updatedFavorites = studentSelected.filter(
      (student) => student.id !== studentId
    );
    setStudentSelected(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  };

  return (
    <div className={f.container}>
      <h1 className={f.tittle}>
        Your Favorites Students
      </h1>
      <div className={f.containerCards}> 

      {studentSelected && studentSelected.map((student) =>{
        return (
          
            <div className={f.card}>
             <Card student={student}/>  
            </div>
          
            
          
        )
        
      })}
      </div>
    </div>
  )
}

export default Favs
