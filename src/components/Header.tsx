import { authUserAtom } from '@/store/authUser';
import { useAtomValue } from 'jotai';
import { Home, LogIn, User } from 'lucide-react';
import { Link } from 'react-router';

function Header() {
  const authUser = useAtomValue(authUserAtom);
  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">O'lidays</h1>
      <nav>
        <ul className="flex space-x-4">
          <li className="hover:text-gray-400">
            <Link to="/" className="flex gap-2">
              <Home /> Accueil
            </Link>
          </li>
          {!authUser ? (
            <li className="hover:text-gray-400">
              <Link to="/login" className="flex gap-2">
                <LogIn /> Se connecter
              </Link>
            </li>
          ) : (
            <li className="hover:text-gray-400 flex flex-col gap-1 justify-center items-center">
              <Link to="/account" className="flex gap-2">
                <User /> {authUser.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
