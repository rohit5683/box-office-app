import Home from './Pages/Home';
import Starred from './Pages/Starred';
import MainLayout from './Components/MainLayout';
import Show from './Pages/Show';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>
          <Route path="*" element={<div> Page Not Found</div>} />
          <Route path="/show/:showId" element={<Show />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
