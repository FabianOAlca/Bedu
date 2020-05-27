import React from 'react';
import AlumnoCard from './components/AlumnoCard';

const alumno = {
  name: 'Edgar',
  email: 'fabian0alcala11@',
  avatar: 'Ang'
}

function App() {
  return (
    <AlumnoCard alumno={alumno} />
  );
}

export default App;
