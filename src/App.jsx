import './App.css'
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/examples';
import ComponentsImg  from './assets/components.png';

function App() {

  return (
    <> 
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
     </>
  );
}

export default App
