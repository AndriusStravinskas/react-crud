import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavbarLayout from 'components/layout/navbar-layout';
import HomePage from 'pages/games-page';
import GamePage from 'pages/game-page/game-page';
import GameFormPage from 'pages/game-form-page/game-form-page';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.GamePage.routePath,
        element: <GamePage />,
      },
      {
        path: routes.GameCreatePage,
        element: <GameFormPage mode="create" />,
      },
      {
        path: routes.GameUpdatePage.routePath,
        element: <GameFormPage mode="update" />,
      },
    ],
  },
]);

export default router;
