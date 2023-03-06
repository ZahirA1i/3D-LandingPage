import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Loader } from '@react-three/drei';
import './index.css';

import Footer from './components/Footer';
import Portfolio from './components/Portfolio';



const root = createRoot(document.getElementById('root'));
root.render(
 <>
  <Suspense fallback={null}>
    <Portfolio/>
    <Footer/>
  </Suspense>
  <Loader/>
 </>
);
