import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import ApiService from 'services/api-service';
import GamesModels from 'models/games-model';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import GameCard from './game-card/game-card';
import * as Styled from './styled';

const HomePage = () => {
  const navigate = useNavigate();
  const [games, setGames] = React.useState<GamesModels[]>([]);

  const onDelete = async (id: string | number) => {
    await ApiService.deleteGame(id);
    const fetchedGames = await ApiService.fetchGames();
    setGames(fetchedGames);
  };

  React.useEffect(() => {
    (async () => {
      const fetchedGames = await ApiService.fetchGames();
      setGames(fetchedGames);
    })();
  }, []);

  return (
    <>
      <Box>
        <Button onClick={() => navigate(routes.GameCreatePage)}>Create</Button>
      </Box>
      <Styled.GameCardGrid>
        {games.map((game) => (
          <GameCard key={game.id} {...game} onDelete={() => onDelete(game.id)} />
        ))}

      </Styled.GameCardGrid>
    </>
  );
};

export default HomePage;
