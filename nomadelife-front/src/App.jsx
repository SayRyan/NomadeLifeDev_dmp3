import "./App.css"


// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"


// hooks
import { useState, useEffect } from "react"
import { useAuthentication } from './hooks/useAuthentication'


// pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Post from "./pages/Post/Post"


// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CreatePost from "./pages/CreatePost/CreatePost"
import Search from "./pages/Search/Search"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Dashboard from "./pages/Dashboard/Dashboard"
import EditPost from "./pages/EditPost/EditPost"


// context
import { AuthProvider } from "./context/AuthContext"


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
    return<p>Carregando...</p>
  }
  
  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
        <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/posts/create' element={<CreatePost/>}></Route>
              <Route path='/posts/edit/:id' element={<EditPost/>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
              <Route path='/search' element={<Search/>}></Route>
              <Route path='/posts/:id' element={<Post/>}></Route>
              
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
  </div>
)
    
}


export default App