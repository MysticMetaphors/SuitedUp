import { Routes, Route } from 'react-router-dom';
import 'dompurify'

import DefaultLayout from './Pages/Layout/DefaultLayout';
import FloatingBg from './Components/FloatingBg';
import ButtonToTop from './Components/ButtonToTop';

import Home from './Pages/Home';
import Shop from './Pages/Shop';

export default function App() {
  return (
    <FloatingBg count={20}>
      <ButtonToTop />
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </DefaultLayout>
    </FloatingBg>
  );
}