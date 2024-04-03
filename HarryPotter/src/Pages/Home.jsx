import React, { useEffect, useState } from 'react'
import BannerHome from '../Components/BannerHome'
import Card from '../Components/Card'


const Home = () => {
  const [students, setStudents] = useState([]);

  const url = 'https://hp-api.onrender.com/api/characters/students'
  useEffect(() => {
    fetch(url)
    .then((response) => {
        if(response.ok){
            return response.json();
        }
        throw new Error("hubo un error");
    })
    .then(data => {
        setStudents(data);
        
    })
    .catch(error => {
        console.log(error);
    })
}, [])

console.log(students);
  return (
    <div>
      <BannerHome/>

      {students && students.map((student) => {
        return (
          <div key={student.id}>
            <Card student={student}/>
          </div>
        )
      })}
    </div>
  )
}

export default Home

