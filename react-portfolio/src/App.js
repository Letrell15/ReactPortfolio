import './styles/App.css';
import Header from './components/Header';
import MainHome from './components/MainHome';
import About from './components/About';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Router>
         

    <div className="App">
      <Header />
      {/* <MainHome /> */}
    </div>
          <Routes>
            <Route path="/" element={<MainHome />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
      </Router>
  );
}

export default App;
