import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import './App.scss'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={< Layout/>} />
      </Routes>
    </>
  )
}
export default App
