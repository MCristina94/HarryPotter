import React from "react";
import f from "./css/footer.module.css";
import deathlyHallows from "../img/DeathlyHallows.png";

const Footer = () => {
  return (
    <div className={f.bg}>
      <img src={deathlyHallows} alt="Deathly Hallows" className={f.img} />
      <div className={f.infoFooter}>
        <p>This is a fan Page, is my personal project</p>
      </div>
      <div className={f.icons}>
        <a href="https://github.com/MCristina94/ctd-fe3-final" target="_blank">
          <i
            class="fa-brands fa-github"
            style={{ color: "#e2f8f1", width: "30px" }}
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/maurin-cristina-a-8b349615b/" target="_blank">
          <i
            class="fa-brands fa-linkedin"
            style={{ color: "#e2f8f1", width: "30px" }}
          ></i>
        </a>
        <a href="https://portafolio-maureen.vercel.app/" target="_blank">
          <i
            class="fa-solid fa-address-book"
            style={{ color: "#e2f8f1", width: "30px" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
