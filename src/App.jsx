import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import './App.scss';
import About from './components/About/About';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
