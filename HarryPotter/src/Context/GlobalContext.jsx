// console.log("hola");
// import { createContext, useContext, useEffect, useReducer } from "react";

// const StudentsStates = createContext();

// const reducer = (state, action) => {
//     console.log(action.type);
//     switch(action.type){
//         case 'GET-STUDENTS': //TRAE LA INFO DE LA API Y LA GUARDA EN LA LISTA studentsList
//             return {...state, studentList: action.payload}
//     }
// }

// const inicialState = {
//     studentList: [],
//     favs: [],
// }

// const Context = ({children}) => {
//     const [state, dispatch] = useReducer(reducer, inicialState)
//     const url = 'https://hp-api.onrender.com/api/characters/students' //dirección de la api

//     //se realiza llamado a la api por medio de fetch

//     useEffect(() => {
//         fetch(url)
//         .then((response) => {
//             if(response.ok){
//                 return response.json();
//             }
//             throw new Error("hubo un error");
//         })
//         .then(data => dispatch({
//             type: 'GET-STUDENTS', payload: data
//         }))
//         .catch(error => {
//             console.log(error);
//         })
//     }, [])

//     return (
//         <StudentsStates.Provider value={{
//             state, dispatch
//         }}>
//             {children}
//         </StudentsStates.Provider>
//     )
// }

// export default Context

// export const useStudentsState = () => useContext(StudentsStates)