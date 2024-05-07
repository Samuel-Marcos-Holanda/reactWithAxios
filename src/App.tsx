import { useCallback, useState } from 'react';
import './App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


function App() {

  const [character, setCharacter] = useState<any>();

  const getCharacterName = useCallback(async (id: number) => {
    const character = await axios.get(`https://swapi.py4e.com/api/people/${id}`)
    setCharacter(character.data)
  }, [])

  return (
    <div className='main-container'>
      <h1>STAR WARS </h1>

      <strong>Nome do personagem: {character ? character.name : ""}</strong>
      <strong>Cor de pele: {character ? character.hair_color : ""}</strong>
      <strong>Altura: {character ? character.height : ""}</strong>
      <strong>Gender: {character ? character.gender : ""}</strong>

      <div>
        <button onClick={() => getCharacterName(14)}>han solo</button>
        <button onClick={() => getCharacterName(13)}>chewbacca</button>
        <button onClick={() => getCharacterName(1)}>Luke</button>
        <Link to="/test">
          <button type="button">
                Test
          </button>
        </Link>
      </div>
      
      <p>Feito por: Samuel Marcos, Sávio Sayke e Deglier Fernandes</p>
    </div>
  )
}

export default App
