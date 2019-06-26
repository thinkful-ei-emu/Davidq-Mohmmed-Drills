import React from 'react';
import Bomb from './state-drills/Bomb';
import Hello from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun';
import Accordian from './state-drills/Accordian';

const accordianTest =[
  {title:"title",content:'this is the content'},
  {title:"title",content:'this is the content'},
  {title:"title",content:'this is the content'}
];
function App() {
  return (
    <main className='App'>      
      <Bomb />
      <Hello />
      <RouletteGun chamber = {5}/>
      <Accordian sections={accordianTest}/>

    </main>
  );
}

export default App;
