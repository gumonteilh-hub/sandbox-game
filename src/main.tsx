import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Forest from './scenes/forest/Forest.tsx'
import './index.css'
import Mine from './scenes/Mine.tsx';
import GameContextProvider from './scenes/forest/services/GameContext.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Forest />
  },
  {
    path: "/mines",
    element: <Mine />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameContextProvider>
      <RouterProvider router={router} />
    </GameContextProvider>,
  </React.StrictMode>,
)
