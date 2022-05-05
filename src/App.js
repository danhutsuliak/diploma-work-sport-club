import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/layout/layout.component';
import About from './pages/about/about.component';
import Home from './pages/home/home.component';
import NoMatch from './pages/no-match/no-match.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
