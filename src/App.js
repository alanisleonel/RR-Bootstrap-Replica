import './App.css';
import BackgroundImg from './components/BackgroundImage';
import TopBar from './components/TopBar';
import Stores from './components/Stores';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <BackgroundImg />
      <Stores />
    </div>
  );
}

export default App;
