import { useState } from 'react'
import './App.css'
import { useCharacters } from './useCharacters'
import CharacterCard from '../components/CharacterCard'
import CharacterList from '../components/CharacterList'
import Pagination from '../components/Pagination'

function App() {
    // Corrección aquí: se usan corchetes [] para useState
    const [page, setPage] = useState(1)

    const { characters, totalPages, loading, error } = useCharacters(page);

    return (
        <main className='app'>
            <h1>Rick and Morty</h1>
            {loading && <p>Cargando...</p>}
            {error && <p role='alert'>Ocurrió un error: {error}</p>}

            <CharacterList characters={characters} />

            <Pagination
                page={page}
                totalPages={totalPages}
                onPrev={() => setPage((p) => Math.max(p - 1, 1))}
                onNext={() => setPage((p) => Math.min(p + 1, totalPages))}
            />
        </main>
    )
}

export default App;