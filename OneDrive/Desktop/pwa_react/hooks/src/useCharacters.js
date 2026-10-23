import { useEffect, useState } from "react";

const API_URL = "https://rickandmortyapi.com/api/character";

export function useCharacters(page, search) {
    const [characters, setCharacters] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function loadCharacters() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${API_URL}?page=${page}&name=${search}`, {
                    signal: controller.signal,
                });

                // Si la API no encuentra resultados, responde con 404
                if (response.status === 404) {
                    setCharacters([]);
                    setTotalPages(1);
                    setLoading(false);
                    return;
                }

                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.status}`);
                }

                const data = await response.json();
                setCharacters(data.results);
                setTotalPages(data.info.pages);

                localStorage.setItem(`rickmorty_page_${page}`, JSON.stringify(data.results));

            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        loadCharacters();

        return () => controller.abort();
    }, [page, search]);

    return { characters, totalPages, loading, error };
}