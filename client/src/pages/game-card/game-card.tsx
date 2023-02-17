import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import GamesModels from 'models/games-model';
import Img from 'components/ui/img';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
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
      sx={{ width: '300px', position: 'relative' }}
    >
      <Styled.AdminActions>
        <Button variant="contained" color="warning" onClick={() => navigate(routes.GameUpdatePage.createLink(id))}>
          Update
        </Button>
        <Button variant="contained" color="error" onClick={onDelete}>
          Delete
        </Button>
      </Styled.AdminActions>
      <Img
        src={images[0]}
      />
      <Button variant="contained" color="primary" onClick={() => navigate(routes.GamePage.createLink(id))}>
        View
      </Button>
      <CardContent>
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
