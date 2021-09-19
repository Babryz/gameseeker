import './App.css';

// Components
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Games from './components/games/games'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SingleGame from './components/singleGame/singleGame';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="gs-main-wrapper">
          <div className="gs-bg-overlay">
            <Switch>
              <Route path="/game/:id">
                <SingleGame />
              </Route>
              <Route path="/">
                <Sidebar />
                <Games />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
