import GamesModels from 'models/games-model';
import React from 'react';
import ApiService from 'services/api-service';

const useGame = (id: string | undefined) => {
  const [game, setGame] = React.useState<GamesModels | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedGame = await ApiService.fetchGame(id);

        setGame(fetchedGame);
      })();
    }
  }, [id]);

  return game;
};

export default useGame;
