import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import ResponsePage from './pages/ResponsePage/ResponsePage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/response' element={<ResponsePage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
