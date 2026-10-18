import React from 'react';
import PropTypes from 'prop-types';

export function ListaPersonajes({ titulo, personajes }) {
  return (
    <>
      <h2>{titulo}</h2>
      <ul>
        {personajes.map((personaje) => (
          // Usamos Fragment para agrupar elementos sin añadir nodos extra al DOM
          <React.Fragment key={personaje.id}>
            <li>
              <img src={personaje.image} alt={personaje.name} width="50" style={{ borderRadius: '50%' }} />
              <span> {personaje.name} - {personaje.species}</span>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

// Validación de PropTypes requerida
ListaPersonajes.propTypes = {
  titulo: PropTypes.string.isRequired,
  personajes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};