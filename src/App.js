import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';

function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/detail/:id' element={<DetailPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
