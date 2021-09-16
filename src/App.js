import './App.css';

// Components
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Games from './components/games/games'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="gs-main-wrapper">
        <div className="gs-bg-overlay">
          <Sidebar />
          <Games />
        </div>
      </main>
    </div>
  );
}

export default App;
