import { Route, Routes } from 'react-router';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Login from './pages/Login';
import PropertyDetail from './pages/PropertyDetail';
import MyProperties from './pages/Account/MyProperties';
import HomeAccount from './pages/Account/HomeAccount';
import CreateProperty from './pages/Account/Property/CreateProperty';

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateAccount />} />
        <Route path="/property/:id" element={<PropertyDetail />} />

        <Route
          path="/account"
          element={<ProtectedRoute authorizedRoles={['USER']} />}
        >
          <Route index element={<HomeAccount />} />
          <Route path="properties" element={<MyProperties />} />
          <Route path="property/create" element={<CreateProperty />} />
        </Route>

        <Route
          path="/admin"
          element={<ProtectedRoute authorizedRoles={['ADMIN']} />}
        >
          <Route index element={<div>Mon compte</div>} />
          <Route path="properties" element={<div>Mes propriétés</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
