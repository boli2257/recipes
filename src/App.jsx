import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './pages/Home'
import { Recipes } from './pages/Recipes'
import { RecipesForm } from './pages/RecipesForm'
import { SingIn } from './components/SingIn'
import { SignUp } from './components/SignUp'
import { MyHeader } from './components/MyHeader'
import { PwReset } from './components/PwReset'

function App() {

  return (
    <div className='container'><MyHeader/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path='/signin' element={<SingIn />}/>
      <Route path='/pwreset' element={<PwReset/>}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/addnew" element={<RecipesForm />} />
      <Route path="/edit/:id" element={<RecipesForm />} />
    </Routes>
    </div>
  )
}

export default App
