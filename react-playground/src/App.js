import React from 'react';
import Bomb from './state-drills/Bomb';
import Hello from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <main className='App'>      
      <Bomb />
      <Hello />
      <RouletteGun chamber = {5}/>
    </main>
  );
}

export default App;
