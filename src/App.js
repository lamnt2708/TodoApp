import './App.css';
import Header from './Header';
import RightPanel from './RightPanel';
import Kanban from './Kanban';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <div className="App">
     <Header />
     <RightPanel />
     <Switch >
       <Route path='/' exact>
          <Kanban/>
       </Route>
       <Route path='/kanban'>
       <Kanban/>
       </Route>
       <Route path='/weeklyscheduale' component={Home}></Route>
     </Switch> 
    </div>
  );
  }

export default App;
