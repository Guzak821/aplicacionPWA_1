import { useState, useEffect } from 'react'
import './App.css'
import { useCharacters } from './useCharacters'
import CharacterCard from '../components/CharacterCard'
import CharacterList from '../components/CharacterList'
import Pagination from '../components/Pagination'

function App() {
    const [page, setPage] = useState(1);

    // Obtener la última búsqueda del localStorage al iniciar (o cadena vacía)
    const [search, setSearch] = useState(() => {
        return localStorage.getItem('rickmorty_last_search') || '';
    });

    // Guardar la última búsqueda en el localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('rickmorty_last_search', search);
    }, [search]);

    const { characters, totalPages, loading, error } = useCharacters(page, search);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1); // Reiniciar a la página 1 al filtrar
    };

    return (
        <main className='app'>
            <h1>Rick and Morty</h1>

            {/* Input de Búsqueda */}
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Buscar personaje por nombre..."
                    value={search}
                    onChange={handleSearchChange}
                    style={{ padding: '8px', fontSize: '16px', width: '100%', maxWidth: '300px' }}
                />
            </div>

            {loading && <p>Cargando...</p>}
            {error && <p role='alert'>Ocurrió un error: {error}</p>}

            {!loading && !error && characters.length === 0 && (
                <p>No se encontraron personajes con ese nombre.</p>
            )}

            <CharacterList characters={characters} />

            {characters.length > 0 && (
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPrev={() => setPage((p) => Math.max(p - 1, 1))}
                    onNext={() => setPage((p) => Math.min(p + 1, totalPages))}
                />
            )}
        </main>
    )
}

export default App;