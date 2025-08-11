import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './Pages/Layout/DefaultLayout';

import Home from './Pages/Home';

export default function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DefaultLayout>
  );
}