import { Layout } from './components/layout/Layout';
import { RouterProvider, useRouter } from './context/RouterContext';
import { ChiSiamoPage } from './pages/ChiSiamoPage';
import { CollezioniPage } from './pages/CollezioniPage';
import { ContattiPage } from './pages/ContattiPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServiziPage } from './pages/ServiziPage';

function ActivePage() {
  const { routeId } = useRouter();

  switch (routeId) {
    case 'home':
      return <HomePage />;
    case 'collezioni':
      return <CollezioniPage />;
    case 'servizi':
      return <ServiziPage />;
    case 'chi-siamo':
      return <ChiSiamoPage />;
    case 'contatti':
      return <ContattiPage />;
    default:
      return <NotFoundPage />;
  }
}

export default function App() {
  return (
    <RouterProvider>
      <Layout>
        <ActivePage />
      </Layout>
    </RouterProvider>
  );
}
