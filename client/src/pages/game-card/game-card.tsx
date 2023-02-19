import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import GamesModels from 'models/games-model';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import ImgGameCard from 'components/ui/img-game-card';
import * as Styled from './styled';

type GameCardProps = GamesModels;

const GameCard: React.FC<GameCardProps> = ({
  id,
  title,
  images,
  description,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ position: 'relative' }}
    >
      <Styled.AdminActions>
        <Button variant="contained" color="warning" onClick={() => navigate(routes.GameUpdatePage.createLink(id))}>
          Update
        </Button>
        <Button variant="contained" color="error" onClick={onDelete}>
          Delete
        </Button>
      </Styled.AdminActions>
      <ImgGameCard
        src={images[0]}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate(routes.GamePage.createLink(id))}
        sx={{ ml: 2 }}
      >
        View
      </Button>
      <CardContent sx={{ p: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCard;
