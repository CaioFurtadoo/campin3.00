import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { MainPage } from './pages/MainPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/">
          <Route index element={<MainPage/>}/>
        </Route>

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App

