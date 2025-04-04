import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
