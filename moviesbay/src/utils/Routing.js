import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../ui/mainLayout';
import { Dashboard } from '../pages/Dashboard';
import { PageNotFound } from '../pages/PageNotFound';

export const RoutingMap = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
