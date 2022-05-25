import React, { useState, useEffect } from 'react';
import AuthNavigation from './AuthNavigation';
import LogoScreen from './screens/LogoScreen.js';

export default function App() {
  const [openApp, setOpenApp] = useState(null);

  useEffect(() => {setTimeout(() => {setOpenApp(true)}, 1000)}, []);

  return <>{openApp ? <AuthNavigation /> : <LogoScreen />}</>
}

