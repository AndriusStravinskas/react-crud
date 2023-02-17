/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import GamesModels from 'models/games-model';
import ApiService from 'services/api-service';
import routes from '../../navigation/routes';

const GamePage = () => {
  const { id } = useParams();

  if (id === undefined) {
    return <Navigate to={routes.HomePage} />;
  }

  const [game, setGame] = React.useState<GamesModels | undefined>(undefined);

  React.useEffect(() => {
    (async () => {
      const fetchedGame = await ApiService.fetchGame(id);

      setGame(fetchedGame);
    })();
  }, [id]);

  return (
    <Box component="pre">
      {JSON.stringify(game, null, 4)}
    </Box>
  );
};

export default GamePage;
