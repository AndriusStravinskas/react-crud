/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Navigate } from 'react-router-dom';
import GamesModels from 'models/games-model';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';

const useGame = (id: string) => {
  const [game, setGame] = React.useState<GamesModels | undefined>(undefined);

  if (game === undefined) {
    return <Navigate to={routes.HomePage} />;
  }

  React.useEffect(() => {
    (async () => {
      const fetchedGame = await ApiService.fetchGame(id);

      setGame(fetchedGame);
    })();
  }, [id]);

  return game;
};

export default useGame;
