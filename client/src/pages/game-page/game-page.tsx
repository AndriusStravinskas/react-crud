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
import { GamePageFlex, SwiperBox, TitleBig, TitleSmall } from './styled';

const GamePage = () => {
  const { id } = useParams();
  const game = useGame(id);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  if (game === undefined) return null;

  return (
    <GamePageFlex>
      <TitleSmall variant="h5">{game.title}</TitleSmall>
      <SwiperBox mb={5}>
        <ImgSwiper {...game} />
        <Chip label={game.category} sx={{ mt: 3, color: 'primary.light' }} />
      </SwiperBox>
      <Box>
        <TitleBig variant="h4">{game.title}</TitleBig>
        <Box sx={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}
        >
          <Typography px={5} variant="body1" textAlign="center">{game.description}</Typography>
          <Typography variant="body1" mt={5}>{`šalis: ${game.location.country}`}</Typography>
          <Typography variant="body1">{`Miestas: ${game.location.city}`}</Typography>
          <Typography variant="body1">{`Būklė: ${game.condition}`}</Typography>
          <Typography variant="body1">{`Kaina: ${game.price}`}</Typography>
        </Box>
      </Box>
    </GamePageFlex>
  );
};

export default GamePage;
