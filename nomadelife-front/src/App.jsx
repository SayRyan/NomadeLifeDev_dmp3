import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthentication } from './hooks/useAuthentication'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard/Dashboard'
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost/CreatePost'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import loading from '../public/loading.svg'
import About from './pages/About/About'
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react'

const loadingUser = user === undefined

useEffect(() => {
  onAuthStateChanged(auth, user => {
    setUser(user)
  })
}, [auth])
if(loadingUser) {
  <div className='container load'><img src={loading} width="120px" height="120px" alt="Loading Blog" /></div>
}

function App() {
  const { user, setUser } = useState(undefined)
  const { auth } = useAuthentication()

  return (
    <>
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/post/create' element={<CreatePost />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
