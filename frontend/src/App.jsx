import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router'
import CustomerHome from './components/CustomerHome'
import DefaultLayout from './components/DefaultLayout';

function App() {

  return (
    <>
     <Routes>
      <Route element={<DefaultLayout/>}>
        <Route path='/' element={<CustomerHome/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
