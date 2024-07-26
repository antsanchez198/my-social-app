import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeFeed from './pages/HomeFeed'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Post from './pages/Post'
import Profile from './pages/Profile'

function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeFeed />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
