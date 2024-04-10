import React from "react";
import a from "./css/about.module.css";

const About = () => {
  return (
    <div className={a.container}>
      <h1 className={a.tittle}>About This Page</h1>
      <div className={a.text}>
        <p>
          This website is developed in JavaScript with React to practice fetching
          APIs using fetch, along with useEffect and useState hooks. The website
          is focused on the Harry Potter universe and utilizes the free API
          available at https://hp-api.onrender.com/.
        
          On the home page, there are cards displaying information about different
          Hogwarts students. Users can click on a card to view more details about
          that student, including additional information. They also have the
          option to mark a card as a favorite by clicking on a heart icon.
        
          Additionally, I have implemented a pagination system so that users can
          navigate between different pages of student cards.
        
          I have created an additional route called "Favorites" where users can
          view all the students they have marked as favorites.
        
          There is also a dedicated route for "Spells," where a list of spells is
          displayed along with their names and descriptions.
       
          Furthermore, I have incorporated a fun game where users can fill out a
          form and receive the name of the Harry Potter character that they are
          most related to as a result.
      
          This website is allowing me to practice not only fetching APIs but also
          navigating between different routes, managing state, and dynamically
          presenting data.
        </p>
      </div>
     
    </div>
  );
};

export default About;
