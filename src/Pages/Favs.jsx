import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';

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
    <div>
      {studentSelected && studentSelected.map((student) =>{
        return (
          <div>
          <Card student={student}/>   
          </div>
        )
      })}
    </div>
  )
}

export default Favs
