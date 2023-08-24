import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import './App.scss';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
