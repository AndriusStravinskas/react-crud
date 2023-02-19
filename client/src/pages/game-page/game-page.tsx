/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useGame from '../../hooks/useGames';
import ImgSwiper from './swiper';

const GamePage = () => {
  const { id } = useParams();
  const game = useGame(id);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  if (game === undefined) return null;

  return (
    <Box width="300px">
      <Typography variant="h5" sx={{ textAlign: 'center' }}>{game.title}</Typography>
      <ImgSwiper {...game} />
      <Chip label={game.category} sx={{ mt: 3, color: 'primary.light' }} />
      <Box sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5,
      }}
      >
        <Typography variant="body1" textAlign="center">{game.description}</Typography>
        <Typography variant="body1" mt={5}>{`šalis: ${game.location.country}`}</Typography>
        <Typography variant="body1">{`Miestas: ${game.location.city}`}</Typography>
        <Typography variant="body1">{`Būklė: ${game.condition}`}</Typography>
        <Typography variant="body1">{`Kaina: ${game.price}`}</Typography>
      </Box>
    </Box>
  );
};

export default GamePage;
