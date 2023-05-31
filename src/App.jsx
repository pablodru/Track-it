import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HabitsPage from './pages/HabitsPage';
import TodayPage from './pages/TodayPage';
import HistoryPage from './pages/HistoryPage';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/cadastro' element={<RegisterPage />} />
        <Route path='/habitos' element={<HabitsPage />} />
        <Route path='/hoje' element={<TodayPage />} />
        <Route path='/historico' element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}