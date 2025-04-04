import { authUserAtom } from '@/store/authUser';
import { useAtomValue } from 'jotai';
import { Navigate, Outlet } from 'react-router';

function ProtectedRoute({
  authorizedRoles,
}: {
  authorizedRoles: string[];
}) {
  const authUser = useAtomValue(authUserAtom);

  if (!authUser || !authorizedRoles.includes(authUser.role)) {
    // Si l'utilisateur n'est pas connecté, je le redirige vers la page de login
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
