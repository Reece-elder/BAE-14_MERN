import AboutMe from './components/001-Components/AboutMe';
import HelloWorld from './components/001-Components/HelloWorld';
import ECommerceApp from './components/002-Hierarchy/E-Commerce-App';
import WebPage from './components/002-Hierarchy/Exercise/WebPage';
import PetManager from './components/003-Props/Exercise/PetManager';
import ItemManager from './components/003-Props/ItemManager';
import Manager from './components/003-Props/Manager';
import StateManagerTwo from './components/004-State/state-recap/StateManagerTwo';
import StateManager from './components/004-State/StateManager';
import Form from './components/005-Forms/Exercise/Form';
import ManagerForm from './components/005-Forms/FormsWithState/ManagerForm';
import PrintText from './components/005-Forms/PrintText';
import PizzaForm from './components/006-PizzaExercise/PizzaForm';
import PizzaArrayForm from './components/007-Arrays-Objects/PizzaArrayForm';
import Aquarium from './components/008-Rendering-Objects/Aquarium';
import RoutingManager from './components/009-Routing/RoutingManager';
import './css/App.css';

function App() {
  return (
    <div className="App">
      {/* Importing our HelloWorld component into our App.js */}
      {/* <HelloWorld/> */}
      {/* All normal HTML elements are lowercase, capital letters let us know they are Components */}
      {/* <AboutMe/> */}

      {/* 002 - Hierarchy */}
      {/* <ECommerceApp/> */}
      {/* <WebPage/> */}
      {/* <Manager/> */}
      {/* 003 - Props */}
      {/* <ItemManager/> */}
      {/* <PetManager/> */}
      {/* <StateManager/> */}
      {/* <StateManagerTwo/> */}
      {/* <PrintText/> */}
      {/* <ManagerForm/> */}
      {/* <Form/> */}
      {/* <PizzaForm/> */}
      {/* <PizzaArrayForm/> */}
      {/* <Aquarium/> */}

      <RoutingManager/>
    </div>
  );
}

export default App;
