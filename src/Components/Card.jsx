import React, { useState} from "react";
import c from "./css/card.module.css";
import logoGryffindor from "../img/Gryffindor.png";
import logoSlytherin from "../img/Slytherin.png";
import logoHufflepuff from "../img/Hufflepuff.png";
import logoRavenclaw from "../img/Ravenclaw.png";
import logoHogwarts from "../img/houses.png";
import { Link } from "react-router-dom";

const Card = ({ student, setStudentSelect, isFavorite }) => {
  const [favorite, setFavorite] = useState(isFavorite);


  let imageStudent;
  if (student.image && student.image !== "") {
    imageStudent = student.image;
  } else {
    // Si student.image está vacío o no existe, entonces verifica la casa y asigna la imagen correspondiente
    if (student.house === "Gryffindor") {
      imageStudent = logoGryffindor;
    } else if (student.house === "Slytherin") {
      imageStudent = logoSlytherin;
    } else if (student.house === "Hufflepuff") {
      imageStudent = logoHufflepuff;
    } else if (student.house === "Ravenclaw") {
      imageStudent = logoRavenclaw;
    } else {
      // Si no se encuentra ninguna casa, asigna el logo de Hogwarts
      imageStudent = logoHogwarts;
    }
  }
  console.log(student.house);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    setStudentSelect(prevState => {
      const updatedFavorites = favorite
        ? prevState.filter(s => s.id !== student.id)
        : [...prevState, student];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

 

  return (
    
      <div className={`${c.card} ${c[student.house.toLowerCase()]}`}>
        <img src={imageStudent} alt="photoCharacter" className={c.img} />
        
        <div className={c.info}>
          <h3>{student.name}</h3>
          <p>Casa: {student.house}</p>
        </div>
        <div
          className={c.heart}
          style={{ position: "absolute", top: 20, right: 50 }}
          onClick={toggleFavorite}
        >
         {favorite ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
        </div>
        <Link to={"/detail/" + student.id} className={c.links}>
        <div
          className={c.arrowCard}
          style={{ position: "absolute", top: 180, right: 50 }}
        >
          <i class="fa-solid fa-up-right-from-square"></i>
        </div>
        </Link>
      </div>
    
  );
};

export default Card;
