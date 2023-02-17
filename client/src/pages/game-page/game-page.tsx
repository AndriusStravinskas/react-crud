/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Box } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import useGame from '../../hooks/useGames';

const GamePage = () => {
  const { id } = useParams();
  const game = useGame(id);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box component="pre">
      {JSON.stringify(game, null, 4)}
    </Box>
  );
};

export default GamePage;
