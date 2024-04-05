import React, { useEffect, useState } from 'react'
import BannerHome from '../Components/BannerHome'
import Card from '../Components/Card'
import h from './css/home.module.css'


const Home = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const[itemsPerPage] = useState(11);

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

 // Lógica para calcular los elementos a mostrar en la página actual
 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = students.slice(indexOfFirstItem, indexOfLastItem);

 // Función para cambiar de página
 const paginate = pageNumber => setCurrentPage(pageNumber);

  // Calcular el rango de botones de paginación a mostrar
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(students.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxPageButtons = 10; // Máximo de botones de página a mostrar

  let startPage, endPage;
  if (pageNumbers.length <= maxPageButtons) {
    startPage = 1;
    endPage = pageNumbers.length;
  } else {
    if (currentPage <= Math.ceil(maxPageButtons / 2)) {
      startPage = 1;
      endPage = maxPageButtons;
    } else if (currentPage + Math.floor(maxPageButtons / 2) >= pageNumbers.length) {
      startPage = pageNumbers.length - maxPageButtons + 1;
      endPage = pageNumbers.length;
    } else {
      startPage = currentPage - Math.floor(maxPageButtons / 2);
      endPage = currentPage + Math.floor(maxPageButtons / 2);
    }
  }
  return (
    <div>
      <BannerHome />
      <h1 className={h.tittleStudent}>Students</h1>
      <div className={h.cardContainer}>
        {currentItems.map((student, index) => (
          <div key={index}>
            <Card student={student} />
          </div>
        ))}
      </div>
      {/* Botones de paginación */}
      <div className={h.pag}>
        {pageNumbers.slice(startPage - 1, endPage).map((number, index) => (
          <div key={index}>
            <p onClick={() => paginate(number)} className={h.numberPag}>{number}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

