import { BrowserRouter } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <PageWrapper>
        <AppRoutes />
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;