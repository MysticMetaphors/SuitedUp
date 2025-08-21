import { Routes, Route } from 'react-router-dom';
import 'dompurify'

import DefaultLayout from './Pages/Layout/DefaultLayout';
import FloatingBg from './Components/FloatingBg';
import ButtonToTop from './Components/ButtonToTop';

import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardLayout from './Pages/Layout/Dashboard';
import Profile from './Pages/Profile';
import NotFound from './Pages/Error/404';

export default function App() {
  return (
    <FloatingBg count={20}>
      <ButtonToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </FloatingBg>

  )
}