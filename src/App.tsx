import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './components/header';
import { FormPage } from './pages/formPage';
import { ViewPage } from './pages/viewPage';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
          <Route path='/' element={<FormPage/>}/>
          <Route path='/page_details' element={<ViewPage />}/>
          <Route path={"/*"} element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
