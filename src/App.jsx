import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './pages/Home'
import { Recipes } from './pages/Recipes'
import { RecipesForm } from './pages/RecipesForm'
import { SingIn } from './components/SingIn'
import { SignUp } from './components/SignUp'
import { MyHeader } from './components/MyHeader'
import { PwReset } from './components/PwReset'
import { ToastContainer } from 'react-toastify'
import { MyToastify } from './components/MyToastify'
import { UserProfile } from './pages/UserProfile'
import { useContext } from 'react'
import { myUserContext } from './context/MyUserProvider'
import { NotFound } from './components/NotFound'
import { Protectedroute } from './Protectedroute'

function App() {
  const { user } = useContext(myUserContext)
  return (
    <div className='container'>
      <MyHeader />
      <MyToastify />
      <ToastContainer />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<SingIn />} />
        <Route path='/pwreset' element={<PwReset />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/addnew" element={<Protectedroute><RecipesForm /></Protectedroute>} />
        <Route path="/edit/:id" element={<Protectedroute><RecipesForm /></Protectedroute>} />
        <Route path="/profile" element={<Protectedroute><UserProfile /></Protectedroute>} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
