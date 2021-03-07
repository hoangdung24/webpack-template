import React, { lazy, Suspense } from 'react';
import './App.scss';

import { BrowserRouter } from "react-router-dom";

const TheLayout = lazy(() => import("./containers/TheLayout.js"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <TheLayout />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
