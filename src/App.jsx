import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './Pages/Layout/DefaultLayout';
import FloatingBg from './Components/FloatingBg';

import Home from './Pages/Home';

export default function App() {
  return (
      <FloatingBg count={20}>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </DefaultLayout>
      </FloatingBg>
  );
}