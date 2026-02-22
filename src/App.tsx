import { BrowserRouter, HashRouter } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import AppRoutes from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const isProduction = import.meta.env.MODE === 'production';
  const Router = isProduction ? HashRouter : BrowserRouter;

  return (
    <ThemeProvider>
      <Router>
        <PageWrapper>
          <AppRoutes />
        </PageWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;