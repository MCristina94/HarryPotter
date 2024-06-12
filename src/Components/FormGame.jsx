import React, { useState } from 'react'
import Message from './Message';


function FormGame() {

    //state para guardar la informacion de las respuestas
    const [answers, setAnswers] = useState({
        name: '',
        age: '',
        gender: '',
        colorHair: '',
        animal: '',
        spell: '',
        hobbie: ''
    });
    //state para mostrar respuesta del juego y state para arrojar algun error
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    //se crea el evento preventDefault del formulario y el uso de state show y error.
    const regex = /^[A-Za-z]{3,}( [A-Za-z]+)?$/;
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(answers.name.length >= 3 && regex.test(answers.name) && answers.animal.length >= 3 && regex.test(answers.animal) && answers.colorHair && answers.gender && answers.age && answers.hobbie && answers.spell){
            setShow(true);
            setError(false);
     
        }else{
            setShow(false);
            setError(true)
        }
    }
    
  return (
    <div style={{color: "white"}}>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Name: </label>
            <input type="text" name="name" value={answers.name} onChange={(event) => setAnswers({...answers, name: event.target.value})}/>
        </div>
        <div>
            <p>Select your Age</p>
            <input type="radio" id="age1" name="age" value='0 - 15' checked={answers.age === '0 - 15'} onChange={(event) => setAnswers({...answers, age: event.target.value})}  />
            <label htmlFor='age1'>0 - 15</label>
            <input type="radio" id="age2" name="age" value='16 - 30' checked={answers.age === '16 - 30'} onChange={(event) => setAnswers({...answers, age: event.target.value})} />
            <label htmlFor='age2'>16 - 30</label>
            <input type="radio" id="age3" name="age" value='31 - 50' checked={answers.age === '31 - 50'} onChange={(event) => setAnswers({...answers, age: event.target.value})}/>
            <label htmlFor='age3'>31 - 50</label>
            <input type="radio" id="age4" name="age" value='51 - 100' checked={answers.age === '51 - 100'} onChange={(event) => setAnswers({...answers, age: event.target.value})} />
            <label>51 - 100</label>
        </div>
        <div>
            <p>Select your gender</p>
            <input type="radio" id="gender1" name="gender" value='Male' checked={answers.gender === 'Male'} onChange={(event) => setAnswers({...answers, gender: event.target.value})}  />
            <label htmlFor='gender1'>Male</label>
            <input type="radio" id="gender2" name="gender" value='Female' checked={answers.gender === 'Female'} onChange={(event) => setAnswers({...answers, gender: event.target.value})} />
            <label htmlFor='gender2'>Female</label>
        </div>
        <div>
            <p>Select Your Hair Color</p>
            <input type='radio' id='color1' name='color' value={'Brown'} checked={answers.colorHair === 'Brown'} onChange={(event) => setAnswers({...answers, colorHair: event.target.value})} />
            <label htmlFor='color1'>Brown</label>
            <input type='radio' id='color2' name='color' value={'Black'} checked={answers.colorHair === 'Black'} onChange={(event) => setAnswers({...answers, colorHair: event.target.value})} />
            <label htmlFor='color2'>Black</label>
            <input type='radio' id='color3' name='color' value={'Red'} checked={answers.colorHair === 'Red'} onChange={(event) => setAnswers({...answers, colorHair: event.target.value}) } />
            <label htmlFor='color3'>Red</label>
            <input type='radio' id='color4' name='color' value={'Blonde'} checked={answers.colorHair === 'Blonde'} onChange={(event) => setAnswers({...answers, colorHair: event.target.value})} />
            <label htmlFor='color4'>Blonde</label>
        </div>
        <div>
            <label>Your Favorit Magic Animal: </label>
            <input type='text' name='animal' value={answers.animal} onChange={(event) => setAnswers({...answers, animal: event.target.value})}/>
        </div>
        <div>
            <p>Your Favorite Spell</p>
            <input type='radio' id='spell1' name='spell' value={'Expelliarmus'} checked={answers.spell === 'Expelliarmus'} onChange={(event) => setAnswers({...answers, spell: event.target.value})}/>
            <label htmlFor='spell1'>Expelliarmus</label>
            <input type='radio' id='spell2' name='spell' value={'Accio'} checked={answers.spell === 'Accio'} onChange={(event) => setAnswers({...answers, spell: event.target.value})} />
            <label htmlFor='spell2'>Accio</label>
            <input type='radio' id='spell3' name='spell'  value={'Lumus'} checked={answers.spell === 'Lumus'} onChange={(event) => setAnswers({...answers, spell: event.target.value})} />
            <label htmlFor='spell3'>Lumos</label>
            <input type='radio' id='spell4' name='spell'  value={'Protego'} checked={answers.spell === 'Protego'} onChange={(event) => setAnswers({...answers, spell: event.target.value})} />
            <label htmlFor='spell4'>Protego</label>
        </div>
        <div>
            <p>Your Favorite Hobbie in Hogwarts</p>
            <input type='radio' id='hobbie1' name='hobbie'  value={'Play Quidditch'} checked={answers.hobbie === 'Play Quidditch'} onChange={(event) => setAnswers({...answers, hobbie: event.target.value})} />
            <label htmlFor='hobbie1'>Play Quidditch</label>
            <input type='radio' id='hobbie2' name='hobbie' value={'Study in the library'} checked={answers.hobbie === 'Study in the library'} onChange={(event) => setAnswers({...answers, hobbie: event.target.value})} />
            <label htmlFor='hobbie2'>Study in the library</label>
            <input type='radio' id='hobbie3' name='hobbie' value={'Spend time with friends in the commun room'} checked={answers.hobbie === 'Spend time with friends in the commun room'} onChange={(event) => setAnswers({...answers, hobbie: event.target.value})} />
            <label htmlFor='hobbie3'>Spend time with friends in the commun room</label>
            <input type='radio' id='hobbie4' name='hobbie' value={'Explore the clastel grounds'} checked={answers.hobbie === 'Explore the clastel grounds'} onChange={(event) => setAnswers({...answers, hobbie: event.target.value})} />
            <label htmlFor='hobbie4'>Explore the clastel grounds</label>
        </div>
        <button>Send Answers</button>
        {show && <Message answers={answers}/> }
        {error && <h3 style={{color: 'red' , margin: '0', padding: '2%'}}>Please verify your information again.</h3>}
      </form>
    </div>
  )
}

export default FormGame
