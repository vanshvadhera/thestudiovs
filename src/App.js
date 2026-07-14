import React, { useEffect } from 'react';
import './styles/App.css';
import AppRouter from './navigation/AppRouter';
import { loadVendorScripts } from './utils/loadVendorScripts';

function App() {
  useEffect(() => {
    loadVendorScripts();
  }, []);

  return <AppRouter />;
}

export default App;
