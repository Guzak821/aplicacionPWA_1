import { useState, useEffect } from 'react';
import { ListaPersonajes } from './components/ListaPersonajes';

export function App() {
  // 1. Hook useState para guardar los personajes y el estado de carga
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);

  // 2. Hook useEffect para consumir la API de Rick and Morty al montar el componente
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al consumir la API:', error);
        setCargando(false);
      });
  }, []);

  return (
    <>
      <h1>Rick and Morty App</h1>
      {cargando ? (
        <p>Cargando personajes...</p>
      ) : (
        <ListaPersonajes titulo="Personajes Principales" personajes={personajes} />
      )}
    </>
  );
}

export default App;