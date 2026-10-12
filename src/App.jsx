import ListaTareas from './components/ListaTareas';

const tareas = [
  { id: 1, nombre: 'Aprender Fragments', completada: true },
  { id: 2, nombre: 'Usar PropTypes', completada: false },
];

function App() {
  return (
    <>
      <h1>Mi App PWA</h1>
      <dl>
        <ListaTareas titulo="Mis tareas" tareas={tareas} />
      </dl>
    </>
  );
}

export default App;