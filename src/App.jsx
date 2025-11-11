import { Route, Routes } from 'react-router'
import './App.css'
import { Home } from './pages/Home'
import { Recipes } from './pages/Recipes'
import { RecipesForm } from './pages/RecipesForm'
import { SingIn } from './components/SingIn'
import { SignUp } from './components/SignUp'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signin' element={<SingIn />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/addnew" element={<RecipesForm />} />
      <Route path="/edit/:id" element={<RecipesForm />} />
    </Routes>
  )
}

export default App
