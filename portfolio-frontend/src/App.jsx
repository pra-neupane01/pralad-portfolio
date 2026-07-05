import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Loader from './components/common/Loader';

function App() {
  return (
    <Router>
      <Loader />
      <AppRoutes />
    </Router>
  );
}

export default App;
