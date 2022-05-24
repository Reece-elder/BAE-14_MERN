import HelloWorld from './components/001-Components/HelloWorld';
import './css/App.css';

function App() {
  return (
    <div className="App">
      {/* Importing our HelloWorld component into our App.js */}
      <HelloWorld/>
      {/* All normal HTML elements are lowercase, capital letters let us know they are Components */}
    </div>
  );
}

export default App;
