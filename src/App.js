import React from 'react';
import './App.css';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <AppRoutes />  {/* Renderizando o componente que contém as rotas */}
    </div>
  );
}

export default App;
