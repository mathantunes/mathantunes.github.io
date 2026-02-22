import { HashRouter } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import AppRoutes from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <PageWrapper>
          <AppRoutes />
        </PageWrapper>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;