import './App.css'
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import '../node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <PrimeReactProvider>
      <AppRoutes />
    </PrimeReactProvider>
  )
}

export default App