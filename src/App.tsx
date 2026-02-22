import { createHashRouter, RouterProvider } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import AppRoutes from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

const router = createHashRouter([
  {
    path: "/",
    element: <PageWrapper><AppRoutes /></PageWrapper>,
  }
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;