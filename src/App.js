import logo from './logo.svg';
import './App.css';
import Header from './Header';
import RightPanel from './RightPanel';
import Kanban from './Kanban';

function App() {
  return (
    <div className="App">
     <Header />
     <RightPanel />
     <Kanban />
    </div>
  );
}

export default App;
