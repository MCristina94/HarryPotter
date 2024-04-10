import React, { useEffect, useState } from "react";
import s from './css/spells.module.css'

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const urlSpells = "https://hp-api.onrender.com/api/spells";

  useEffect(() => {
    fetch(urlSpells)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("hubo un error");
      })
      .then((data) => {
        console.log(data);
        setSpells(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={s.container}>
    <h1 className={s.tittle}>Spells</h1>
      {spells &&
        spells.map((spell, index) => {
          return (
            <div key={index} className={s.containerCardSpell}>
              <h3>{spell.name}</h3>
              <p>{spell.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Spells;
