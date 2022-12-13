import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Button } from './components/Button';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <Button style={{ color: '#54E54E' }}>
      Entrar
    </Button>
    <Button style={{ color: '#E54E54' }}>
      Sair
    </Button>
  </div>
);