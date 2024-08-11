import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioSady from './portfoliosady.jsx'; 
import './index.css';
import './portfoliosady.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioSady />
  </StrictMode>
  
);
