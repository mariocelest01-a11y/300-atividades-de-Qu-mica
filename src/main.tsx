import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initPixel } from './utils/pixel';

initPixel();

createRoot(document.getElementById('root')!).render(<App />);
