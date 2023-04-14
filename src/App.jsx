import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import MainLayout from './Components/MainLayout';
import Show from './Pages/Show';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<div> Page Not Found</div>} />
        <Route path="/show/:showId" element={<Show />} />
      </Routes>
    </Router>
  );
}

export default App;
