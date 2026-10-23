import { Fragment } from 'react';
import PropTypes from 'prop-types';

function ListaTareas({ titulo, tareas }) {
  return (
    <>
      <h2>{titulo}</h2>
      {tareas.map((tarea) => (
        <Fragment key={tarea.id}>
          <dt>{tarea.nombre}</dt>
          <dd>{tarea.completada ? '✅ Hecha' : '⏳ Pendiente'}</dd>
        </Fragment>
      ))}
    </>
  );
}

ListaTareas.propTypes = {
  titulo: PropTypes.string.isRequired,
  tareas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      completada: PropTypes.bool,
    })
  ).isRequired,
};

export default ListaTareas;