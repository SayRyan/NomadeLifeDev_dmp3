import './App.css'
 
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
 
import { onAuthStateChanged } from 'firebase/auth'

//Hooks
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'

//components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'
import EditPost from './pages/EditPost/EditPost'

//context
import { AuthProvider } from './context/AuthContext'

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()


  const loadingUser = user === undefined


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])


  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar/>
          <div className='container'>
            <Routes>
              <Route path='/'element={<Home/>}></Route>
              <Route path='/about'element={<About/>}></Route>
              <Route path='/login'element={<Login/>}></Route>
              <Route path='/register'element={<Register/>}></Route>
              <Route path='/posts/create'element={<CreatePost/>}></Route>
              <Route path='/posts/edit'element={<EditPost/>}></Route>
              <Route path='/dashboard'element={<Dashboard/>}></Route>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App