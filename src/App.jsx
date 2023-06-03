import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HabitsPage from './pages/HabitsPage';
import TodayPage from './pages/TodayPage';
import HistoryPage from './pages/HistoryPage';
import { MyContext } from './contexts/MyContext';
import { useState } from "react";

export default function App(){

  let[profileImage, setProfileImage] = useState('');
  let [token, setToken] = useState('');
  let [count, setCount] = useState(0);
  let [percentage, setPercentage] = useState(0);

  return (
    <BrowserRouter>
      <MyContext.Provider value={{profileImage, setProfileImage, token, setToken, count, setCount, percentage, setPercentage}} >
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/cadastro' element={<RegisterPage />} />
          <Route path='/habitos' element={<HabitsPage />} />
          <Route path='/hoje' element={<TodayPage />} />
          <Route path='/historico' element={<HistoryPage />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  )
}