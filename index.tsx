import {createRoot} from 'react-dom/client';
import { App } from './app/app';

const root = createRoot(document.getElementById('app'));
root.render(<App />);