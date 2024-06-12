import React, { useState, useEffect } from 'react'

const Message = ({answers}) => {
    const [students, setStudents] = useState([]);
    const [character, setCharacter] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    const url = "https://hp-api.onrender.com/api/characters/students";
    useEffect(() => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("hubo un error");
        })
        .then((data) => {
          setStudents(data);
          console.log(students);
         })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    useEffect (() => {
        if(students.length > 0){
            const findCharacter = (answers, students) =>{
            for(let student of students){
               // console.log(student);
                if(student.gender === answers.gender.toLowerCase() && 
                student.hairColour === answers.colorHair.toLowerCase() 
                ){
                    return student;
                }
            }
            return students[0];
            };
        setCharacter(findCharacter(answers, students))
        setIsLoading(false);
        }
    }, [answers, students]);

    console.log('------personaje------');
    console.log(character);
    
    if(isLoading){
        return <p>loading...</p>
    }

  return (
    <div>
      <h2>Hello {answers.name}!!!</h2>
      <p>Your Character Is: {character.name}</p>
      <img src={character.image} alt='foto character' /> 
    </div>
  )
}

export default Message
