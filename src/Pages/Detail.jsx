import React, { useEffect, useState } from 'react'
import CardDetail from '../Components/CardDetail';
import {useParams} from 'react-router-dom'

const Detail = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    console.log('Characters:', characters); // Verificar la lista de personajes recibida
    console.log('Selected ID:', id); // Verificar el ID del personaje seleccionado
  
    if (id && characters.length > 0) {
      const character = characters.find(character => character.id === id);
      console.log('Selected character:', character); // Verificar el personaje seleccionado
      setSelectedStudent(character);
    }
  }, [id, characters]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch('https://hp-api.onrender.com/api/characters/students');
      const charactersData = await response.json();
      setCharacters(charactersData);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  console.log(characters);
  
  return (
    <div>
    {selectedStudent && <CardDetail character={selectedStudent} />}
  </div>
  )
}

export default Detail
