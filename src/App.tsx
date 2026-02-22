import { BrowserRouter } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import AppRoutes from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <PageWrapper>
          <AppRoutes />
        </PageWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;